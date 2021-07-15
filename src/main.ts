import Vue from 'vue'
import './plugins/axios.ts'
import App from './App.vue'
import router from './router'
import '../scss/custom.scss'
import store from './store/index'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(VueLazyload)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
