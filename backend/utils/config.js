require('dotenv').config()

let PORT = process.env.PORT
const MONGODB = process.env.MONGODB
const BASE_URL = process.env.BASE_URL

module.exports = {
    PORT, MONGODB, BASE_URL
}

