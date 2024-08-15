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
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }]
})

module.exports = mongoose.model('User', userSchema)

