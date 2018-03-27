import axios from 'axios';

axios
  .interceptors
  .response
  .use(response => (response.config.method === 'head' ? response : response.data), Promise.reject);

export default axios;
