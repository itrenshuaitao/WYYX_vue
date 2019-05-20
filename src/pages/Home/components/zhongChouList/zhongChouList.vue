<template>
  <div id="zhongChouList">
    <navHeader>
      <div slot="left">众筹</div>
      <div slot="right">
        <span>更多</span>
        <i></i>
      </div>
    </navHeader>
    <div class="cnt">
      <div class="zhongChouItem">
        <img src="https://yanxuan.nosdn.127.net/5d403077e7a0b4265af35266ea4524be.png?imageView&thumbnail=210x210&quality=75" alt="">
        <div class="content" >
          <span class="name">中国工艺美术金奖 灵猴献寿壶</span><br>
          <span class="price">¥1998起</span>
          <div class="progressWrap">
            <div class="progress">
              <div class="bg"></div>
            </div>
            <div class="progressTxt">79%</div>
          </div>
          <span class="supportNum">73人以支持</span>
        </div>
      </div>
      <div class="zhongChouItem">
        <img src="https://yanxuan.nosdn.127.net/30655e25434873d45af14feadacf736c.png?imageView&thumbnail=210x210&quality=75" alt="">
        <div class="content" >
          <span class="name">日本有机认证 宋凰蜜韵老树单丛</span><br>
          <span class="price">¥338起</span>
          <div class="progressWrap">
            <div class="progress">
              <div class="bg" style="width: 42%"></div>
            </div>
            <div class="progressTxt">43%</div>
          </div>
          <span class="supportNum">25人以支持</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    name: "zhongChouList"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #zhongChouList
    height 611px
    margin-bottom 20px
    background-color #fff
    .cnt
      width: 690px
      height 210px
      padding 30px 30px 0 30px
      border-top: 1px solid #D8D8D8
      .zhongChouItem
        font-size 0
        display flex
        justify-content baseline
        align-items center

        img
          background-color #f4f4f4
          margin-right 30px
        .content
          .name
            font-size: .37333rem;
            width: 6rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-family: PingFangSC-Medium
          .price
            display inline-block
            margin-top: .2rem;
            font-size: .42667rem;
            color: #b4282d
          .progressWrap
            position: relative;
            width 420px
            border-radius: .04rem
            .progress
              width: 4.8rem;
              height: .08rem;
              background: #D8D8D8;
              border-radius: .04rem;
              overflow: hidden;
              position: relative;
              margin-top: .29333rem
              .bg
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width 75%
                background-color: #FEA438
            .progressTxt
              position: absolute;
              right: 0;
              top: -.2rem;
              font-size: .32rem;
              color: #7F7F7F
          .supportNum
            display inline-block
            margin-top: .2rem;
            font-size: .32rem;
            color: #7F7F7F
</style>
