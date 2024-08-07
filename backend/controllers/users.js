const userRouter = require('express').Router()
const { response } = require('express')
const User = require('../models/user')
const config = require('../utils/config')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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

userRouter.post('/login', async(req,res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})
    const passwordCorrect = user === null
    ?false
    :await bcrypt.compare(password, user.password)

    if (!(user && passwordCorrect)) {
        return res.status(401).json({
            error: 'invalid email or password'
        })
    }

    const userForToken = {
        email: user.email,
        id: user._id
    }

    const token = jwt.sign(userForToken, process.env.SECRET, {expiresIn: '1h'})

    res
    .status(200)
    .send({token, email: user.email, name: user.name})
})

module.exports = userRouter