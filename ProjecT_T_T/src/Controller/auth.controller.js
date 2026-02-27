const usermodel = require("../Models/user.model")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const bcrypt = require("bcryptjs")
async function registerUser(req,res){
    const{username,email,password,role="user"}=req.body
    const existingUser = await usermodel.findOne({
        $or:[
            {username},
            {email}
        ]
    })
    if(existingUser){
       return res.status(409).json({
        message:"User Is already present"
       })
    }
    const hash = await jbcrypt.hash(password,10)
    const user = await usermodel.create({
        username:hash,
        password,
        email,
        role
    })
    
    const token = jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET)
    
    res.cookie("token",token)
    
    
    
    res.status(200).json({
        message:"User Sucessfully created",
        user:{
            id: user._id,
            username:user.username,
            email:user.email,
            role:user.role
        }
    })
}
module.exports = {registerUser}