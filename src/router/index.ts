import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import ProductsView from '../views/ProductsView.vue'
import ProductView from '../views/ProductView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/products',
    name: 'Products',
    component: ProductsView
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: ProductView
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
