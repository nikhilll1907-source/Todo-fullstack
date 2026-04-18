const User = require('../../models/user.model.js');

const isLogdin=async (req,res)=>{
    const id=req.id;
    const user =await User.findOne({_id:id});
    res.status(200).json({
        username:`${user.username}`
    }) 
}
module.exports=isLogdin;