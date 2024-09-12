const config = require("./utils/config")
const express = require("express")
const app = express()
const mongoose = require('mongoose')
const multer = require("multer")
const cors = require("cors")
const productRouter = require("./controllers/products")
const userRouter = require("./controllers/users")
const orderRouter = require("./controllers/orders")
const errorHandler = require("./utils/middleware")

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

//Image storing
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

app.post("/upload", upload.array("images", 10),(req,res) => {
    const imageUrls = req.files.map(file => `${config.BASE_URL}/images/${file.filename}`)
    res.json({
        imageUrls
})
})



app.use(express.json())
app.use(cors())

app.use('/api/product', productRouter)
app.use('/api/user', userRouter)
app.use('/api/product',orderRouter)

app.use(errorHandler)


module.exports = app
