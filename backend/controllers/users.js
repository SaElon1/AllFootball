const userRouter = require('express').Router()
const User = require('../models/user')
const config = require('../utils/config')
const bcrypt = require('bcrypt')

userRouter.post('/signIn', async(req, res) =>{
    const {name, email, password} = req.body

    const existingUser = await User.findOne({email})
    if(existingUser){
        return res.status(400).json({error: "User already exists with this email"})
    }

    const saltrounds = 10
    const passwordHash = await bcrypt.hash(password, saltrounds)

    let cart = {}
    for (let i = 0; i < 100; i++) {
        cart[i] = 0
    }

    const user = new User({
        name:name,
        email:email,
        password: passwordHash,
        cartItems: cart
    })


    const savedUser = await user.save()

    res.status(201).json(savedUser)
})

module.exports = userRouter