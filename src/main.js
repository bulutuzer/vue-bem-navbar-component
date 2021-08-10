import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import bemModifiers from './utils/bemModifiers'
import axios from 'axios'
Vue.config.productionTip = false

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3084/'
})

import './scss/build/default.scss'

Vue.use(bemModifiers)
Vue.prototype.$axios = axiosInstance

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
