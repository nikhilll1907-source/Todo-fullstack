const jwt = require('jsonwebtoken')

function authMiddleware(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        res.status(403).json({
            message: "token is not present"
        })
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY_JWT);
    const id = decoded.id;
    if (id) {
        req.id = id;
        next();
    }
    else {
        res.status(403).json({
            err: "Token was incorrect"
        })
    }
}
module.exports = authMiddleware