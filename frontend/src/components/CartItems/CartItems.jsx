import React, { useContext, useEffect, useState } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import Order from '../Order/Order'
import cartLogo from '../Assets/cart_logo.png'

const CartItems = () => {
const {allproducts, cartItems, removeFromCart, getCartProducts, order, getCartItems} = useContext(ShopContext)
const [totalPrice, setTotalPrice] = useState(0)
const [cartIsEmpty, setCartIsEmpty] = useState(true)

useEffect(() => {
    const total = allproducts.reduce((sum, p) =>{
        if (cartItems[p.id] > 0) {
            return sum + p.new_price
        }
        return sum
    }, 0)
    setTotalPrice(total)
}, [allproducts, cartItems])

useEffect(() => {
    try{
        const totalCartItems = getCartItems()
        if(totalCartItems === 0){
            setCartIsEmpty(true)
        }else{
            setCartIsEmpty(false)
        }
    }catch(error){
        console.log(error)
    }
},[])

if (order) {
    console.log('From cartItems', order)
    return <Order totalPrice={totalPrice} cartitems={getCartProducts(cartItems)}></Order>
}

  return (
    <div>
    {cartIsEmpty && (
        <div className='cartitems-empty'>
            <h1>Shopping cart is empty</h1>
            <img src={cartLogo} alt="" />
        </div>
    )
    }
    {!cartIsEmpty && (
    <div className='cartitems'>
        <div className="cart-orderInfo">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Size</p>
            <p>Remove</p>
        </div>
        <hr />
        {allproducts.map((p, key)=> {
            if(cartItems[p.id]>0){
                return <div className="cart-item" key={key}>
                    <img src={p.images[0]} alt=''></img>
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
        <Order totalPrice={totalPrice} cartitems={getCartProducts(cartItems)}></Order>
    </div>
    )}
    </div>
  )
}

export default CartItems