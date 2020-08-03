import Vue from 'vue'
import Router from 'vue-router'

//路由懒加载
const home = () => import('../views/home/home')
const cart = () => import('../views/cart/cart')
const profile = () => import('../views/profile/profile')
const detail = () => import('../views/detail/datail')

//安装route插件
Vue.use(Router)

//分离routes属性
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:home
  },
  {
    path:'/cart',
    component:cart
  },
  {
    path:'/profile',
    component:profile
  },
  {
    path:'/detail',
    component:detail
  }
]

//默认导出Router对象
export default new Router({
  routes,
  mode:'history'
})

