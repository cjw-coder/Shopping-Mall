<template>
  <div id="home">
    <navbar>
      <div slot="center">尚品优选</div>
    </navbar>
    <home-swiper :banner="banner"></home-swiper>
    <home-recommend :recommend="recommend"></home-recommend>
    <home-feature/>
    
    <tab-control :titles="['流行','新品','精选']" class="tabControl" @tabClick="tabClick"></tab-control>
    <goods-list :goods="showGoods"></goods-list>
  </div>
</template>

<script>
    import navbar from 'components/common/navbar/navbar'
    import tabControl from 'components/content/tabControl/tabControl'
    import goodsList from 'components/content/goods/goodsList'

    import homeSwiper from './child_cpn/home_swiper'
    import homeRecommend from './child_cpn/home_recommend'
    import homeFeature from './child_cpn/home_feature'


    import {getHomeMultidata,getHomeGoods} from 'network/home'
    export default {
        name:'home',
        data(){
          return {
            banner:[],
            recommend:{},
            goods:{
              'pop':{page:0,list:[]},
              'new':{page:0,list:[]},
              'sell':{page:0,list:[]}
            },
            currentType:'pop'
          }
        },
        components:{
          navbar,
          tabControl,
          goodsList,

          homeSwiper,
          homeRecommend,
          homeFeature
        },
        created(){
          this.h_getHomeMultidata()
          this.h_getHomeGoods('pop')
          this.h_getHomeGoods('new')
          this.h_getHomeGoods('sell')
        },
        computed:{
          showGoods(){
            return this.goods[this.currentType].list
          }
        },
        methods:{
            /*事件监听相关方法*/
          tabClick(index){
            switch(index){
              case 0:
                this.currentType = 'pop'
                break;
              case 1:
                this.currentType = 'new'
                break;
              case 2:
                this.currentType = 'sell'
            }
          },
            /*网络请求相关方法 */
          h_getHomeMultidata(){
            getHomeMultidata()
            .then(res => {
              console.log(res)
              this.banner = res.data.data.banner.list
              this.recommend = res.data.data.recommend.list
            })
            .catch(err => {
              console.log(err)
            })
          },
          h_getHomeGoods(type){
            const page = this.goods[type].page + 1;
            getHomeGoods(type,page).then(res => {
                console.log(res);
                this.goods[type].list.push(...res.data)
                this.goods[type].page += 1
            })
          }
        }
    }
</script>

<style>
    #home .navbar{
      background:#F08080;
      color:rgb(255,255,255);
    }
    .tabControl{
      position:sticky;
      top:0.44rem;
    }
</style>