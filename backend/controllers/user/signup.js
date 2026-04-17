const User = require('../../models/user.model');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username })
        if (user) {
            return res.status(403).json({
                err: "This user already exist use another one"
            })
        }
        else {
            const newUser = await User.create({
                username,
                password,
            })
            const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY_JWT)
            res.cookie("token", token, {
                httpOnly: true,
                secure: true,       
                sameSite: "none"    
            });

            res.status(201).json({
                message: `User created successfully ${newUser.username} `
            });
        }
    }
    catch (err) {
        res.status(500).json({
            message: `Database server failed ${err}`
        });
    }
};
module.exports = signup;