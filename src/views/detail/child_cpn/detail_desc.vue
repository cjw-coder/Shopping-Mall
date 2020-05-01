<template>
  <div class="detail_desc">
        <div class="desc_title">{{info}} </div>
        <div class="desc_price">
            <span class="new_price">{{newPrice}}</span>
            <span class="old_price">{{oldPrice}}</span>
        </div>
        <div class="desc_other">
            <span>{{sale}}</span>
            <span>{{collect}}</span>
            <span>{{mark}}</span>
        </div>
        <div class="desc_service">
            <span v-for="item in service" :key="item.index">
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
    data(){
        return{
            service:['运费险','全国包邮','七天无理由退货','支持认证']
        }
    },
    computed:{
        info:function(){
            return `2019年春秋季最新款式新品优惠${this.goods.info} 个性+时尚 ins风 简约`
        },
        newPrice:function(){
            return `￥${this.goods.price}`
        },
        oldPrice:function(){
            return `￥${Number(this.goods.price) + 10}.00`
        },
        collect(){
            return `收藏${this.goods.collect}`
        },
        sale(){
            return `销量${Number(this.goods.collect) + 10}`
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
        width:0.13rem;
        height:0.13rem;
    }
    .desc_service span{
        padding:0 0.05rem;
    }
</style>