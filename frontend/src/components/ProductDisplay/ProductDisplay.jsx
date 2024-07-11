import React from 'react'
import './ProductDisplay.css'

const ProductDisplay = (props) => {
    const {product} = props
  return (
    <div className='productdisplay'>
        <div className="product-images">
            {product.image.map((item, i) => {
                return (
                <img key={i} src={item} alt="" />
                )
            })}
        </div>
    </div>
  )
}

export default ProductDisplay