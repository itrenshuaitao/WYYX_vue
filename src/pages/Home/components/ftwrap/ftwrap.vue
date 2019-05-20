<template>
  <div class="ftwrap">
    <div class="ft">
      <div>
        <button>下载APP</button>
        <button>电脑版</button>
      </div>
      <p>
        <span>网易公司版权所有 © 1997-2019</span><br>
        <span>食品经营许可证：JY13301080111719</span>
      </p>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    name: "ftwrap"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .ftwrap
    border-top: 1px solid rgba(0,0,0,.15);
    background-color: #414141
    .ft
      text-align center
      padding 54px 20px 28px 20px
      font-size .32rem
      button
        font-size .32rem
        width 170px
        height 60px
        margin-right 50px
        background-color rgba(0,0,0,0)
        color #fff
        border: 1px solid #999
        border-radius 4px
      p
        color: #999
        display inline-block
        padding-top 30px
        line-height 35px
</style>
