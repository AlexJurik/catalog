import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Products from '../views/Products.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/about',
    name: 'About',
  },
  {
    path: '/',
    redirect: '/products',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
