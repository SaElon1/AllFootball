const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String,
        unique:true
    },
    password:{
        type:String
    },
    cartItems:{ 
        type: Object
    }
})

module.exports = mongoose.model('User', userSchema)

