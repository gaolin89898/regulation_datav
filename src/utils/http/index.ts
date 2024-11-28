import axios from "axios";

const http = axios.create({
  baseURL: "http://192.168.1.141:9020",
});

// 请求拦截
http.interceptors.request.use(
  (config) => {
    // 如果请求的地址不是/login
    if (!config.url?.includes("/login")) {
      config.headers["authorization"] =
        "Bearer " + localStorage.getItem("token");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default http;
