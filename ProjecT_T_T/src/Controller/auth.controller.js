const usermodel = require("../Models/user.model")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const bcrypt = require("bcryptjs")
async function registerUser(req,res){
    const{username,email,password,Role="user"}=req.body
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
    const hash = await bcrypt.hash(password,10)
    const user = await usermodel.create({
        username,
        password:hash,
        email,
        Role
    })
    
    const token = jwt.sign({id:user._id,role:user.Role},process.env.JWT_SECRET)
    
    res.cookie("token",token)
    
    
    
    res.status(200).json({
        message:"User Sucessfully created",
        user:{
            id: user._id,
            username:user.username,
            email:user.email,
            Role:user.Role
        }
    })
}
async function Login(req,res){
    const {username,email,password} = req.body
    const user = await usermodel.findOne({
        $or:[
            {username},
            {email}
        ]
    })
    if(!user){
        return res.status(401).json({
            message:"User Not Found"
        })
    }
    const isPasswordValid = await  bcrypt.compare(password,user.password)
    if(!isPasswordValid){
        return res.status(401).json({
            message:"pasword is not valid"
        })
    }
    const token = jwt.sign({
        id:user._id,
        role:user.Role
    },process.env.JWT_SECRET)
    res.cookie("token",token)
    res.status(200).json({
        message:"Login Successfull",
        user:{
            id:user._id,
            username:user.username,
            email:user.email,
            Role:user.Role
        }
    })
}
async function Logout(req,res){
    res.clearCookie("token")
    res.status(200).json({
        message:"Logout Successfull"
    })
}
module.exports = {registerUser,Login,Logout}