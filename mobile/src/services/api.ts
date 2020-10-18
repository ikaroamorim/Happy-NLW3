import axios from 'axios'

const api = axios.create({
  baseURL: 'http://ikarodev.brazilsouth.cloudapp.azure.com:3333/',
});

export default api;