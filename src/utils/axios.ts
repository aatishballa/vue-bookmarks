import axios  from "axios";
import type { AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
}); 

const pendingRequests = new Set();
// set the token in the header for each request
instance.interceptors.request.use(
  (config : AxiosRequestConfig) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    if (pendingRequests.has(config.url)) {
     return Promise.reject(new Error("Duplicate request"));
    } else {
      pendingRequests.add(config.url);
    } 

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);


export default instance;