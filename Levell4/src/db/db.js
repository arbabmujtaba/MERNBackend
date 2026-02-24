const mongoose = require("mongoose")
require("dotenv").config()
async function DBconnect(){
    await mongoose.connect(process.env.MONGO_URL)
    console.log("DB Connected")
}

module.exports = DBconnect