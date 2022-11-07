import axios from "axios";

const api = axios.create({
  baseURL: "https://capstone-purpurebusiness.herokuapp.com",
  timeout: 5000,
});

export default api;
