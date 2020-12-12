import axios from "axios";
import jsCookie from "js-cookie";

const headers = {
  uid: jsCookie.get("uid"),
  client: jsCookie.get("client"),
  "access-token": jsCookie.get("accessToken"),
};

const client = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 3 * 60 * 1000,
  headers: headers,
});

export default client;
