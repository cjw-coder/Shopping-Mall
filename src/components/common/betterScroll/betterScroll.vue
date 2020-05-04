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
        },
        scrollTo(x,y,delay){
            this.scroll && this.scroll.scrollTo(x,y,delay)
        }
    }
}
</script>

<style scoped>

</style>