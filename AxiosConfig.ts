import Axios from 'axios';
import { AsyncStorage } from "react-native";
let AxiosInstance = Axios.create({
  headers: {
    'Content-Type': 'application/json',
  },

});

AxiosInstance.interceptors.request.use(
  config => {
      return config;
  },
  error => {
      return error
  });

AxiosInstance.interceptors.response.use(
    (response) => response,
  (error) => {
    if (error.response.status === 401) {
      console.log("STATUS CODE 401");
    }
    return error;
  }
)

export default AxiosInstance