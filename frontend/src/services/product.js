import axios from 'axios'
const baseurl = "http://localhost:3001/api/product"

const getAll = async () => {
    const response = await axios.get(`${baseurl}/allproducts`)
    return response.data
}

const getOfferProducts = async () => {
    const response = await axios.get(`${baseurl}/offerProducts`)
    return response.data
}

export default {getAll, getOfferProducts}

