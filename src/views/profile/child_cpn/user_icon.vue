<template>
  <div class="user_icon">
      <img src="~assets/img/profile/icon.png">
      <div class="info">
          <div class="left">
            <span>
                <a href="https://plogin.m.jd.com/login/login?appid=300&returnurl=https%3A%2F%2Fwqlogin2.jd.com%2Fpassport%2FLoginRedirect%3Fstate%3D1100560547173%26returnurl%3Dhttps%253A%252F%252Fjdcs.m.jd.com%252Fchat%252Findex.action%253FvenderId%253D37335%2526entry%253Dm_shop%2526sceneval%253D2&source=wq_passport">登录/注册</a>
            </span>
            <div>
                <img src="~assets/img/profile/phone.png">
                <span>暂未绑定手机号</span>
            </div>
          </div>
          <img src="~assets/img/profile/arrow.png" class="arrow">
      </div>
  </div> 
</template>

<script>
export default {
    name:'user_icon'
}
</script>

<style scoped>
    .user_icon{
        background:#F08080;
        display: flex;
        justify-content: space-between;
        color:#fff;
        padding:0.1rem;
        border-bottom:0.01rem solid rgba(125,125,125,0.2);
    }
    a{
        color:#fff;
    }
    img{
        width:0.55rem;
        height:0.55rem;
    }
    .info{
        flex:3;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:0 0.1rem;
    }
    .left{
        flex:3;
        line-height: 0.25rem;
    }
    .left img{
        width:0.18rem;
        height:0.18rem;
    }
    .left div{
        display: flex;
        align-items: center;
    }
    .arrow{
        width:0.2rem;
        height:0.2rem;
    }
</style>