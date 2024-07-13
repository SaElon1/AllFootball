import React, {createContext, useState} from "react";
import all_products from '../components/Assets/all_products'

export const ShopContext = createContext(null)

const getCart = ()=> {
    let cart = {}
    for (let index = 0; index < all_products.length; index++){
        cart[index] = 0
    }
    return cart
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getCart())

    console.log(cartItems)

    const addToCart = (itemId) => {
        setCartItems((prevCart) => ({...prevCart,[itemId]:prevCart[itemId]+1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prevCart) => ({...prevCart,[itemId]:prevCart[itemId]-1}))
    }

    const getCartItems = () => {
        let total = 0
        for (const item in cartItems) {
          if (cartItems[item] >= 1){
            total += cartItems[item]
          }
        }
        return total
    }

    const value = {getCartItems,all_products,cartItems,addToCart,removeFromCart}
    return (
        <div>
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
        </div>
    )
}

export default ShopContextProvider