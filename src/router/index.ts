import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import ProductListView from '../views/ProductListView.vue'
import ProductView from '../views/ProductView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/products',
    name: 'Products',
    component: ProductListView
  },
  {
    path: '/products/:id',
    name: 'Product',
    component: ProductView
  },
  // {
  //   path: '/about',
  //   name: 'About',
  // },
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
