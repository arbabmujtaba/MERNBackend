const express = require('express');
const app = express();
// 
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



app.delete('/notes/:index',(req,res)=>{
    const index = req.params.index;
    delete notes[index]
    res.status(200).json({
        message:"Mai Kaha Ladle Delete Hogaya" 
    })



app.patch("/notes/:index",(req,res)=>{
    const index = req.params.index
    const description = req.body.description
    notes[index].description = description
    res.status(200).json({
        message:"Mat kar lala Update Hogaya"
    })

})
})
module.exports = app;