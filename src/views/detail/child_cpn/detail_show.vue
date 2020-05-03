<template>
  <div class="detail_show">
      <div class="banner">
          <div class="banner_item" :key="index" v-for="(item,index) in goods.moreInfo">
              <img :src="item">
          </div>
          <img src="~assets/img/detail/size.jpg">
      </div>
  </div>
</template>

<script>
export default {
    name:'detail_show',
    props:{
        goods:{
            type:Object,
            default:{}
        }
    }
}
</script>

<style scoped>
    img{
        width:100vw;
        padding-top:0.1rem;
        box-sizing: border-box;
    }
</style>