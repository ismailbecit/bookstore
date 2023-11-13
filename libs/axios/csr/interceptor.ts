import axios from "axios";
export const axiosCSRService = axios.create({
  baseURL: "http:/213.142.151.156:5001/api/"
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