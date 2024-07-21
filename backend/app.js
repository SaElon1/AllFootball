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

    //This is only for testing the app
app.get("/", (req, res) =>{
    res.send("Backend is running!")
})

//Image storing configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./upload/images")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    }
})

const upload = multer({storage})

app.use("/images", express.static("upload/images"))
app.post("/upload", upload.single("product"),(req,res) => {
    res.json({
        imageUrl: `http://localhost:${config.PORT}/images/${req.file.filename}`    })
})



app.use(express.json())
app.use(cors())


module.exports = app