import axios from 'axios';

axios.interceptors.response.use((response) => {
  return response.config.method === 'head' ? response : response.data;
}, (error) => {
  return Promise.reject(error);
});

export default axios;
