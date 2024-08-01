import React, {createContext, useState,useEffect} from "react";
import all_products from '../components/Assets/all_products'
import productService from "../services/product";

export const ShopContext = createContext(null)

const getCart = (products)=> {
    let cart = {}
  for (let index = 0; index < products.length; index++){
     cart[index] = 0
  } 
  return cart
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({})
    const [allproducts, setallproducts] = useState([])

  useEffect(() =>{
    productService
    .getAll()
    .then(products => {
      setallproducts(products)
      setCartItems(getCart(products))
    })
    .catch((error) => {
      console.error('Error in fetching products: ', error)
    })
    }, [])

    console.log(allproducts)
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

    const value = {getCartItems,allproducts,cartItems,addToCart,removeFromCart}
    return (
        <div>
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
        </div>
    )
}

export default ShopContextProvider