const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
    },
    products:{
        type: [Object],
        required: true
    },
    totalPrice:{
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Order', orderSchema)