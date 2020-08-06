import axios from 'axios'

const api = axios.create({
    baseURL: 'https://bookio-services.herokuapp.com'
});

export default api;