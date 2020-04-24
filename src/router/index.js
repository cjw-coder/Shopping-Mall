import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('../views/home/home')
const sort = () => import('../views/sort/sort')
const cart = () => import('../views/cart/cart')
const profile = () => import('../views/profile/profile')

Vue.use(Router)

const routes = [
  {
    path:'' ,
    redirect:'/home'
  },
  {
    path:'/home',
    component:home
  },
  {
    path:'/sort',
    component:sort
  },
  {
    path:'/cart',
    component:cart
  },
  {
    path:'/profile',
    component:profile
  }
]

export default new Router({
  routes,
  mode:'history'
})
