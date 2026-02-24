const mongoose = require("mongoose")
require("dotenv").config()
async function DBconnect(){
    await mongoose.connect(process.env.MONOG_URI)
    console.log("DB Connected")
}

module.exports = DBconnect