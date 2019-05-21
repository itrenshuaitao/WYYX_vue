<template>
  <div id="person">
    <HeaderSlot>
      <img class="title" src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" slot="img" alt="">
    </HeaderSlot>
    <div class="logoWrap">
      <img  src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
    </div>
    <div>
      <div>
        <i></i>
        <span>手机号码登录</span>
      </div>
      <div>
        <i></i>
        <span>邮箱账号登录</span>
      </div>
      <div>
        <span>手机号快捷注册</span>
        <i></i>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    name: "personage"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #person
    background-color #F2F5F4
    height 100%
    .title
      position absolute
      top 50%
      left 50%
      transform translateX(-50%)  translateY(-50%)
    .logoWrap
      text-align center
      padding 160px 0
      img
        width: 3.57333rem;
        height: 1.2rem

</style>
