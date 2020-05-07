<template>
  <div class="user_infoline">
    <slot name="icon"></slot>
    <slot name="text"></slot>
  </div>
</template>

<script>
export default {
    name:'user_infoline'
}
</script>

<style scoped>
    .user_infoline{
        display: flex;
        align-items: center;
        padding:0.08rem;
        border-bottom:0.01rem solid rgba(125,125,125,0.2);
    }
    img{
        width:0.2rem;
        height:0.2rem;
    }
    span{
        padding-left:0.08rem;
    }
</style>