const express = require("express")
const multer = require("multer")
const uploadFile = require("./services/storage.services")
const cors = require("cors")
const postmodel = require("./models/post.model")
require("dotenv").config()
const app = express();
app.use(express.json())
app.use(cors())
const upload = multer({storage:multer.memoryStorage()})
app.post("/create-post",upload.single("image"),async (req,res)=>{
    const result = await uploadFile(req.file.buffer)
    const post = await postmodel.create({
        image:result.url,
        caption:req.body.caption
    })
    return res.status(201).json({
        message:"Post Has been sucesfully created",
        post
    })
})
app.get("/Posts",async (req,res)=>{
    const posts = await postmodel.find()
    res.status(200).json({
        message:"Posts fetch sucesfully",
        posts
    })
})
module.exports = app