import axios from 'axios'
const baseurl = "http://localhost:3001/api/product"


let token = null

const setToken = newToken => {
    token = `Bearer${newToken}`
}

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

const placeOrder = async (newObject) => {
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


export default {getAll, getOfferProducts, addToCart,setToken, removeFromCart,getCartItems, placeOrder, getOrderHistory}

