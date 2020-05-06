<template>
    <div class="detail_nav">
        <navbar>
            <div slot="left">
                 <img src="~assets/img/detail/back.png" style="width:0.3rem;height:0.3rem;margin-top:0.06rem;" @click="backHome">
            </div>
            <div slot="center" class="title">
                <div v-for="(item,index) in titles" :key="index" :class="{active:index==getCurrentIndex}" @click="navClick(index)">
                    {{item}}
                </div>
            </div>
        </navbar>
    </div>
</template>

<script>
import navbar from 'components/common/navbar/navbar'
export default {
    name:'detail_nav',
    props:{
        getCurrentIndex:{
            type:Number,
            default:0
        }
    },
    data(){
        return{
            titles:['商品','详情','评论','推荐'],
          
        }
    },
    methods:{
        backHome(){
            this.$router.go(-1)
        },
        navClick(index){
            this.$emit('navClick',index)
        }
    },
    components:{
        navbar
    }
}
</script>

<style scoped>
    .detail_nav{
        border-bottom:0.01rem solid gainsboro;
    }
    .title{
       display: flex;
    }
    .title div{
        flex:1;
        font-size: 0.13rem;
    }
    .active{
        color:#F08080;
    }
</style>