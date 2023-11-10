import axios from "axios";
export const axiosSSRService = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/"
})
const apiKey = "AIzaSyDHnQMVTay3F_Rgws-Tdoz8dkCb1Y4nlKo"
axiosSSRService.interceptors.request.use(function (config) {
  config.params = { ...config.params, ["key"]: apiKey }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axiosSSRService.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});