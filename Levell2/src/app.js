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
   const notes = await notemodel.findOne({
    description:"This is my ist note"
   })
    res.status(200).json({
        message:"Notes mil Gayai Bhai",
        notes: notes
    })
})
module.exports=app;