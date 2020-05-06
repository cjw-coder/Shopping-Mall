<template>
  <div class="cart_listItem">
      <div class="left">
            <check-button :isChecked = "isChecked" @handleCheck = "handleCheck"></check-button>
            <img :src="item.src">
      </div>
      <div class="right">
          <div class="info_top">
              <span>{{item.info}}</span>
          </div>
          <div class="info_bottom">
              <span>{{price}}</span>
              <span>{{count}}</span>
          </div>
      </div>
  </div>
</template>

<script>
import checkButton from 'components/content/checkButton/checkButton'
export default {
    name:'cart_listItem',
    props:{
        item:{
            type:Object,
            default:[]
        }
    },
    components:{
        checkButton
    },
    methods:{
        handleCheck(){
            this.$store.commit('handleCheck',this.item)
        }
    },
    computed:{
        price:function(){
            return `￥${this.item.price}.00`
        },
        count:function(){
            return `×${this.item.count}`
        },
        isChecked:function(){
            return this.item.isChecked   
        }
    }
}
</script>

<style scoped>
    .cart_listItem{
        display: flex;
        justify-content: space-between;
        border-bottom:0.01rem solid rgba(125,125,125,0.4);
        padding:0.1rem;
    }
    img{
        width:1rem;
        border-radius: 0.1rem;
        margin:0 0.1rem;
    }
    .left{
        flex:1 1 auto;
        display: flex;
        align-items: center;
    }
    .right{
        flex:2 2 auto;
        padding-top:0.2rem;
    }
    div{
        text-overflow: ellipsis;
    }
    .info_top{
        overflow: hidden;
    }
    span{
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .info_bottom{
        display: flex;
        justify-content: space-between;
        padding-top:0.6rem;
    }
</style>