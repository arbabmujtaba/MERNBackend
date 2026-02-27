const app = require('./src/app')
const DBconnect = require('./src/db/db')
require("dotenv").config()
DBconnect();
app.listen(3001,()=>{
    console.log("Server running on port")
})
