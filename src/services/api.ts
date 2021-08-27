import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ecommerce-next-js.glitch.me/',
});

export default api;
