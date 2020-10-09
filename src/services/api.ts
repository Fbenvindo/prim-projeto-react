import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.guthub.com'
});

export default api;