import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import axios from "axios"
import $ from "jquery"
import  "./assets/css/reset.css"

Vue.prototype.$http = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
