import React from 'react'
import productService from '../../services/product'
import { useState, useEffect } from 'react'
import ProductItem from '../ProductItem/ProductItem'
import './Allproducts.css'


const Allproducts = () => {
const [allproducts, setAllproducts] = useState([])

useEffect(() => {
  const fetchProducts = async () => {
  try{
    const products = await productService.getProducts()
    setAllproducts(products)
  }catch(error){
    console.error(error)
  }
}
fetchProducts()
}, [])

const handleProductUpdate = (updatedProduct) => {
  setAllproducts((prevProducts) =>
    prevProducts.map((product) =>
      product._id === updatedProduct._id ? updatedProduct : product
    )
  )
}


  return (
    <div className='allproducts'>
      <h1>Product List</h1>
      <div className="productlist">
        {allproducts.map((product, k)=> {
          return(
            <ProductItem
            key={k}
            product={product}
            onUpdate={handleProductUpdate}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Allproducts