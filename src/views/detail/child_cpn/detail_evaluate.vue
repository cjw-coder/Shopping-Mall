<template>
  <div class="detail_evaluate">
    <div class="title">用户评价</div>
    <div class="evaluate_item" v-for="(item,index) in goods.evaluate" :key="index">
            <div class="evaluater">
                <img src="~assets/img/detail/evaluate_icon.png">
                <span>匿名用户</span>
            </div>
            <div class="content">{{goods.evaluate[index]}}</div>
            <div class="time">2020-02-03</div>
        </div>
  </div>
</template>

<script>
export default {
    name:'detail_evaluate',
    props:{
        goods:{
            type:Object,
            default:{}
        }
    }
}
</script>

<style scoped>
    .detail_evaluate{
        padding:0.2rem 0;
        color:rgb(0,0,0);
    }
    .title{
        border-top:0.01rem solid rgba(125,125,125,0.4);
        border-bottom:0.01rem solid rgba(125,125,125,0.4);
        height:0.42rem;
        line-height:0.42rem;
        padding-left:0.2rem;
    }
    .evaluate_item{
        padding:0.1rem;
        position: relative;
    }
    .evaluater span{
        position: absolute;
        height:0.42rem;
        line-height:0.42rem;
    }
    .evaluater img{
        width:0.42rem;
    }
    .content{
        font-size: 0.14rem;
    }
    .time{
        float:right;
        font-size: 0.12rem;
        color:rgb(125,125,125);
    }
</style>