const mongoose = require("mongoose")

async function DBconnect(){
    await mongoose.connect(process.env.MONGO_URL)
    console.log("DB Connected Sucessfully")
}
module.exports = DBconnect