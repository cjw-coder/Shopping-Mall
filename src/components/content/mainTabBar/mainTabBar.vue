<template>
    <tabbar v-show="isShow">
        <tabbar-item path="/home">
          <img slot="item-icon" src="~assets/img/tabbar/home.png">
          <img slot="item-icon-active" src="~assets/img/tabbar/home_active.png">
          <div slot="item-text">首页</div>
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
</template>

<script>
import tabbar from 'components/common/tabbar/tabbar'
import tabbarItem from 'components/common/tabbar/tabbar-item'
export default {
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
    },
    components:{
        tabbar,
        tabbarItem
    }
}
</script>

<style>

</style>