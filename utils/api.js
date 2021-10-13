import axios from 'axios';

const apiUrl = '/strapi'

// you cannot access process.env in client side. so use this only for client side operation
// based on next.config.js  configuration request ht to backend

module.exports = {
  getProfile: (token) => {
    return axios.get(`${apiUrl}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
  login: (data) => {
    return axios.post('/api/login', data);
  },
  register: (data) => {
    return axios.post(`/api/register`, data);
  }
}
