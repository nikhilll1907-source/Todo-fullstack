const User = require('../../models/user.model.js');

const isLogdin=async (req,res)=>{
    const id=req.id;
    const user =await User.findOne({_id:id});
    res.status(200).json({
        message:`logdin ${user.username}`
    }) 
}
module.exports=isLogdin;