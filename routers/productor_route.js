require("../app")
const express = require("express")
const router = express.Router()
const multer = require("multer")

const uploadImage = require('../services/firebase')

const Multer = multer({
    storage: multer.memoryStorage(),
    limits: 1024 * 1024
})
//---------------------------------------------
router.get("/", (req, res) => {
    res.render('../views/pages/productor.handlebars')
})

router.post("/register-productor", Multer.single("image_avatar"), uploadImage, (req, res) => {
    const request = req.file;
    const name = req.body.shop_name
    const firebaseUrl = req.file.firebaseUrl;

    console.log('resposta do servidor', firebaseUrl);
    res.redirect("/productor")
})

router.post("/login",(req,res)=>{
    console.log('request de login', req.body)
    res.send(req.body)
})

//---------------------------------------------
module.exports = router;