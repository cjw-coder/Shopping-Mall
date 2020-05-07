<template>
  <div id="profile">
    <navbar>
      <div slot="center">我的</div>
    </navbar>
    <user-icon></user-icon>
    <user-banner></user-banner>
    <user-infoline>
      <img src="~assets/img/profile/mail.png" slot="icon">
      <span slot="text">我的消息</span>
    </user-infoline>
    <user-infoline>
      <img src="~assets/img/profile/money.png" slot="icon">
      <span slot="text">积分商城</span>
    </user-infoline>
    <user-infoline class="line">
      <img src="~assets/img/profile/vip.png" slot="icon">
      <span slot="text">会员卡</span>
    </user-infoline>
    <user-infoline ref="line_d">
      <img src="~assets/img/profile/cart.png" slot="icon">
      <span slot="text">购物车</span>
    </user-infoline>
    <user-infoline ref="line_d">
      <img src="~assets/img/profile/parcel.png" slot="icon">
      <span slot="text">下载购物APP</span>
    </user-infoline>
  </div>
</template>

<script>
    import navbar from 'components/common/navbar/navbar'
    import userIcon from './child_cpn/user_icon'
    import userBanner from './child_cpn/user_banner'
    import userInfoline from './child_cpn/user_infoline'
    export default {
        name:'profile',
        components:{
          navbar,
          userIcon,
          userBanner,
          userInfoline
        }
    }
</script>

<style>
    #profile .navbar{
      background:#F08080;
      color:rgb(255,255,255);
    }
    #profile .line{
      border-bottom:0.12rem solid rgba(125,125,125,0.1);
    }
</style>