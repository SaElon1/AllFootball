const productRouter = require('express').Router()
const Product = require('../models/product')

productRouter.post('/addproduct', async (req,res)=> {
    let products = await Product.find({})
    let id;
    if(products.length>0)
    {
        let prevProduct_array = products.slice(-1)
        let prevProduct = prevProduct_array[0]
        id = prevProduct.id+1
    }


    const body = req.body

    const product = new Product({
        id: id,
        name: body.name,
        description: body.description,
        category: body.category,
        image: body.image,
        new_price: body.new_price,
        old_price: body.old_price
    })
    await product.save()
    res.status(201)
    console.log(product)
})

module.exports = productRouter