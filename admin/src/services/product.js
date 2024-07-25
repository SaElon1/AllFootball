import axios from 'axios'
const baseurl = "http://localhost:3001/api/product"

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

export default {create}



