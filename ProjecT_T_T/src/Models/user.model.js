const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    Role:{
        type:String,
        enum: ['user', 'Artist'],
        default:'user',

    }
})
const usermodel = mongoose.model("User",userSchema)
module.exports= usermodel;
