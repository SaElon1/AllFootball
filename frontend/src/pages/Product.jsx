import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'

const Product = () => {
  const {all_products} = useContext(ShopContext)
  const {productId} = useParams()
  const product = all_products.find((p)=> p.id === Number(productId))
  console.log(productId)
  console.log(product)

  return (
    <div>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product