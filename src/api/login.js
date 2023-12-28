// 引入封装的axios
import http from '../util/request'

// 定义一个请求登录数据的接口 loginForm是data中包含用户名密码的数据，为了获取输入的数据
export const getLogin = loginForm => {
// 调用axios实例的get方法(url,参数)，返回一个promise对象，
// get方法{data: loginForm}形式，如果是post请求这里的参数只需要写loginForm
  return http.get('/login', {data: loginForm})
}