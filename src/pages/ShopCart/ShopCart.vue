<template>
  <div class="root">
    <header>
      <span class="left">购物车</span>
      <div class="right">领券</div>
    </header>
    <div>
      <ul class="ul">
        <li><i></i>30天无忧退货</li>
        <li><i></i>48小时快速退款</li>
        <li><i></i>满88元免邮费</li>
      </ul>
      <div class="wrap">
        <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
        <span>去添加点什么吧</span>
        <button  @click="$router.replace('/personage')">登录</button>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    name: "ShopCart"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .root
    background-color #f4f4f4
    height 100%
    header
      z-index: 1;
      max-width: 768px;
      box-sizing: border-box;
      margin: auto;
      height 88px
      overflow: hidden;
      padding: 0 30px;
      position: relative;
      background-color #fff
      .left
        float: left;
        line-height 84px
        font-size: .48rem
      .right
        float right
        font-size .4rem
        color #B4282D
        padding 28px 30px 0 0
    .ul
      box-sizing border-box
      width 100%
      height 70px
      padding 0 30px
      display flex
      align-items center
      justify-content space-around
      li
        align-items: center;
        font-size: .32rem;
        color: #666
        i
          display inline-block
          background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-0ec842d966.png")
          margin-right 6px
          position relative
          top -1px
          width 10px
          height 10px
    .wrap
      display flex
      transform translateY(90%)
      flex-direction column
      align-items center
      img
        width 248px
      span
        margin-bottom: .66667rem;
        line-height: 1;
        font-size: .37333rem;
        color: #999
      button
        margin: auto;
        width: 6.4rem;
        height: 1.22667rem;
        font-size: .4rem;
        line-height: 1.22667rem;
        color: #fff;
        background-color: #b4282d;
        border-radius: .04rem
</style>
