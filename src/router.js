import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Product from "./views/product.vue"
import Cart from "./views/cart"
import personage from "./views/personage"

Vue.use(Router);
export default new Router({
  mode:"history",
  routes: [
      {
          path:'/home',
          redirect:"/"
      },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path:'/product',
        name:'product',
        component:Product
    },
      {
        path:'/cart',
        component:Cart
      },
      {
        path:'/my',
        component:personage
      }
  ]
})
