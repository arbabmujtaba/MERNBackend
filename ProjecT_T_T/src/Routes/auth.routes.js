const express = require("express")
const router = express.Router()
const authController = require("../Controller/auth.controller")

router.post("/register",authController.registerUser)
router.post("/Login",authController.Login)

module.exports = router