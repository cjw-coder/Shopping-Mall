<template>
    <div class="backTop">
        <img src="~assets/img/common/arrow.png" alt="">
    </div>
</template>

<script>
export default {
    name:'backTop'
}
</script>

<style>
    .backTop{
        position: fixed;
        right:0.10rem;
        bottom:0.60rem;
        z-index:9;
    }
    .backTop img{
        width:0.6rem;
    }
</style>