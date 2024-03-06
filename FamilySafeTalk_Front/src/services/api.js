import axios from "axios";

const api = axios.create({
    baseURL: 'https://radbios.com/api',
});

export default api;