import axios from "axios";

const api = axios.create({
    baseURL: 'http://15.228.35.128/api',
});

export default api;