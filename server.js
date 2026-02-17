const express = require(`express`)
const app = express();
app.listen(4000)
app.get("/",(req,res)=>{
    res.send("Wassup Bitch")
})
app.get("/Mypage",(req,res)=>{
    res.send("This is The about page Nigga")
})