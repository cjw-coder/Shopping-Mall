<template>
  <div class="detail_desc">
        <div class="desc_title">{{this.goods.info}} </div>
        <div class="desc_price">
            <span class="new_price">{{currentPrice}}</span>
            <span class="old_price">{{oldPrice}}</span>
        </div>
        <div class="desc_other">
            <span>销量{{goods.sell}}</span>
            <span>收藏{{goods.collect}}</span>
            <span>{{mark}}</span>
        </div>
        <div class="desc_service">
            <span v-for="item in goods.service" :key="item.index">
                <img src="~assets/img/detail/right.png">
                {{item}}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name:'detail_desc',
    props:{
        goods:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    updated(){
        console.log(this.goods)
    },
    computed:{
        currentPrice:function(){
            return `￥${this.goods.current_price}.00`
        },
        oldPrice:function(){
            return `￥${this.goods.old_price}.00`
        },
        mark(){
            return `24小时内发货`
        }
    }
}
</script>

<style scoped>
    *{
        box-sizing: border-box;
    }
    .desc_title{
        font-size: 0.18rem;
        padding:0.1rem 0.05rem 0.01rem;
        letter-spacing: 0.009rem;
        color: rgb(0,0,0);
    }
    .desc_price{
        padding: 0.1rem 0.05rem;
    }
    .new_price{
        color: #F08080;
        font-size:  0.25rem;
    }
    .desc_other{
        display: flex;
        justify-content: space-between;
        padding: 0.1rem 0.05rem;
    }
    .old_price{
        color: rgba(125,125,125,0.6);
        text-decoration: line-through;
    }
    .desc_other{
        color: rgba(125,125,125,0.8);
        font-size: 0.13rem;
    }
    .desc_service{
        font-size: 0.13rem;
        display:flex;
        justify-content: space-between;
        height:0.5rem;
        line-height: 0.5rem;
        border-top:0.02rem solid rgba(125,125,125,0.1);
        border-bottom:0.02rem solid rgba(125,125,125,0.1);
    }
    .desc_service img{
        width:0.12rem;
        height:0.12rem;
    }
    .desc_service span{
        padding:0 0.05rem;
    }
</style>