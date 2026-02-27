const express = require('express')
const authRoutes = require("../src/routes/auth.routes")
const postRoutes = require("../src/routes/post.routes")
const cookieParser = require("cookie-parser")
const app = express();
app.use(cookieParser())
app.use(express.json())






app.use("/api/Auth",authRoutes)
app.use("/api/Post", postRoutes)
module.exports = app