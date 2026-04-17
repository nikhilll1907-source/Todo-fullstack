const jwt = require('jsonwebtoken');
const User = require('../../models/user.model.js');


const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (user) {
            if (password == user.password) {
                const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY_JWT)
                res.cookie("token", token, {
                    httpOnly: true,
                    secure: true,       
                    sameSite: "none"
                });
                res.status(200).json({ message: "login successfully." })
            }

            else {
                return res.status(401).json({
                    error: "Incorrect password"
                })
            }
        }
        else {
            return res.status(401).json({
                error: "user not exist"
            })
        }
    }
    catch (err) {
        res.status(500).json({
            message: `Database server failed ${err}`
        });
    }
}
module.exports = login;