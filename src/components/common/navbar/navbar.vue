<template>
  <div>
    <div class="navbar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
    name:"navbar"
}
</script>

<style>
    .navbar{
        height:0.44rem;
        line-height:0.44rem;
        display: flex;
        text-align:center;
        position:fixed;
        left:0;
        right:0;
        top:0;
        z-index:9;
    }
    .left,.right{
        width:0.60rem;
    }
    .center{
        flex:1;
    }
</style>