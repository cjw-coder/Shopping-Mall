<template>
      <swiper>
      <swiper-item v-for="item in banner" :key="item.index">
        <a :href="item.link">
          <img :src="item.image" @load="homeSwiperLoad">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import {swiper,swiperItem} from 'components/common/swiper'
export default {
    name:'home_swiper',
    props:{
      banner:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    components:{
        swiper,
        swiperItem
    },
    methods:{
      homeSwiperLoad(){
        this.$emit('homeSwiperLoad')
      }
    }
}
</script>

<style>

</style>