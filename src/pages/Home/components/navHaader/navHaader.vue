<template>
  <div class="wrap">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="header-top">
      <slot name="time"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    name: "navHeader",

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wrap
    font-size: .42667rem
    width 100%
    box-sizing border-box
    line-height 100px
    background-color #fff
    padding 0 30px
    height 100px
    .left
      float left
    .header-top
      display inline-block
      .time-down
        span
          font-size 24px
          &:nth-of-type(odd)
            padding 5px
            color #fff
            background-color #000
            border-radius 5px
            margin 0 10px
          &:nth-of-type(even)
            height 36px
    .right
      float right
      font-size .37333rem
      i
        display inline-block
        vertical-align middle
        width 12px
        height 23px
        background-repeat no-repeat
        background-size 100% 100%
        margin -4px 0 0 8px
        background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/index-titleArrow-193a1a730c.png")
</style>
