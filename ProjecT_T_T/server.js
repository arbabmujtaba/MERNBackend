require("dotenv").config()
const app = require("./src/app")
const DBconnect = require("./src/db/db")
DBconnect();
app.listen(3002,()=>{
    console.log("Server is running on port 3002")
})