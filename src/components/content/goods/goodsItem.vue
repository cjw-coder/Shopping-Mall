<template>
  <div class="goodsItem" @click="toDetail">
      <img v-lazy="goodsItem.src" @load="imageLoad">
      <div class="info">
        <p>{{goodsItem.info}}</p>
        <span class="price">{{goods_price}}</span>
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
    },
    methods:{
        imageLoad(){
            if(this.$route.path == "/home"){
                this.$bus.$emit('itemImageLoad')
            }else if(this.$route.path == '/detail'){
                this.$bus.$emit("commendImageLoad")
            }
        },
        toDetail(){
            this.$router.push({
                path:'/detail',
                query:{
                    type:this.goodsItem.type,
                    page:this.goodsItem.page,
                    num:this.goodsItem.num
                }
            })
        }
    },
    computed:{
        goods_price:function(){
            return `￥${this.goodsItem.current_price}.00`
        }
    }
}
</script>

<style>
    .goodsItem{
        width:50%;
        text-align: center;
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
        background:url('~assets/img/common/star.png') 0 0/0.12rem 0.12rem no-repeat;
    }
</style>