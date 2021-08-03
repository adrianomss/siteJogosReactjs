import axios from 'axios';

const apiRawg = axios.create({
  baseURL: 'https://api.rawg.io/api',
  // baseURL: REACT_APP_RAWG_API_URL,
  params: {
    key: process.env.REACT_APP_RAWG_API_KEY
  }
});

export { apiRawg };




