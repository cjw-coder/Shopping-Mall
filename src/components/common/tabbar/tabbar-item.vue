<template>
  <div class="tabbar-item"  v-on:click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
    name:'tabbar-item',
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'#F08080'
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle(){
            return this.isActive ? {color: this.activeColor} : {}
        }
    },
    methods:{
        itemClick(){
            this.$router.replace(this.path)
        }
    }
}
</script>

<style scoped>
    .tabbar-item{
        flex: 1;
        text-align: center;
        height: 0.49rem;
        font-size: 0.12rem;
        margin-top: 0.05rem;
    }
    .tabbar-item img{
        width: 0.24rem;
        height: 0.24rem;
    }
    .active{
        color:#F08080;
    }
</style>