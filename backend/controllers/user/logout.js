const jwt = require('jsonwebtoken');

const logout = (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        secure: true,
        sameSite: "none"
    });
    res.status(200).json({
        message: "logout succesfully"
    })
}
module.exports = logout;