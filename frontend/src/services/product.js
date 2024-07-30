import axios from 'axios'
const baseurl = "http://localhost:3001/api/product"

const getAll = async () => {
    const request = await axios.get(`${baseurl}/allproducts`)
    return request.then(response => response.data)  
}

export default {getAll}

