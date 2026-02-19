const mongoose = require("mongoose")

async function ConnectDB() {
    await mongoose.connect("mongodb+srv://BK:Arbab123@backend.euxv5gl.mongodb.net/Tommy")
    console.log("DB Connect Hogaya Hai BHai")
}

module.exports=ConnectDB;