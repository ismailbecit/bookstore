import axios from "axios";
export const axiosSSRService = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/"
})
const apiKey = "AIzaSyDHnQMVTay3F_Rgws-Tdoz8dkCb1Y4nlKo"
axiosSSRService.interceptors.request.use(function (config) {
  config.params = { ...config.params, ["key"]: apiKey }
  return config;
}, function (error) {
  return Promise.reject(error);
});
axiosSSRService.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});