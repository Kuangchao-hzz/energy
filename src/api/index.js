import axios from "axios";
import qs from "qs";
import { Message } from 'iview';
import router from "../router";

const Axios = axios.create({
  baseURL: "/", // 因为我本地做了反向代理
  timeout: 10000,
  responseType: "json",
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  }
});

//POST传参序列化(添加请求拦截器)
Axios.interceptors.response.use(config => {
  // 在发送请求之前做某件事
  return config;
},   error => {
  // error 的回调信息,看贵公司的定义
  Message({
    //  饿了么的消息弹窗组件,类似toast
    showClose: true,
    message: error && error.data.error.message,
    type: 'error'
  });
  return Promise.reject(error.data.error.message);
};

//返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(res => {}, error => {
  if (error.response.status === 403) {
    router.push({
      path: "/error/403"
    });
  }
  if (error.response.status === 500) {
    router.push({
      path: "/error/500"
    });
  }
  if (error.response.status === 502) {
    router.push({
      path: "/error/502"
    });
  }
  if (error.response.status === 404) {
    router.push({
      path: "/error/404"
    });
  }
  // 返回 response 里的错误信息
  let errorInfo =  error.data.error ? error.data.error.message : error.data;
  return Promise.reject(errorInfo);
});

// 对axios的实例重新封装成一个plugin ,方便 Vue.use(xxxx)
export default {
  install: function(Vue, Option) {
    Object.defineProperty(Vue.prototype, "$http", { value: Axios });
  }
};


