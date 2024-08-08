import React, { useContext, useEffect, useState } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = ({product, isLogged}) => {
    const {addToCart} = useContext(ShopContext)
    const [mainImage, setMainImage] = useState(product.images[0])

    const handleImageClick = (image) => {
      setMainImage(image)
    }

    const handleCartClick = () => {
      if(isLogged) {
        addToCart(product.id)
      }else{
        alert("Please login first")
      }
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
        <div className="product-price">
        <div className="product-newprice">{product.new_price}€</div>
        <div className="product-oldprice">{product.old_price}€</div>
        </div>
        <button onClick={handleCartClick}>ADD TO CART</button>
        </div>
    </div>
  )
}

export default ProductDisplay