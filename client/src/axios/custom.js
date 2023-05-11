import axios from 'axios';

const autoFetch = axios.create({
  baseURL: import.meta.env.VITE_URL,
  headers: {
    Accept: 'application/json'
  }
});

export default autoFetch;
