import axios from "axios";
export const axiosCSRService = axios.create({
  baseURL: "http://localhost:3000/api/"
})
const apiKey = "AIzaSyDHnQMVTay3F_Rgws-Tdoz8dkCb1Y4nlKo"
axiosCSRService.interceptors.request.use(function (config) {
  config.url = `${config.url}${config.url?.includes("?") ? "&" : "?"}key=${apiKey}`
  return config;
}, function (error) {
  return Promise.reject(error);
});
axiosCSRService.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});