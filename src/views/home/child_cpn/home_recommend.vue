<template>
    <div class="recommend">
        <div v-for="item in recommend" :key="item.index">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div class="title">{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:'home_recommend',
    props:{
        recommend:{
            default(){
                return[]
            }
        }
    }
}
</script>

<style scoped>
    .recommend{
        display: flex;
        border-bottom:0.08rem solid #efefef;
        padding-bottom:0.12rem;
    }
    .recommend div{
        flex:1;
        text-align: center;
    }
    img{
        height:0.80rem;
        margin:0.06rem;
    }
    .title:hover{
        color:#F08080;
    }
</style>