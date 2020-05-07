<template>
    <div class="user_banner">
        <div class="banner_item item_a">
            <div><span class="text">{{price}}</span><span>元</span></div>
            <span>我的余额</span>
        </div>
        <div class="banner_item item_b">
            <div><span class="text">{{discount}}</span><span>个</span></div>
            <span>我的优惠券</span>
        </div>
        <div class="banner_item item_c">
            <div><span class="text">{{count}}</span><span>分</span></div>
            <span>我的积分</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'user_banner',
    computed:{
        price(){
            return 0+'.00'
        },
        discount(){
            return 0
        },
        count(){
            return 0
        }
    }
}
</script>

<style scoped>
    .user_banner{
        display: flex;
        justify-content: space-evenly;
        text-align: center;
        border-bottom:0.12rem solid rgba(125,125,125,0.1);
        padding:0.2rem;
    }
    .banner_item{
        flex:1;
        display: flex;
        flex-direction: column;
    }
    .item_a,.item_b{
        border-right:0.01rem dashed rgba(125,125,125,0.5);
    }
    .text{
        color: #ef664a;
        font-weight: bold;
        font-size:0.25rem
    }
</style>