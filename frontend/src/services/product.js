import axios from 'axios'
const baseurl = "http://localhost:3001/api/product"


let token = null

const setToken = newToken => {
    token = `Bearer${newToken}`
}
const loggedIn = window.localStorage.getItem('loggedAllfootballUser')

axios.interceptors.response.use(
    response => response,
    error => {
        if(loggedIn){
        if(error.response && error.response.status === 401){
            alert('Session expired. Please log in again')
            window.localStorage.removeItem('loggedAllfootballUser')
            window.location.href = '/login'
        }
    }

        return Promise.reject(error)
    }
)

const getAll = async () => {
    const response = await axios.get(`${baseurl}/allproducts`)
    return response.data
}

const getOfferProducts = async () => {
    const response = await axios.get(`${baseurl}/offerProducts`)
    return response.data
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
        console.log(error)
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

        console.log(`This is users token: ${token}`)
    
        const response = await axios.post(`${baseurl}/removefromcart`, {itemId} , config)
        return response.data
    } catch (error) {
        console.log(error)
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
        console.log(error)
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

