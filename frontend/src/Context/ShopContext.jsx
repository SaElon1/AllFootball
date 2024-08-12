import React, {createContext, useState,useEffect} from "react";
import all_products from '../components/Assets/all_products'
import productService from "../services/product";

export const ShopContext = createContext(null)

const getCart = (products)=> {
  let cart = {}
  for (let index = 0; index <= products.length; index++){
     cart[index] = 0
  } 
  return cart
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({})
    const [allproducts, setallproducts] = useState([])
    const [offerproducts, setOfferproducts] = useState([])

  useEffect(() =>{
    const fetchProducts = async () => {
      try{
    const products = await productService.getAll()
    setallproducts(products)

    const offerProducts = await productService.getOfferProducts()
    setOfferproducts(offerProducts)
      }catch(error) {
      console.error('Error in fetching products: ', error)
    } 
  }
  fetchProducts()
    }, [])

    useEffect(() => {
      const fetchCartItems = async () => {
        try{
          if(window.localStorage.length > 0) {
            const cart = await productService.getCartItems()
            if(cart == undefined) {
              console.log('Problem in cart rendering')
              return
            }else{
              console.log(`Cartitems from database: ${cart}`)
              setCartItems(cart)
            }
          }else{
            setCartItems(getCart(allproducts))
            console.log('cartitems from backend')
          }
        }catch(error) {
          console.error('Error in fetching cartItems'. error)
        }
      }
      fetchCartItems()
    },[])

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