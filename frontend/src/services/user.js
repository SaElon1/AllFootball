import axios from 'axios'
const baseurl = "http://localhost:3001/api/user"


const handleApiError = (error) => {
    const loggedIn = window.localStorage.getItem('loggedAllfootballUser')
    if(error.response) {
        if (error.response.status === 401){
            if (loggedIn) {
                alert('Session has expired. Please log in again. ')
                window.location.href = '/login'
            }else {
                alert('Invalid email or password')            }
        }
    }else {
        console.error('API error', error)
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
