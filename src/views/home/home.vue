<template>
  <div>
    <navbar>
      <div slot="center">尚品</div>
    </navbar>
    <h3>我是首页页面</h3>
  </div>
</template>

<script>
    import navbar from 'components/common/navbar/navbar'
    export default {
        name:'home',
        components:{
          navbar
        }
    }
</script>

<style>

</style>