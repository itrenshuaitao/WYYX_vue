<template>
<header class="m-indexHd">
  <div class="line">
    <h1>
      <a class="logo" href="/"></a>
    </h1>

    <div class="m-topSearchIpt">
      <i class="icon"></i>
      <span class="placeholder">搜索商品, 共22845款好物</span>
    </div>
    <div class="loginBtn">登录</div>
  </div>
  <div class="header-nav">
    <div class="nav-left">
      <li></li>
    </div>
    <div class="nav-right"></div>
  </div>
  <div></div>
</header>

</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    name: "Header",
    mounted() {
      let scroll = new BScroll('.nav-left')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .m-indexHd
    position relative
    width 100%
    height 150px
    background-color #fff
    bottom-border-1px(#d9d9d9)
    .line
      display flex
      height 88px
      box-sizing border-box
      justify-content space-between
      align-items center
      padding 16px 30px
      & h1
        width 138px
        height 40px
      .logo
        display inline-block
        vertical-align top
        width 138px
        height 40px
        background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png")
        background-repeat no-repeat
      .m-topSearchIpt
        display flex
        align-items center
        justify-content center
        width 442px
        height 56px
        background-color #ededed
        border-radius 10px
        .icon
          display inline-block
          width 28px
          height 28px
          background-repeat no-repeat
          background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png")
          margin-right 10px
        .placeholder
          font-size 28px
          color #666
      .loginBtn
        box-sizing border-box
        font-size 24px
        width 74px
        height 40px
        line-height 40px
        text-align center
        color red
        border 1px solid red
        border-radius 8px
  .header-nav
    display flex
    height 60px
    .nav-left
      width 650px
      height 60px
    .nav-right
      width 100px
      height 60px
</style>
