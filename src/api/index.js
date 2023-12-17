import Axios from "axios";
import { API_SERVER } from "../config/constant";

const axios = Axios.create({
  // headers: { 
  //   "Content-Type": "application/x-www-form-urlencoded",
  // }
});


axios.interceptors.request.use(
  (config) => {
    return Promise.resolve(config);
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => Promise.resolve(response),
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
