<template>
    <div class="wrapper" ref="wrapper">
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'scroll',
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
            scroll:null
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
            click:true,
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad
        })
        if(this.probeType === 2 || this.probeType === 3){
            this.scroll.on('scroll',(position)=>{
                this.$emit('scroll',position)
            })
        }
        this.scroll.on('pullingUp',()=>{
            this.$emit('load')
            console.log('触发了上拉加载事件')
        })
    },
    methods:{
        backTop(x,y,time=500){
            this.scroll && this.scroll.scrollTo(x,y,time)
        },
        finishLoad(){
            this.scroll &&  this.scroll.finishPullUp()
        },
        refresh(){
            this.scroll &&  this.scroll.refresh()
        }
    }
}
</script>

<style scoped>

</style>