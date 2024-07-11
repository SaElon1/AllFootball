import React, { useState } from 'react'
import './ProductDisplay.css'

const ProductDisplay = (props) => {
    const {product} = props
    const [mainImage, setMainImage] = useState(product.image[0])

    const handleImageClick = (image) => {
      setMainImage(image)
    }


  return (
    <div className='productdisplay'>
      <div className="display-left">
      <div className="product-mainImage">
        <img src={mainImage}></img>
      </div>
        <div className="product-images">
            {product.image.map((item, i) => {
                return (
                <img
                key={i}
                src={item}
                alt=""
                onClick={() => handleImageClick(item)} />
                )
            })}
        </div>
        </div>
        <div className="display-right">
        <div className="product-name">{product.name}</div>
        <div className="product-price">{product.new_price}€</div>
        <button>ADD TO CART</button>
        </div>
    </div>
  )
}

export default ProductDisplay