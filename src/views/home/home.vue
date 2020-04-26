<template>
  <div>
    <navbar>
      <div slot="center">尚品优选</div>
    </navbar>
    <home-swiper :banner="banner"></home-swiper>
    <home-recommend :recommend="recommend"></home-recommend>
    <h3>我是首页页面</h3>
  </div>
</template>

<script>
    import navbar from 'components/common/navbar/navbar'
    import homeSwiper from './child_cpn/home_swiper'
    import homeRecommend from './child_cpn/home_recommend'

    import {getHomeMultidata} from 'network/home'
    export default {
        name:'home',
        data(){
          return {
            banner:[],
            recommend:{}
          }
        },
       
        components:{
          navbar,
          homeSwiper,
          homeRecommend
        },
        created(){
          getHomeMultidata().then(res => {
              console.log(res)
              this.banner = res.data.data.banner.list
              this.recommend = res.data.data.recommend.list
           }).catch(err => {
              console.log(err)
           })
        }
    }
</script>

<style>

</style>