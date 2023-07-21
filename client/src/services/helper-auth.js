import axios from "axios";
export const BASE_URL = "http://localhost:8080/api/orders";

// const getToken = async () => {
//   try {
//     const token = await localStorage.getItem("token");
//     if (!token) {
//       return null;
//     }
//   } catch (error) {
//     console.log(error);
//   }
//   return token;
// };

export const axiosConn = axios.create({
  baseURL: BASE_URL,
});

axiosConn.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
  (error) => {
    return Promise.reject(error);
  };
});
