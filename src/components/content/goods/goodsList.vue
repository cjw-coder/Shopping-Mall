<template>
  <div class="goods">
      <goods-item v-for="item in goods" :key="item.index" :goodsItem="item"/>
  </div>
</template>

<script>
import goodsItem from './goodsItem'
export default {
    name:'goodsList',
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        goodsItem
    }
}
</script>

<style>
    .goods{
        display: flex;
        flex-wrap: wrap;
        align-content: space-around;
    }

</style>