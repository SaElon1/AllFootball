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
        {all_products.map((p)=> {
            if(cartItems[p.id]>0){
                return <div className="cart">
                    <img src={p.image[0]} alt=''></img>
                    <p>{p.name}</p>
                    <p>Price: {p.new_price}€</p>
                    <p>Size:</p>
                    <button onClick={()=>{removeFromCart(p.id)}}>REMOVE ITEM</button>
                </div>
            }
        })}
        <div className="cart-totalprice">
        <h2>Total price: {totalPrice}€ </h2>
        </div>
    </div>
  )
}

export default CartItems