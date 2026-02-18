const express = require('express');
const app = express();

app.use(express.json())
const notes = [];
app.post('/notes',(req,res)=>{
    notes.push(req.body);
    res.status(201).json({status:"Note Created Sucessfully"});
})
app.get('/notes',(req,res)=>{
    res.status(200).json({
        message: "Data fetch sucessfully My nigga",
        notes: notes
    })
})
module.exports = app;