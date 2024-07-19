const config = require("./utils/config")
const express = require("express")
const app = express()
const mongoose = require('mongoose')
const jwt = require("jsonwebtoken")
const multer = require("multer")
const cors = require("cors")

console.log("connecting to: ", config.MONGODB)
mongoose.connect(config.MONGODB)
    .then(() => {
        console.log(`connected to MONGODB ${config.MONGODB}`)
    })
    .catch((error) => {
        console.error(`error connecting to MONGODB ${config.MONGODB}`)
    })

app.use(express.json())
app.use(cors())


module.exports = app