const mongoose = require("mongoose")
async function ConnectDB() {
   await mongoose.connect("mongodb+srv://BK:Arbab123@backend.euxv5gl.mongodb.net/Project-1")
    console.log("The DB connection is sucessfull")
}
module.exports = ConnectDB; 