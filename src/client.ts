import axios from "axios";

const client = axios.create({
  // baseURL: process.env.API_ENDPOINT,
  baseURL: "http://18.181.8.233",
  timeout: 3 * 60 * 1000,
});

export default client;
