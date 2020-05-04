<template>
  <div id="app">
      <keep-alive exclude="detail">
        <router-view :key="$route.fullPath"></router-view>
      </keep-alive>
      <tabbar v-show="isShow">
        <tabbar-item path="/home">
          <img slot="item-icon" src="~assets/img/tabbar/home.png">
          <img slot="item-icon-active" src="~assets/img/tabbar/home_active.png">
          <div slot="item-text">首页</div>
        </tabbar-item>
        <tabbar-item path="/sort">
          <img slot="item-icon" src="~assets/img/tabbar/sort.png">
          <img slot="item-icon-active" src="~assets/img/tabbar/sort_active.png">
          <div slot="item-text">分类</div>
        </tabbar-item>
         <tabbar-item path="/cart">
          <img slot="item-icon" src="~assets/img/tabbar/cart.png">
          <img slot="item-icon-active" src="~assets/img/tabbar/cart_active.png">
          <div slot="item-text">购物车</div>
        </tabbar-item>
         <tabbar-item path="/profile">
          <img slot="item-icon" src="~assets/img/tabbar/profile.png">
          <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.png">
          <div slot="item-text">我的</div>
        </tabbar-item>
      </tabbar>
  </div>
</template>

<script>
import tabbar from "components/common/tabbar/tabbar"
import tabbarItem from "components/common/tabbar/tabbar-item"

export default {
  name: 'App',
  components: {
      tabbar,
      tabbarItem
  },
  data(){
    return{
      isShow:true
    }
  },
  watch:{
    $route(to,from){
      if(to.path == '/detail'){
        this.isShow = false
      }else{
        this.isShow = true
      }
    }
  }
}
</script>

<style>
    @import "assets/css/base.css";
    html{font-size:26.666667vw;}
    body{
      font-size:0.16rem;
    }
</style>
