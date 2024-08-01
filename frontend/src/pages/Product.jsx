import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import offerProducts from '../components/Assets/offers_data'

const Product = () => {
  const {allproducts} = useContext(ShopContext)
  const {productId} = useParams()
  const product = allproducts.find((p)=> p.id === Number(productId))
  console.log(productId)
  console.log(product)

  return (
    <div>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product