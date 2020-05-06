<template>
  <div id="cart">
    <navbar>
      <div slot="center">购物车({{cartNum}})</div>
    </navbar>
    <cart-list></cart-list>
    <bottom-bar></bottom-bar>
    <h3>我是购物车页面</h3>
  </div>
</template>

<script>
    import navbar from 'components/common/navbar/navbar'
    import cartList from './child_cpn/cart_list'
    import bottomBar from './child_cpn/cart_bottomBar'

    export default {
        name:'cart',
        components:{
          navbar,
          cartList,
          bottomBar
        },
        computed:{
          cartNum:function(){
            return this.$store.state.cartList.length
          }
        }
    }
</script>

<style>
    #cart .navbar{
      background:#F08080;
      color:rgb(255,255,255);
      position: relative;
      top:0;
      z-index:9;
    }
</style>