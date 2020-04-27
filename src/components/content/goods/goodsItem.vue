<template>
  <div class="goodsItem">
      <img :src="goodsItem.src">
      <div class="info">
        <p>{{goodsItem.info}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.collect}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'goodsItem',
    props:{
        goodsItem:{
            default(){
                return {}
            }
        }
    }
}
</script>

<style>
    .goodsItem{
        width:50%;
    }
    .goodsItem img{
        width: 1.8rem;
        height: 2.7rem;
        border-radius: 0.05rem;
    }
    .goodsItem .info{
        font-size: 0.12rem;
        padding-bottom: 0.04rem;
        overflow: hidden;
        text-align: center;
    }
    .goodsItem .info p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 0.03rem;
    }
    .goodsItem .info .price{
        color: var(--color-high-text);
        margin-right: 0.22rem;
    }
    .goodsItem .collect{
        position: relative;
    }
    .goodsItem .info .collect::before{
        content:'';
        position: absolute;
        top:0.01rem;
        left: -0.15rem;
        width: 0.14rem;
        height: 0.14rem;
        background:url('~assets/img/star.png') 0 0/0.12rem 0.12rem no-repeat;
    }
</style>