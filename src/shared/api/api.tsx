import axios from 'axios';

const confApi = {
  BaseUrl: 'http://localhost:3000/mock',
};

const api = axios.create({
  baseURL: confApi.BaseUrl,
  timeout: 5000,
});

export default api;
