<template>
  <div id="home">
    <navbar>
      <div slot="center">尚品优选</div>
    </navbar>
    <tab-control :titles="['流行','新品','精选']" class="tabControl" @tabClick="tabClick" ref="tabControl2" v-show="isTabFixed"></tab-control>
    <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true" @scroll="handleScroll" @load="loadMore">
      <home-swiper :banner="banner" @homeSwiperLoad="homeSwiperLoad"></home-swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <home-feature/>

      <tab-control :titles="['流行','新品','精选']" class="tabControl" @tabClick="tabClick" ref="tabControl"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
    import navbar from 'components/common/navbar/navbar'
    import tabControl from 'components/content/tabControl/tabControl'
    import goodsList from 'components/content/goods/goodsList'
    import scroll from 'components/common/betterScroll/betterScroll'
    import backTop from 'components/content/backTop/backTop'
    import {debounce} from 'common/utils'

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
            currentType:'pop',
            isShowBackTop:false,
            isSwiperLoad:true,
            tabOffsetTop:0,
            isTabFixed:false,
            currentPos:0
          }
        },
        components:{
          navbar,
          tabControl,
          goodsList,
          scroll,
          backTop,

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
        mounted(){
          const refresh = debounce(this.$refs.scroll.refresh)
          this.$bus.$on('itemImageLoad',() => {
              refresh()
            })
        },
        computed:{
          showGoods(){
            return this.goods[this.currentType].list
          }
        },
        activated(){
          this.$refs.scroll.backTop(0,this.currentPos,0)
          this.$refs.scroll.refresh()
        },
        deactivated(){
          this.currentPos = this.$refs.scroll.scroll.y
        },
        methods:{
            /*事件监听相关方法*/
          homeSwiperLoad(){
            if(this.isSwiperLoad){
              this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
            }
            this.isSwiperLoad = false;
          },
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
            this.$refs.tabControl.currentIndex = index;
            this.$refs.tabControl2.currentIndex = index;
          },
          loadMore(){
            this.h_getHomeGoods(this.currentType)
            this.$refs.scroll.finishLoad()
          },
          backTop(){
            this.$refs.scroll.backTop(0,0)
          },
          handleScroll(position){
            this.isShowBackTop = (-position.y) > 1000
            this.isTabFixed = (-position.y+18) > this.tabOffsetTop
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
    #home{
      height:100vh;
    }
    #home .navbar{
      background:#F08080;
      color:rgb(255,255,255);
    }
    #home .content{
      height: calc(100% - 0.65rem);
      overflow: hidden;
    }
</style>