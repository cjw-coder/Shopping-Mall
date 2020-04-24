<template>
  <div>
    <navbar>
      <div slot="center">分类</div>
    </navbar>
    <h3>我是分类页面</h3>
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