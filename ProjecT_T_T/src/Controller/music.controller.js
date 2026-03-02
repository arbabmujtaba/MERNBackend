const MusicModel = require("../Models/music.model")
const albumModel = require("../Models/album.model")
const {UploadFile} = require("../services/storage.service")
const jwt = require("jsonwebtoken")
async function createMusic(req,res){
    try{
        const { title } = req.body
        const token = req.cookies.token
        const file = req.file
        if(!token){
            return res.status(401).json({
                message:"Unauthorised Access"
            })
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        if(decoded.role !== "Artist"){
            return res.status(403).json({
                message:"Sorry You cannot create The music"
            })
        }
        if(!title || !file){
            return res.status(400).json({
                message:"Title and music file are required"
            })
        }
        const result = await UploadFile(file.buffer.toString("base64"))
        const music = await MusicModel.create({
            uri: result.url,
            Title: title,
            Role: decoded.id
        })
        return res.status(201).json({
            message:"Music Created Successfully",
            music:{
                id: music._id,
                title: music.Title,
                musicUrl: music.uri
            }
        })
    } catch(err){
        return res.status(409).json({
            message:"sorry you dont have the access"
        })
    }
}
async function CreateAlbum(req,res){
    const token = req.cookies.token
    const {title,music} = req.body
    if(!token){
        return res.status(401).json({
            message:"Unauthorised Access"
        })
    }
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    if(decoded.role !== "Artist"){
        return res.status(403).json({
            message:"Sorry You cannot create The music"
        })
    }
    const album = await albumModel.create({
        title,
        music:music,
        artist:decoded.id
    })
    return res.status(201).json({
        message:"Album Created Successfully",
        album:{
            id: album._id,
            title: album.title,
            artist:album.artist,
            music:album.music

        }
    })
}


module.exports = {createMusic, CreateAlbum}
