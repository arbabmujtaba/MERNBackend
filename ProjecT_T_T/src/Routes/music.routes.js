const express = require("express")
const router = express.Router();
const musicController = require("../Controller/music.controller")
const Middleware = require("../Middlewares/auth.middleware")
const multer = require("multer")
const storage = multer.memoryStorage()
const upload = multer({storage})
router.post("/upload",Middleware.AuthArtist,upload.single("music"),musicController.createMusic)
router.post("/album",Middleware.AuthArtist,musicController.CreateAlbum)
router.get("/",Middleware.Authuser,musicController.Getallmusic)
router.get("/albums",Middleware.Authuser,musicController.GetallAlbum)
router.get("/albums/:id",Middleware.Authuser,musicController.Getalbumbyid)






module.exports = router;