<template>
  <div class="detail_seller">
      <div class="title">
          <img src="~assets/img/detail/seller.png">
          <span>{{goods.sell_name}}</span>
      </div>
      <div class="info">
          <div class="allSell">
              <span>{{goods.all_sell}}</span>
              <span>总销量</span>
          </div>
          <div class="allGoods">
              <span>{{goods.all_goods}}</span>
              <span>全部宝贝</span>
          </div>
          <div class="level">
              <div v-for="item in allLev" :key="item.index">
                  <span>{{item.title}}</span>
                  <span>{{item.value}}</span>
                  <span class="default" :class="{hight:item.isHightColor}">{{item.isHightText ? '高' : '低'}}</span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'detail_seller',
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
            allLev: [
                {
                    title:'描述相符',
                    value:0,
                    isHightColor:true,
                    isHightText:true
                },
                {
                    title:'服务态度',
                    value:0,
                    isHightColor:true,
                    isHightText:true
                },
                {
                    title:'质量满意',
                    value:0,
                    isHightColor:true,
                    isHightText:true
                }
            ]
        }
    },
    updated(){
        this.getHight()
    },
    methods:{
        getHight(){
            for(let i=0;i<this.allLev.length;i++){             
                if(this.allLev[i].value < 8){
                    this.allLev[i].isHightColor = false;
                    this.allLev[i].isHightText = false;
                }
            }
        }
    },
    watch:{
      goods:function(newVal,oldVal){
        this.allLev[0].value = newVal.desc_lev;
        this.allLev[1].value = newVal.quality_lev
        this.allLev[2].value = newVal.service_lev
        }

    }
}
</script>

<style scoped>
    .detail_seller{
        padding: 0.2rem 0.2rem 0.2rem 0.1rem;
        border-bottom:0.02rem solid rgba(125,125,125,0.1);
    }
    .title{
        height:0.5rem;
        display: flex;
        line-height:0.5rem;
    }
    .title img{
        width: 0.5rem;
        display: inline-block;
        margin-right:0.05rem;
    }
    .info{
        display:flex;
        justify-content: space-around;
    }
    .info div{
        width:100px;
        height:100px;
       
        display: flex;
        flex-direction: column;
        justify-content:center;
        text-align: center;
    }
    .allGoods{
        border-right:0.01rem dashed rgba(125,125,125,0.4)
    }
    .level div{
        display: inline;
        font-size: 0.13rem;
        padding-top:0.1rem;
    }
    .default{
        float:right;
        color: rgb(255,255,255);
        background: #92e88a;
        font-size: 0.12rem;
        padding:0.01rem;
        border-radius:0.02rem;
        margin-right:0.04rem;
    }
    .hight{
        background: #F08080;
    }
</style>