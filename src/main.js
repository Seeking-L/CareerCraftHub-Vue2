import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index.js'

Vue.use(ElementUI);
Vue.use(VueRouter)

new Vue({
  el:'#app',
  render: h => h(App),
  router:router,
  store:store
})
