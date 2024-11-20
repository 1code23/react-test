/* eslint-disable */
import axios from "axios";
// import Vue from "vue";
// import router from "@/router/index.js";
// import store from "@/store/index.js";
// import global from "@/common/global";
// import { showFullLoading, tryHideFullScreenLoading } from "@/config/loading";
const instance = axios.create({
  baseURL: "./api",
  timeout: 10 * 60 * 1000, //超时
});

// 请求拦截
instance.interceptors.request.use(
  (req) => {
    // let token = localStorage.getItem("token");
    // if (token) {
    //   req.headers.token = token;
    // }
    
    req.headers['X-Data-Raw']='real';
    req.headers.Authorization= 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiLlnKjot6_kuIoiLCJzdWIiOiJ1c2VyX2xvZ2luIiwiYXVkIjpbIndlY2hhdCIsInVzZXIiXSwiZXhwIjoxNjg4ODg5MjM1LCJuYmYiOjE2ODg2MzAwMzUsImlhdCI6MTY4ODYzMDAzNSwianRpIjoiMSJ9.XgD8mdz3pQwreA7rQYmVMdmhNqeLRaZjD7Zz31lvYI8';
    req.headers['X-Child-Id'] = ''
   
    return req;
  },
  (error) => {
    return console.error(error);
  }
);

// 响应拦截
instance.interceptors.response.use(
  (res) => {
    //拦截数据响应
    //实现并发请求只加载一个loading
    // tryHideFullScreenLoading();
    if (res.data && res.data.code === 401) {
      // 先清除存储在localStorage里的信息，再跳转登录页
      // localStorage.removeItem("token");
      // localStorage.removeItem("email");
      // // 需要前置登录时才跳转登录页
      // if (global.needLogin) {
      //   router.push("/login");
      // }
    }
    if (res.data && res.data.code !== 0) {
      // Vue.prototype.$message.error(res.data.msg || "请求错误!");
      // return Promise.reject(new Error(JSON.stringify(res.data)));
      // return Promise.reject(JSON.stringify(res.data));
      return Promise.resolve(JSON.stringify(res.data));
    }
    // store.setStatisticsTime(res.data.statistics_time)
    return res.data;
  },
  (error) => {
    //实现并发请求只加载一个loading
    // tryHideFullScreenLoading();
    // Vue.prototype.$message.error("请求错误!");
    console.log("error", error,333);
    return false;
  }
);

export default (method, url, data, loading = true) => {
  // if (loading) {
  //   //实现并发请求只加载一个loading
  //   // showFullLoading();
  // }
  method = method.toLowerCase();
  switch (method) {
    case "post":
      return instance.post(url, data);
    case "get":
      return instance.get(url, { params: data });
    case "delete":
      return instance.delete(url, { params: data });
    case "put":
      return instance.put(url, data);
    case "http":
      return instance(url, {
        url,
        ...data,
      });
    default:
      console.error("未知的请求方式！" + method);
      return false;
  }
};
/* eslint-disable */