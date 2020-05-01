<template>
  <div class="detail">
        <detail-nav></detail-nav>
        <scroll class="content">
            <div class="banner">
                <img :src="goods.src" alt="">
            </div>
            <detail-desc :goods = goods></detail-desc>
            <ul>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
                <li>better-scroll测试</li>
            </ul>
        </scroll>
  </div>
</template>

<script>
import detailNav from './child_cpn/detail_nav'
import {getDetailGoods,DetailInfo} from 'network/detail'
import detailDesc from './child_cpn/detail_desc'
import scroll from 'components/common/betterScroll/betterScroll'

export default {
    name:'detail',
    data(){
        return{
            goods:{}
        }
    },
    components:{
        detailNav,
        detailDesc,
        scroll
    },
    created(){
        const type = this.$route.query.type
        const page = this.$route.query.page
        const num = this.$route.query.num
        this.d_getDetailGoods(type,page,num)
    },
    methods:{
        d_getDetailGoods(type,page,num){
            getDetailGoods(type,page,num)
            .then(res => {
                this.goods = new DetailInfo(res.data[0])
            })
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
        top:-0.50rem;
    }
    .content{
        height:calc(100% - 0.44rem);
        overflow: hidden;
    }
</style>