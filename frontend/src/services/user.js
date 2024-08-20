import axios from 'axios'
const baseurl = "http://localhost:3001/api/user"


const handleApiError = (error) => {
    if (error.response && error.response.status === 401) {
        alert('Session has expired. Please log in again. ')
        
        window.location.href = '/login'
    }else {
        console.error('API error', error)
        alert('An error occured. Please try again.')
    }
}

const createUser = async (userInformation) => {
    try{
        const response = await axios.post(`${baseurl}/signIn`,userInformation)
        return response.data

    }catch(error){
        handleApiError(error)
    }
}

const login = async (userInformation) => {
    try{
        const response = await axios.post(`${baseurl}/login`,userInformation)
        return response.data
    }catch(error){
        handleApiError(error)
    }
}

export default {createUser, login}
