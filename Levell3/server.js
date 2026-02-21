const app = require("./src/app")
const DBconnect = require("./src/db/db")


DBconnect();
app.listen(3000,()=>{
    console.log("Ballay Ballay server connect Hogaya")
})