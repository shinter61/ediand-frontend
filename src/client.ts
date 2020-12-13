import axios from "axios";

const client = axios.create({
  baseURL: process.env.API_ENDPOINT,
  timeout: 3 * 60 * 1000,
});

export default client;
