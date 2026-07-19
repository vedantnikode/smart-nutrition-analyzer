import axios from "axios";

const api = axios.create({
  baseURL: "https://smart-nutrition-analyzer-backend.onrender.com",
});

export default api;