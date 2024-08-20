const orderRouter = require('express').Router()
const Order = require('../models/order')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

const getTokenFrom = req => {
    const authorization = req.get('authorization')
    if (authorization && authorization.startsWith('Bearer')) {
        return authorization.replace('Bearer', '')
    }
    return null
}

orderRouter.post('/order', async(req, res) => {
    const {products, totalPrice} = req.body

    const decodedToken = jwt.verify(getTokenFrom(req), process.env.SECRET)
    if (!decodedToken.id) {
        return res.status(401).json({error: 'Token invalid'})
    }

    try {
        const user = await User.findById(decodedToken.id)

    const newOrder = new Order({
        products:products,
        date: Date.now(),
        totalPrice:totalPrice,
        user: user._id
    })


    const savedOrder = await newOrder.save()
    user.orders = user.orders.concat(newOrder._id)
    await user.save()
    res.status(200).json(savedOrder)
    }catch(error){
        console.error(error)
    }
})

orderRouter.get('/orderhistory', async(req, res) => {

    const decodedToken = jwt.verify(getTokenFrom(req), process.env.SECRET)
    if (!decodedToken.id) {
        return res.status(401).json({error: 'Token invalid'})
    }

    try{
        const user = await User.findById(decodedToken.id)
        const orderIds = user.orders

        
        const orders = await Order.find({_id: {$in: orderIds}})
        .populate('products') 
        res.status(200).json(orders)

    }catch(error) {
        console.error('Error in fetching orders', error)
    }

})

module.exports = orderRouter
