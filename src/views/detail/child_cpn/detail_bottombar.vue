<template>
  <div class="detail_bottombar">
      <div class="bar-item bar-left">
          <a href="https://plogin.m.jd.com/login/login?appid=300&returnurl=https%3A%2F%2Fwqlogin2.jd.com%2Fpassport%2FLoginRedirect%3Fstate%3D1100560547173%26returnurl%3Dhttps%253A%252F%252Fjdcs.m.jd.com%252Fchat%252Findex.action%253FvenderId%253D37335%2526entry%253Dm_shop%2526sceneval%253D2&source=wq_passport">
              <img src="~assets/img/detail/service.png">
              <span class="text">客服</span>
          </a>
          <a href="https://shop.m.jd.com/?shopId=35324">
              <img src="~assets/img/detail/store.png">
              <span class="text">店铺</span>
          </a>
          <a href="#">
              <img src="~assets/img/common/star.png">
              <span class="text">收藏</span>
          </a>
      </div>
      <div class="bar-item bar-right">
          <div class="cart" @click="addCart">加入购物车</div>
          <div class="buy">购买</div>
      </div>
    </div>
</template>

<script>
export default {
    name:'detail_bottombar',
    methods:{
        addCart(){
            this.$emit('addCart')
        }
    }
}
</script>

<style scoped>
    .detail_bottombar{
        display: flex;
        justify-content: space-between;
        position:relative;
        height:0.6rem;
        background:rgb(255,255,255);
        border-top:0.01rem solid rgba(125,125,125,0.1)
    }
    .detail_bottombar .bar-item{
        flex:1;
        display: flex;
        text-align: center;
    }
    .bar-item a,div{
        flex:1;
    }
    .bar-left{
        line-height: 0.8rem;
        font-size: 0.13rem;
    }
    .detail_bottombar .bar-left img{
        width:0.25rem;
        display: inline-block;
        position:relative;
        bottom:0.12rem;
        left:0.20rem;
    }
    .bar-left .text{
        position: relative;
        right:0.06rem;
        bottom:-0.04rem;
    }
    .bar-right{
        line-height: 0.6rem;
    }
    .bar-right .cart{
        background:#ffcc00;
    }
    .bar-right .buy{
        background:#ff9e9e;
        color:rgb(255,255,255)
    }
</style>