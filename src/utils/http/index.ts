import axios from "axios";

const http = axios.create({
  // fit-office.singzer.cn:17779/dev-api 192.168.1.141:9020 home.icepie.net:9020
  baseURL: "http://fit-office.singzer.cn:17779/dev-api",
});

// 请求拦截
http.interceptors.request.use(
  (config) => {
    // 如果请求的地址不是/login
    if (!config.url?.includes("/login")) {
      config.headers["authorization"] =
        "Bearer MASTER_TOKEN_123456";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default http;
