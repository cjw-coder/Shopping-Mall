<template>
  <div class="detail">
        <detail-nav @navClick = "navClick" :getCurrentIndex = "currentIndex"></detail-nav>
        <scroll class="content" ref="scroll" :probeType = "3" @scroll = "handleScroll">
            <div class="banner">
                <img :src="goods.src" alt="">
            </div>
            <detail-desc :goods = "goods"></detail-desc>
            <detail-seller :goods = "goods"></detail-seller>
            <detail-show :goods = "goods" ref="show"></detail-show>
            <detail-evaluate :goods = "goods" ref="evaluate"></detail-evaluate>
            <detail-commend :goods = "goods" ref="commend"></detail-commend>
        </scroll>
        <detail-bottombar @addCart = "addCart"></detail-bottombar>
        <toast :isToastShow = "isToastShow">添加购物车成功</toast>
  </div>
</template>

<script>
import {getDetailGoods,DetailInfo} from 'network/detail'
import {itemListerMixin} from 'common/mixin'
import {debounce} from 'common/utils'
import scroll from 'components/common/betterScroll/betterScroll'
import toast from 'components/common/toast/toast'

import detailNav from './child_cpn/detail_nav'
import detailDesc from './child_cpn/detail_desc'
import detailSeller from './child_cpn/detail_seller'
import detailShow from './child_cpn/detail_show'
import detailEvaluate from './child_cpn/detail_evaluate'
import detailCommend from './child_cpn/detail_commend'
import detailBottombar from './child_cpn/detail_bottombar'

export default {
    name:'detail',
    mixin:[itemListerMixin],
    data(){
        return{
            goods:{},
            navPos:[],
            navClickIndex:0,
            currentIndex:0,
            isToastShow:false
        }
    },
    components:{
        scroll,
        detailNav,
        detailDesc,
        detailSeller,
        detailShow,
        detailEvaluate,
        detailCommend,
        detailBottombar,
        toast
    },
    mounted(){
        const type = this.$route.query.type
        const page = this.$route.query.page
        const num = this.$route.query.num
        this.d_getDetailGoods(type,page,num)
    },
    methods:{
        addCart(){
            const addGoods = {}
                addGoods.type = this.goods.type
                addGoods.page = this.goods.page
                addGoods.num = this.goods.num
                addGoods.price = this.goods.current_price
                addGoods.src = this.goods.src
                addGoods.info = this.goods.info
            this.$store.dispatch("addCart",addGoods).then(() => {
                this.isToastShow = true
                setTimeout(()=>{
                    this.isToastShow = false
                },1000)
            })

        },
        getNavPos(){
             if(this.navPos.length < 4){
                this.navPos.push(-40)
                this.navPos.push(this.$refs.show.$el.offsetTop)
                this.navPos.push(this.$refs.evaluate.$el.offsetTop)
                this.navPos.push(this.$refs.commend.$el.offsetTop)
            }
        },
        handleScroll(position){
            this.currentIndex = this.navClickIndex
            this.getNavPos()
            const positionY = -position.y
            const navLength = this.navPos.length
            for(let i=0;i<navLength;i++){
                if(this.currentIndex != i && i < navLength - 1 && positionY > this.navPos[i] && positionY < this.navPos[i+1]){
                    this.currentIndex = i
                }else if(this.currentIndex != i && i === navLength - 1 && positionY > this.navPos[i]){
                    this.currentIndex = i
                }
            }
        },
        d_getDetailGoods(type,page,num){
            getDetailGoods(type,page,num)
            .then(res => {
                this.goods = new DetailInfo(res.data[0])
            })
        },
        navClick(index){
            this.getNavPos()
            this.navClickIndex = index
            this.$refs.scroll.scrollTo(0,-this.navPos[index],400)
        }
    }
}
</script>.

<style scoped>
    .detail{
        height:100vh;
    }
    .banner{
        height:3.5rem;
        overflow: hidden;
    }
    img{
        width:100%;
        position: relative;
        top:-0.25rem;
    }
    .content{
        height:calc(100% - 0.44rem - 0.6rem);
        overflow: hidden;
    }
</style>