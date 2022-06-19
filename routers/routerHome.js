require("../app")
const express = require("express")
const router = express.Router()
//---------------------------------------------
router.get("/", (req, res) => {
    res.render("../views/pages/home")
})

router.get("/shopF", (req, res) => {
    res.render("../views/pages/lojaFem")
})

router.get("/shopM", (req, res) => {
    res.render("../views/pages/lojaMasc")
})


//---------------------------------------------
module.exports = router;