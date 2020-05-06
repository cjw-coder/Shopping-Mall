<template>
  <div class="check_button" :class="{checked:isChecked}" @click="handleCheck">
      <img src="~assets/img/cart/check.png">
  </div>
</template>

<script>
export default {
    name:"checkButton",
    props:{
        isChecked:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        handleCheck(){
            this.$emit('handleCheck')
        }
    }
}
</script>

<style scoped>
    .check_button{
        border:1px solid rgba(125,125,125);
        border-radius:50%;
    }
    img{
        position: relative;
        top:0.04rem;
        width:0.2rem;
        height:0.18rem;
    }
    .checked{
        background:#F08080;
    }
</style>