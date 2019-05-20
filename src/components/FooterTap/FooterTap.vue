<template>
  <ul>
    <li :class="{active: $route.path === '/home'}" @click="$router.replace('/home')">
      <div class="footer_icon"  :class="{active: $route.path === '/home'}"></div>
      <span>首页</span>
    </li>
    <li :class ="{active: $route.path === '/classify'}"  @click="$router.replace('/classify')">
      <div class="footer_icon"  :class ="{active: $route.path === '/classify'}"></div>
      <span>分类</span>
    </li>
    <li :class ="{active: $route.path === '/general'}"  @click="$router.replace('/general')">
      <div class="footer_icon"  :class ="{active: $route.path === '/general'}"></div>
      <span>识物</span>
    </li>
    <li :class ="{active: $route.path === '/shopcart'}"  @click="$router.replace('/shopcart')">
      <div class="footer_icon"  :class ="{active: $route.path === '/shopcart'}"></div>
      <span>购物车</span>
    </li>
    <li :class ="{active: $route.path === '/personage'}"  @click="$router.replace('/personage')">
      <div class="footer_icon"  :class ="{active: $route.path === '/personage'}"></div>
      <span>个人</span>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "FooterTap"
  }
</script>
<!--<img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="">-->

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  ul
    top-border-1px(#d9d9d9)
    position fixed
    bottom 0
    left 0
    z-index 10
    display flex
    justify-content space-around
    align-items center
    height 100px
    width 100%
    font-size 24px
    background-color #fff
    margin-top -100px
    li
      display flex
      flex-direction column
      justify-content space-around
      align-items center
      height 71px
      .footer_icon
        width 40px
        height 490px
        background-repeat no-repeat
        background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png")
      &:nth-of-type(1)>div
        background-position 0 -250px
        &.active
          background-position 0 -200px
      &:nth-of-type(2)>div
        background-position 0 -150px
        &.active
          background-position 0 -100px
      &:nth-of-type(3)>div
        background-position 0 -350px
        &.active
          background-position 0 -100px
      &:nth-of-type(4)>div
        background-position 0 -50px
        &.active
          background-position 0 0px
      &:nth-of-type(5)>div
        background-position 0 -450px
        &.active
          background-position 0 -400px
      &.active
        color  #b4282d
</style>
