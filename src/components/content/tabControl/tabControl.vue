<template>
    <div class="tabControl">
        <div v-for="(item,index) in titles" :key="index" :class="{active:index === currentIndex}" @click="itemClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'tabControl',
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            currentIndex:0
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex = index
            this.$emit('tabClick',index)
        }
    }
}
</script>

<style>
    .tabControl{
        display: flex;
        background:#fff;
        z-index:9;
    }
    .tabControl div{
        flex:1;
        text-align:center;
        height:0.40rem;
        line-height:0.40rem;
    }
    .tabControl div span{
        padding:0.06rem;
    }
    .active span{
        color:var(--color-high-text);
        border-bottom:0.03rem solid var(--color-high-text);
    }
</style>