<template>
  <div id="profile">
    <navbar>
      <div slot="center">我的</div>
    </navbar>
  </div>
</template>

<script>
    import navbar from 'components/common/navbar/navbar'

    export default {
        name:'profile',
        components:{
          navbar,
          userIcon
        }
    }
</script>

<style>

</style>