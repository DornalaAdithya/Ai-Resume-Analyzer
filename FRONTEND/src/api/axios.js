import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-resume-analyzer-20gi.onrender.com/api",
  withCredentials: true, //  IMPORTANT for cookies
});

export default API;
