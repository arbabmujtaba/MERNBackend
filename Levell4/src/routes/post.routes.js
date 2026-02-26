const express = require("express")
const jwt = require("jsonwebtoken")
const usermodel = require("../models/user.model");
const router = express.Router();

router.post("/create",async (req,res)=>{
    const tokken = req.cookies.token
    if(!tokken){
        return res.status(401).json({
            message:"Unauthorized"
        })
    }
    try{
        const decoded = jwt.verify(tokken,process.env.JWT_SECRET)
        const user = await usermodel.findOne({
            _id: decoded.id
        })
        console.log(user)
    }
    catch(err){
        return res.status(401).json({
            message:"Tokken Is Invalid"
        })
    }
})


module.exports = router