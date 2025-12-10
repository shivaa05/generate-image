import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Vite env variable
  withCredentials: true,
});

export default axiosClient;
