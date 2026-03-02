const jwt = require("jsonwebtoken")
async function AuthArtist(req,res,next){
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({
            message:"Unauthorised Access"
        })
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        if(decoded.role !== "Artist"){
            return res.status(403).json({
                message:"Sorry You cannot create The music"
            })
        }
        next()
    }
    catch(error){
        return res.status(401).json({
            message:"Unauthorised Access"
        })
    }
}

module.exports = {AuthArtist}