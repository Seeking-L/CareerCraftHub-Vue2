import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index.js'
import * as echarts from 'echarts';
import './assets/styles/icon/iconfont.css'

Vue.prototype.$echarts = echarts 
Vue.use(ElementUI);
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

new Vue({
  el:'#app',
  render: h => h(App),
  router:router,
  store:store
})
