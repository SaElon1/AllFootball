import React, { useContext, useState } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {addToCart} = useContext(ShopContext)
    const {product} = props
    const [mainImage, setMainImage] = useState(product.images[0])

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
            {product.images.map((item, i) => {
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
        <div className="product-description">{product.description}</div>
        <div className="product-size">Size: {product.size}</div>
        <div className="product-price">{product.old_price}€</div>
        <div className="product-price">{product.new_price}€</div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        </div>
    </div>
  )
}

export default ProductDisplay