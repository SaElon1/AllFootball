const productRouter = require('express').Router()
const multer = require('multer')
const Product = require('../models/product')
const config = require('../utils/config')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

const getTokenFrom = req => {
    const authorization = req.get('authorization')
    if (authorization && authorization.startsWith('Bearer')) {
        return authorization.replace('Bearer', '')
    }
    return null
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./upload/images")
    },
    filename:(req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    }
})

const upload = multer({storage})

productRouter.post('/addproduct',upload.array('images',10), async (req,res)=> {
    if (!req.files) {
        return res.status(400).json({ error: 'Images are required'});
    }
    let products = await Product.find({})
    let id;
    if(products.length>0)
    {
        let prevProduct_array = products.slice(-1)
        let prevProduct = prevProduct_array[0]
        id = prevProduct.id+1
    }else{
        id = 1
    }

    const body = req.body

    const imageUrls = req.files.map(file => `${config.BASE_URL}/images/${file.filename}`)

    const product = new Product({
        id: id,
        name: body.name,
        description: body.description,
        category: body.category,
        size: body.size,
        images: imageUrls,
        new_price: body.new_price,
        old_price: body.old_price
    })
    await product.save()
    res.status(201).json(product)
    console.log(product)
})

productRouter.delete('/removeproduct/:id', async(req, res) => {
    await Product.findByIdAndDelete(req.params.id)
    res.status(204).end()
})

productRouter.put('/:id', upload.array('images', 10), async(req, res) => {
    try{
        const productId = req.params.id
        const body = req.body

        const existingProduct = await Product.findById(productId)
        if(!existingProduct){
            return res.status(404).json({error: 'Product not found'})
        }

        let imageUrls = existingProduct.images
        if (req.files && req.files.length > 0) {
            const uploadedImageUrls = req.files.map(file => `${config.BASE_URL}/images/${file.filename}`)
            imageUrls = uploadedImageUrls
        }
        const product = {
            name: body.name || existingProduct.name,
            description: body.description || existingProduct.description,
            category: body.category || existingProduct.category,
            size: body.size || existingProduct.size,
            images: imageUrls,
            new_price: body.new_price || existingProduct.new_price,
            old_price: body.old_price || existingProduct.old_price
        }

        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, product, {new: true})
        console.log(updatedProduct)
        if(!updatedProduct) {
            return res.status(404).json({error: 'Product not found'})
        }
    
        res.json(updatedProduct)

    }catch(error){ 
        
    }
})

productRouter.get('/allproducts', async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})

productRouter.get('/offerProducts', async(req,res) => {
    const products = await Product.find({})
    const offerProducts = products.slice(1).slice(-4)
    res.json(offerProducts)
})

productRouter.post('/addtocart', async(req, res, next) => {
    try {
        const decodedToken = jwt.verify(getTokenFrom(req), process.env.SECRET)
    if (!decodedToken.id) {
        return res.status(401).json({error: 'Token invalid'})
    }
        const user = await User.findById(decodedToken.id)

    const itemId = req.body.itemId

    user.cartItems[itemId] += 1
    const updatedCart = await User.findByIdAndUpdate({_id:decodedToken.id}, {cartItems:user.cartItems})

    console.log(user)
    console.log(itemId)
    res.json(updatedCart)

    }catch(error){
        next(error)
    }
})

productRouter.post('/removefromcart', async(req, res, next) => {
    try{
        const decodedToken = jwt.verify(getTokenFrom(req), process.env.SECRET)
    if (!decodedToken.id) {
        return res.status(401).json({error: 'Token invalid'})
    }
        const user = await User.findById(decodedToken.id)

        const itemId = req.body.itemId
    
        user.cartItems[itemId] = 0
        const updatedCart = await User.findByIdAndUpdate({_id:decodedToken.id}, {cartItems:user.cartItems})
    
        res.json(updatedCart)

    }catch(error){
        next(error)
    }
})

productRouter.get('/getcartitems', async(req, res, next) => {
    try{
        const decodedToken = jwt.verify(getTokenFrom(req), process.env.SECRET)
    if (!decodedToken.id) {
        return res.status(401).json({error: 'Token invalid'})
    }
        const user = await User.findById(decodedToken.id)

        res.json(user.cartItems)

    }catch(error){
        next(error)
    }
})

productRouter.post('/clearCart', async(req, res, next) => {
    try{
        const decodedToken = jwt.verify(getTokenFrom(req), process.env.SECRET)
    if (!decodedToken.id) {
        return res.status(401).json({error: 'Token invalid'})
    }
        const user = await User.findById(decodedToken.id)

        let cart = {}
        for (let i = 0; i < 100; i++) {
            cart[i] = 0
        }

        user.cartItems = cart
        await user.save()

        res.status(200)

    }catch(error){
        next(error)
    }
})




module.exports = productRouter