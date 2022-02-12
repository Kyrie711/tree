import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import {request} from 'network/request.js'
// import echarts from 'echarts'

Vue.config.productionTip = false
Vue.use(ElementUI);
// Vue.use(echarts)
Vue.prototype.$request = request;

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
