const jwt = require('jsonwebtoken')

function authMiddleware(req,res,next){
    const token=req.header.token;
    const decoded=jwt.verify(token,"nikhil");
    const username=decoded.username;
    if(username){
        req.username=username;
        next();
    }
    else{
        res.status(403).json({
            err:"Token was incorrect"
        })
    }
}
module.exports={
    authMiddleware
}