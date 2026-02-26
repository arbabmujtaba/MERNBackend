const userModel = require("../models/user.model")
require("dotenv").config()
const jwt = require("jsonwebtoken")
async function registerUser(req,res){
    const {username,email,password} = req.body;
    const isUserAlreadyPresent = await userModel.findOne({
        email
    })
    if(isUserAlreadyPresent){
        return res.status(409).json({
            message:"User Already Present"
        })
    }
    const user = await userModel.create({
        username,email,password
    })
    const token = jwt.sign({
        id : user._id
    }, process.env.JWT_SECRET
)
res.cookie("token",token)
return res.status(201).json({
    message:"Register Sucessfully",user
})}
module.exports = { registerUser }
