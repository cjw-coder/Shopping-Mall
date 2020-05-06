<template>
  <div class="cart_bottomBar">
    <div class="left">
     <check-button :isChecked = "isAllChecked" @handleCheck = "handleCheck"></check-button>
     <span>{{totalPrice}}</span>
    </div>
     <div class="right">{{checkLength}}</div>
  </div>
</template>

<script>
import checkButton from 'components/content/checkButton/checkButton'

export default {
    name:'cart_bottomBar',
    components:{
      checkButton
    },
    methods:{
      handleCheck(){
        this.$store.dispatch('isCheckAll')
      }
    },
    computed:{
      totalPrice(){
        return '￥' + this.$store.state.cartList.filter(item => {
          return item.isChecked
        }).reduce((prev,cur) => {
          return prev + cur.price * cur.count
        },0)+'.00'
      },
      checkLength(){
        return '去计算(' + this.$store.state.cartList.filter(item => {
          return item.isChecked
        }).length + ')'
      },
      isAllChecked(){
        if(this.$store.state.cartList.length == 0){
          return false
        }else{
          return !this.$store.state.cartList.find(item => !item.isChecked)
        }
      }
    }
}
</script>

<style scoped>
  .cart_bottomBar{
    height:0.32rem;
    position: relative;
    border-top:0.005rem solid rgba(125,125,125,0.2);
    top:-1.3rem;
    line-height: 0.28rem;
    background:#ebe9e9;
    display: flex;
    justify-content: space-between;
  }
  .left{
    flex:2;
    display: flex;
    padding:0.03rem;
  }
  span{
    padding-left:0.1rem;
    flex:7
  }
  .right{
    flex:1;
    background:#ffcb7d;
    text-align: center;
  }
</style>  