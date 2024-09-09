import React, { useContext, useEffect, useState } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext'
import { useNavigate } from 'react-router-dom'
import Notification from '../Notification/Notification'

const ProductDisplay = ({product, isLogged}) => {
    const {addCart, getCartProducts, cartItems} = useContext(ShopContext)
    const [mainImage, setMainImage] = useState(product.images[0])
    const [notificationMessage, setNotificationMessage] = useState(null)
    const navigate = useNavigate()

    const handleImageClick = (image) => {
      setMainImage(image)
    }

    const handleCartClick = () => {
      console.log(`From display ${product.id}`)
      const cartProducts = getCartProducts(cartItems)
      if(isLogged) {
        if (cartProducts.some(cartProduct => cartProduct.id === product.id)){
          alert('Item already added to cart')
        }else{
          addCart(product.id)
          setNotificationMessage('Product added to cart!')
          setTimeout(() => {
            setNotificationMessage(null)
        }, 2000)
        }
      }else{
        alert("Please login first")
      }
    }

    const handleBackButton = () => {
      console.log('Back button is pressed')
      navigate(-1)
    }

  return (
    <div className='productdisplay'>
      <div className="display-left">
      <div className="display-backButton">
        <button onClick={handleBackButton}>Back</button>
      </div>
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
        <Notification message={notificationMessage} type='success'></Notification>
        </div>
    </div>
  )
}

export default ProductDisplay