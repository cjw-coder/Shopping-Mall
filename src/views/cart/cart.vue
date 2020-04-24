<template>
  <div>
    <navbar>
      <div slot="center">购物车</div>
    </navbar>
    <h3>我是购物车页面</h3>
  </div>
</template>

<script>
    import navbar from 'components/common/navbar/navbar'
    export default {
        name:'cart',
        components:{
          navbar
        }
    }
</script>

<style>
    .navbar{
      background:#F08080;
      color:rgb(255,255,255);
    }
</style>