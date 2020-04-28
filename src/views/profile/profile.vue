<template>
  <div>
    <navbar>
      <div slot="center">我的</div>
    </navbar>
    <h3>我是用户页面</h3>
  </div>
</template>

<script>
    import navbar from 'components/common/navbar/navbar'
    export default {
        name:'profile',
        components:{
          navbar
        }
    }
</script>

<style>

</style>