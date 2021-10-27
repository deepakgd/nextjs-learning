import axios from 'axios';

const apiUrl = '/strapi'

// you cannot access process.env in client side. so use this only for client side operation
// based on next.config.js  configuration request ht to backend

module.exports = {
  getProfile: () => {
    return axios.get(`${apiUrl}/users/me`);
  },
  login:  (data) => {
    console.log("login")
    return axios.post(`${apiUrl}/auth/local`, data);
  },
  register: (data) => {
    return axios.post(`${apiUrl}/auth/local/register`, data);
  },
  logout: () => {
    return axios.get(`${apiUrl}/auth/logout`);
  }
}
