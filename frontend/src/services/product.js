import axios from 'axios'
const baseurl = "/api/product"


let token = null

const setToken = newToken => {
    token = `Bearer${newToken}`
}

const loggedIn = window.localStorage.getItem('loggedAllfootballUser')
axios.interceptors.response.use(
    response => response,
    error => {
            if(error.response && error.response.status === 401){
                if(loggedIn){
                alert('Session expired. Please log in again')
                window.localStorage.removeItem('loggedAllfootballUser')
                window.location.href = '/login'
                }
            }else{
                alert('Something went wrong')
            }

        return Promise.reject(error)
    }
)

const getAll = async () => {
    try{
        const response = await axios.get(`${baseurl}/allproducts`)
        return response.data

    }catch(error){
        console.error(error)
    }
}

const getOfferProducts = async () => {
    try{
        const response = await axios.get(`${baseurl}/offerProducts`)
        return response.data
        
    }catch(error){
        console.error(error)
    }
}

const addToCart = async itemId => {
    try{
        if (!token) {
            throw new Error('Token is missing')
        }
        const config = {
            headers: { Authorization: token}
        }

        console.log(`This is users token: ${token}`)
    
        const response = await axios.post(`${baseurl}/addtocart`, {itemId} , config)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

const removeFromCart = async itemId => {
    try{
        if (!token) {
            throw new Error('Token is missing')
        }
        const config = {
            headers: { Authorization: token}
        }
    
        const response = await axios.post(`${baseurl}/removefromcart`, {itemId} , config)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

const getCartItems = async () => {
    try{
        if (!token) {
            throw new Error('Token is missing')
        }
        const config = {
            headers: { Authorization: token}
        }
        console.log(`This is users token: ${token}`)
        const response = await axios.get(`${baseurl}/getcartitems`,config)
        return response.data
    }catch (error){
        console.error(error)
    }
}

const placeNewOrder = async (newObject) => {
    try {
        if (!token) {
            throw new Error ('Token is missing')
        }
        const config = {
            headers: { Authorization: token}
        }
        const response = await axios.post(`${baseurl}/order`,newObject, config)
        return response.data
    }catch(error){
        console.error(error)
    }
}

const getOrderHistory = async () => {
    try{
        if(!token) {
            throw new Error('Token is missing')
        }
        const config = {
            headers : {Authorization: token}
        }

        const response = await axios.get(`${baseurl}/orderhistory`, config)
        return response.data
    }catch(error){
        console.error(error)
    }
}

const clearCart = async (cart) => {
    try{
        if(!token) {
            throw new Error('Token is missing')
        }
        const config = {
            headers : {Authorization: token}
        }
        const response = axios.post(`${baseurl}/clearCart`,cart, config)
        return response.data
    }catch(error){
        console.error(error)
    }
}


export default {getAll, getOfferProducts, addToCart,setToken, removeFromCart,getCartItems, placeNewOrder, getOrderHistory, clearCart}

