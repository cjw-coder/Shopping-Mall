<template>
    <div class="detail_commend">
        <div class="title">为你推荐</div>
        <goods-list :goods="commendGoods"></goods-list>
    </div>
</template>

<script>
import {getHomeGoods} from 'network/home'
import goodsList from 'components/content/goods/goodsList'
export default {
    name:'detail_commend',
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
            commendGoods:null
        }
    },
    components:{
        goodsList
    },
    created(){
        getHomeGoods('pop',1).then(res=>{
            this.commendGoods = res.data
        })
    }
}
</script>

<style scoped>
    .title{
        border-top:0.01rem solid rgba(125,125,125,0.4);
        border-bottom:0.01rem solid rgba(125,125,125,0.4);
        height:0.42rem;
        line-height:0.42rem;
        margin-bottom:0.2rem;
        padding-left:0.2rem;
    }
</style>