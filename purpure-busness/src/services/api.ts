import axios from "axios";

const Api = axios.create({
  baseURL: "https://capstone-purpurebusiness.herokuapp.com/",
  timeout: 1500,
});

export default Api;
