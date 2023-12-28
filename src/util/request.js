// 引入axios
import axios from 'axios'
// 创建一个axios实例
const http = axios.create({
// 基础路径，发请求的时候会有api
  baseURL: 'http://localhost:8080',
  // 请求超时时间
  timeout: 2000
});

// request请求拦截器
http.interceptors.request.use(
  config => {
  // config，配置对象，对象里面有一个属性很重要，header请求头
  config.headers['Content-Type'] = 'application/json;charset=utf-8';
  
  if(localStorage.getItem('token')){// 设置请求头
    config.headers.token = localStorage.getItem('token');
}
    return config;
  },
  error => {
    return Promise.error(error);
  }
);

// response响应拦截
http.interceptors.response.use(
  response => {
    // do something
    console.log('request 响应拦截:')
    console.log(response)
    return Promise.resolve(response);
  },
  error => {
    // do something
    console.log('request 响应拦截:'+'err')
    console.log(error)
		return Promise.reject(error)
  }
)

// 暴漏axios
export default http