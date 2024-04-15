import axios from "axios";
const API_URL ='https://65a8fe35219bfa3718681fe6.mockapi.io/'

const ApiService = axios.create({
    baseURL : API_URL,
    headers : {
        "Content-Type" : "application/json"
    }
})

export default ApiService