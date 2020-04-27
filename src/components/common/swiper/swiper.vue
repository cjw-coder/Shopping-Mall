<template>
  <div id="swiper">
      <div class="swiper-item" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
          <slot></slot>
      </div>
      <slot name="indicator"></slot>
      <div class="indicator">
          <slot name="indicator" v-if="showIndicator && slideCount > 1">
              <div v-for="(item,index) in slideCount" class="indi-item" :class="{active:index === currentIndex-1}" :key="index"></div>
          </slot>
      </div>
  </div>
</template>

<script>
export default {
    name:'swiper',
    props:{
        interval:{         
            type:Number,
            default:3000
        },
        animDuration:{ 
            type:Number,
            default:420
        },
        moveRatio:{       
            type:Number,
            default:0.25    
        },
        showIndicator:{
            type:Boolean,
            default:true
        }
    },
    data:function(){
        return{
            slideCount:0,
            totalWidth:0,
            swiperStyle:{},
            currentIndex:1,
            scrolling:false,
        }
    },
    mounted:function(){
        setTimeout(() => {
            this.handleDom();
            this.startTimer();
        },100)
    },
    methods:{
        startTimer:function(){
            this.playTimer = window.setInterval(() => {
                this.currentIndex++;
                this.scrollContent(-this.currentIndex * this.totalWidth);
            },this.interval)
        },
        stopTimer:function(){
            window.clearInterval(this.playTimer);
        },
        scrollContent:function(currentPosition){
            this.scrolling = true;
            this.swiperStyle.transition = 'transform' + ' ' + this.animDuration + 'ms' + ' ' + 'linear';
            this.setTransform(currentPosition);
            this.checkPosition();
            this.scrolling = false;
        },
        checkPosition:function(){
            window.setTimeout(() => {
                this.swiperStyle.transition = '0ms';
                if(this.currentIndex >= this.slideCount + 1){
                    this.currentIndex = 1;
                    this.setTransform(-this.currentIndex * this.totalWidth);
                }
                else if (this.currentIndex <= 0){
                    this.currentIndex == this.slideCount;
                    this.setTransform(-this.currentIndex * this.totalWidth);
                }
                this.$emit('transitionEnd',this.currentIndex - 1);
            },this.animDuration)
        },

        setTransform:function(position){
            this.swiperStyle.transform = `translate3d(${position}px,0,0)`;
            this.swiperStyle['-webkit-transform'] = `translate3d(${position}px),0,0`;
            this.swiperStyle['-ms-transform'] = `translate3d(${position}px),0,0`;
        },

        handleDom:function(){
            let swiperEl = document.querySelector('.swiper-item');
            let slidesEls = swiperEl.getElementsByClassName('slide');

            this.slideCount = slidesEls.length;

            if(this.slideCount > 1){
                let cloneFirst = slidesEls[0].cloneNode(true);
                let cloneLast = slidesEls[this.slideCount -1].cloneNode(true);
                swiperEl.insertBefore(cloneLast,slidesEls[0]);
                swiperEl.appendChild(cloneFirst);
                this.totalWidth = swiperEl.offsetWidth;
                this.swiperStyle = swiperEl.style;
            }

            this.setTransform(-this.totalWidth);
        },
        touchStart:function(e){
            if(this.scrolling) return;
            this.stopTimer();
            this.startX = e.touches[0].pageX;
        },
        touchMove:function(e){
            this.currentX = e.touches[0].pageX;
            this.distance = this.currentX - this.startX;
            let currentPosition = -this.currentIndex * this.totalWidth;
            let moveDistance = this.distance + currentPosition;
            this.setTransform(moveDistance);
        },
        touchEnd:function(e){
            let currentMove = Math.abs(this.distance);

            if(this.distance == 0){
                return
            }
            else if(this.distance > 0 && currentMove > this.totalWidth * this.moveRatio){
                this.currentIndex--
            }
            else if(this.distance < 0 && currentMove > this.totalWidth * this.moveRatio){
                this.currentIndex++
            }
            this.scrollContent(-this.currentIndex * this.totalWidth);
            this.startTimer();
        },
        previous:function(){
            this.changeItem(-1);
        },
        next:function(){
            this.changeItem(1);
        },
        changeItem:function(num){
            this.stopTimer();

            this.currentIndex += num;
            this.scrollContent(-this.currentIndex * this.totalWidth);
            this.startTimer();
        }

    }
}
</script>

<style>
    #swiper{
        overflow:hidden;
        position:relative;
    }

    .swiper-item{
        display: flex;
    }

    .indicator{
        display: flex;
        justify-content: center;
        position:absolute;
        width:100%;
        bottom:0.08rem;
    }

    .indi-item{
        box-sizing:border-box;
        width:0.08rem;
        height:0.08rem;
        border-radius:0.04rem;
        background:#fff;
        line-height:0.08rem;
        text-align:center;
        font-size:0.12rem;
        margin:0 0.05rem;
    }

    .indi-item.active{
        background:rgba(212,62,46,1.0);
    }
</style>