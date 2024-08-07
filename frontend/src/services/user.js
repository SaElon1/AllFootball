import axios from 'axios'
const baseurl = "http://localhost:3001/api/user"

const createUser = async (userInformation) => {
    const response = await axios.post(`${baseurl}/signIn`,userInformation)
    return response.data
}

export default {createUser}
