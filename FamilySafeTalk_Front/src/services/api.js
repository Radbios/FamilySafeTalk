import axios from "axios";

const api = axios.create({
    baseURL: 'http://35.171.22.142/api',
});

export default api;