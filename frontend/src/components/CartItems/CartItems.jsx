import React, { useContext, useEffect, useState } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'

const CartItems = () => {
const {all_products, cartItems, removeFromCart} = useContext(ShopContext)
const [totalPrice, setTotalPrice] = useState(0)

useEffect(() => {
    const total = all_products.reduce((sum, p) =>{
        if (cartItems[p.id] > 0) {
            return sum + p.new_price
        }
        return sum
    }, 0)
    setTotalPrice(total)
}, [all_products, cartItems])

  return (
    <div className='cartitems'>
        <div className="cart-orderInfo">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Size</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_products.map((p)=> {
            if(cartItems[p.id]>0){
                return <div className="cart-item">
                    <img src={p.image[0]} alt=''></img>
                    <p>{p.name}</p>
                    <p>Price: {p.new_price}€</p>
                    <p>Size:</p>
                    <button onClick={()=>{removeFromCart(p.id)}}>REMOVE ITEM</button>
                    </div>
            }
        })}
        <div className="cart-totalprice">
        <h1>Pricing</h1>
        <p>Subtotal: {totalPrice}€</p>
        <hr />
        <p>Shipping Fee: Free</p>
        <hr />
        <h2>Total</h2>
        <h2>{totalPrice}€</h2>
        </div>
        <div className="cart-orderbutton">
            <button>ORDER</button>
        </div>
    </div>
  )
}

export default CartItems