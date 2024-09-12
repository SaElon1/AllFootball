import axios from 'axios'
const baseurl = "https://allfootball.onrender.com/api/product"

const create = async (newObject) => {
    const formData = new FormData();
    for (let key in newObject) {
        if (key === 'images') {
            for (let i = 0; i < newObject.images.length; i++) {
                formData.append('images', newObject.images[i]);
            }
        } else {
            formData.append(key, newObject[key]);
        }
    }

    const response = await axios.post(`${baseurl}/addproduct`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return response.data;
}

const getProducts = async () => {
    try {
        const response = await axios.get(`${baseurl}/allproducts`)
        return response.data
    }catch(error){
        console.error('Error in fetching allproducts')
    }
}

const updateProduct = async (id, newObject) => {
    const formData = new FormData()

    for (let key in newObject) {
        if(key === 'images'){
            for (let i = 0; i < newObject.images.length; i++) {
                formData.append('images', newObject.images[i])
            }
        }else {
            formData.append(key, newObject[key])
        }
    }
    try {
        const response = await axios.put(`${baseurl}/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return response.data
    }catch(error){
        console.error(error)
    }
}

const removeProduct = async (id) => {
    try{
        const response = await axios.delete(`${baseurl}/removeproduct/${id}`)

        return response.data

    }catch(error){
        console.error(error)
    }
}

export default {create, getProducts, updateProduct, removeProduct}



