const mongoose = require("mongoose")

const musicSchema = new mongoose.Schema({
    uri:{
        type:String,
        required:true
    },
    Title:{
        type:String,
        required:true,
        unique:true
    },
    Role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
})
const musicModel = mongoose.model("Music",musicSchema)

module.exports = musicModel