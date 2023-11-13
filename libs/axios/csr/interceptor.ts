import axios from "axios";
export const axiosCSRService = axios.create({
  baseURL: "http://localhost:3000/api/"
})
axiosCSRService.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});
axiosCSRService.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});