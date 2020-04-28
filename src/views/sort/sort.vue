<template>
  <div>
    <navbar>
      <div slot="center">分类</div>
    </navbar>
    <scroll>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
        <li>hello world!</li>
    </scroll>
  </div>
</template>

<script>
    import navbar from 'components/common/navbar/navbar'
    import scroll from 'components/common/betterScroll/betterScroll'
    export default {
        name:'sort',
        data(){
          return{
            scroll:null
          }
        },
        components:{
          navbar,
          scroll
        }
    }
</script>

<style scoped>
    .wrapper{
      height:1.5rem;;
      background:thistle;
      overflow: hidden;
      color:white;
    }
</style>