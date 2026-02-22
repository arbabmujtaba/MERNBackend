const mongoose = require("mongoose")
require("dotenv").config()
async function ConnectDB() {
   await mongoose.connect(process.env.DATABASE_KEY)
    console.log("The DB connection is sucessfull")
}
module.exports = ConnectDB; 