<template>
  <div class="cart_list">
    <scroll class="content">
        <div v-for="(item,index) in $store.state.cartList" :key="index">
            <cart-list-item :item = "item"></cart-list-item>
        </div>
    </scroll>
  </div>
</template>

<script>
import scroll from 'components/common/betterScroll/betterScroll'
import cartListItem from './cart_listItem'

export default {
    name:'cart_list',
    data(){
        return{
            cartList:this.$store.state.cartList
        }
    },
    components:{
        scroll,
        cartListItem
    }
}
</script>

<style scoped>
    .cart_list{
        height:100vh;
    }
    .content{
        height:calc(100% - 0.44rem - 0.8rem);
    }
</style>