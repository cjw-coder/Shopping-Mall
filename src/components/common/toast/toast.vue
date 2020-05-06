<template>
    <div class="toast" v-show="isToastShow">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'toast',
    props:{
        isToastShow:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style scoped>
    .toast{
        position: fixed;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);  
        color:#fff;
        background:rgba(0,0,0,0.4);
        border-radius:0.1rem;
        padding:0.2rem;
    }
</style>