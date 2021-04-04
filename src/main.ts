import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import '../scss/custom.scss'
import store from './store/index'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
