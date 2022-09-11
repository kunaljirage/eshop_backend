const jwt=require('jsonwebtoken');
const config=require('./config')
const getToken=(user)=>{
    return jwt.sign({
        _id:user._id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin
    },
        config.secret,{expiresIn:'48h'})
}

module.exports=getToken;