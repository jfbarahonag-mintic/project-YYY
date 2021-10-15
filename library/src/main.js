import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import axios from 'axios'

// Now, when we want to use axios inside our component, we can do this.$http and it will be like calling axios directly.We also set the Authorization on axios header to our token, so our requests can be processed if a token is required.This way, we do not have to set token anytime we want to make a request.
// https://www.digitalocean.com/community/tutorials/handling-authentication-in-vue-using-vuex
Vue.prototype.$http = axios
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
