const app = require('./src/app')
const DBconnect = require('./src/db/db')

DBconnect();
app.listen(3000,()=>{
    console.log("Yeah server is running baby")
})