const express = require("express")
const router = express.Router();
const musicController = require("../Controller/music.controller")
const multer = require("multer")
const storage = multer.memoryStorage()
const upload = multer({storage})
router.post("/upload",upload.single("music"),musicController.createMusic)






module.exports = router;