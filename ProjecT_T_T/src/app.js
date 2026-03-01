const express = require('express');
const cookieparser = require("cookie-parser");
const authRoutes = require("./Routes/auth.routes");
const musicRoutes = require("./Routes/music.routes")






const app = express();
app.use(cookieparser());
app.use(express.json());









app.use("/api/auth",authRoutes)
app.use("/api/Music", musicRoutes)


module.exports = app 
