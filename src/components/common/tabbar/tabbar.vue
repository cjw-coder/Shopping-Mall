<template>
    <div id="tabBar">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'tabbar'
}
</script>

<style>

  #tabBar{
    display: flex;
    background:#f6f6f6;
    position: fixed;
    left:0;
    right:0;
    bottom:0;
    box-shadow:0px -0.03rem 0.01rem rgba(100,100,100,0.02);
  }
</style>
