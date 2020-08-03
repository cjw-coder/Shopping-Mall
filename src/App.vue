<template>
  <div id="app">
      <keep-alive exclude="detail">
        <router-view :key="$route.fullPath"></router-view>
      </keep-alive>
      <mainTabBar></mainTabBar>
  </div>
</template>

<script>
import mainTabBar from "components/content/mainTabBar/mainTabBar"
export default {
  name: 'App',
  components: {
      mainTabBar
  }
}
</script>

<style>
    @import "assets/css/base.css";   
    html{font-size:26.666667vw;}
    body{
      font-size:0.16rem;
    }
</style>
