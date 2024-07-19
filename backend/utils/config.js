require('dotenv').config()

let PORT = process.env.PORT
const MONGODB = process.env.MONGODB

module.exports = {
    PORT, MONGODB
}

