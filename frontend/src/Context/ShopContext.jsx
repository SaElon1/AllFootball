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
    const [offerproducts, setOfferproducts] = useState([])
    const [isLogged, setIsLogged] = useState(false)

  useEffect(() =>{
    const loggedUserJSON = window.localStorage.getItem('loggedAllfootballUser');
    if (loggedUserJSON) {
      setIsLogged(true);
    }
    const fetchProductsAndCart = async () => {
      try{
    const products = await productService.getAll()
    setallproducts(products)

    const offerProducts = await productService.getOfferProducts()
    setOfferproducts(offerProducts)

    if(isLogged) {
      const cart = await productService.getCartItems()
      setCartItems(cart)
    }else{
      setCartItems(getCart(products))
    }
      }catch(error) {
      console.error('Error in fetching products: ', error)
    } 
  }
  fetchProductsAndCart()
    }, [])

    console.log(allproducts)
    console.log(cartItems)

    const addCart = async (itemId) => {
      console.log(itemId)
        setCartItems((prevCart) => ({...prevCart,[itemId]:prevCart[itemId]+1}))
        await productService.addToCart(itemId)
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prevCart) => ({...prevCart,[itemId]:prevCart[itemId]-1}))
        await productService.removeFromCart(itemId)
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

    const value = {getCartItems,allproducts,cartItems,addCart,removeFromCart,offerproducts}
    return (
        <div>
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
        </div>
    )
}

export default ShopContextProvider