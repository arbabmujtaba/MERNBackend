const express = require("express")
const notemodel = require("./models/note.model")
const app = express();
app.use(express.json())
app.post("/notes", async (req,res)=>{
    const data = req.body;
    await notemodel.create({
        title:data.title,
        description:data.description
    })
    res.status(201).json({
        message:"note Create Hogaya bhai"
    }
    )
})
app.get("/notes",async (req,res)=>{
   const notes = await notemodel.find()
    res.status(200).json({
        message:"Notes mil Gayai Bhai",
        notes: notes
    })
})
app.delete("/notes/:id",async (req,res)=>{
    const id = req.params.id
    await notemodel.findOneAndDelete({
        _id:id
    })
    res.status(200).json({
        message:"Note Has been deleted"
    })
})
app.patch("/notes/:id",async (req,res)=>{
    const id = req.params.id
    const description = req.body.description
    await notemodel.findOneAndUpdate({
        _id:id
    },{
        description: description
    })
    res.status(200).json({
        message:"The note has been sucessfully updated"
    })
})
module.exports=app;