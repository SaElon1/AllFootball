import React, {createContext, useState,useEffect, useContext} from "react";
import productService from "../services/product";
import { UserContext } from "./UserContext";

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
    const [order, setOrder] = useState(null)

    const {isLogged} = useContext(UserContext)

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
          if(isLogged) {
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
    },[isLogged])

    useEffect(() => {
      console.log('Order updated:', order);
      setOrder(order)
    }, [order]);

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

    const placeOrder = async (orderDetails) => { 
      try {
        const newOrder = await productService.placeNewOrder(orderDetails)
        setOrder(newOrder)
        return newOrder
      }catch(error){
        console.error(error)
      }
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

    const getCartProducts = (cartItems) => {
      const cartProducts = []

      for (const itemId in cartItems) {
        const inCart = cartItems[itemId] 
      if(inCart > 0){
        const product = allproducts.find((product) => product.id === Number(itemId))
        cartProducts.push(product)
    }
    }
      return cartProducts
    }

    const clearUserCart = async () => {
      await productService.clearCart()
    }

    const value = {getCartItems,allproducts,cartItems,addCart,removeFromCart,offerproducts, getCartProducts, clearUserCart, order, setOrder,placeOrder}
    return (
        <div>
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
        </div>
    )
}

export default ShopContextProvider