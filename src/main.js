import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
FastClick.attach(document.body)
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
  error: require('./assets/img/common/error.png'),
  loading:require('./assets/img/common/loading.png')
})

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),      
  router,             //配置router
  store               //配置store
}).$mount('#app')
