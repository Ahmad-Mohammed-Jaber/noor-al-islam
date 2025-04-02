const express = require("express")
const Alim = require("../models/Alim")
const bodyParser = require("body-parser")
const router = express.Router()

// Show all ulama
router.get("/", (req, res) => {
    res.render("ulama/index")  
})

// New Aleem
router.get("/add", (req, res) => {
    res.render("ulama/add", {alim: new Alim()})  
})

// Create (add) new aleem
router.post("/", (req, res) => {
    const alim = new Alim({
        name: req.body.name
    })
  })

module.exports = router