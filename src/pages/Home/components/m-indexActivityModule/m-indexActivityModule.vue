<template>
  <div class="m-indexActivityModule">
    <div class="item">
      <div class="picWrap">
        <div class="pic">
          <img src="https://yanxuan.nosdn.127.net/e75693a49d0f2645513d5ef9489c5ecc.png?imageView&thumbnail=200x200&quality=75" alt="">
        </div>
        <div class="discount">
          <div class="line1">¥98</div>
          <div class="line2">¥138</div>
        </div>
      </div>
      <div class="cnt">
        <div class="title">福利社</div>
        <div class="subTitle">抢超值神券</div>
        <div class="benefitSpot">享今日特价</div>
      </div>
    </div>
    <div class="item">
      <div class="picWrap">
        <div class="pic">
          <img src="https://yanxuan.nosdn.127.net/75f1294ede59d135f686fcb063ebca7e.png?imageView&thumbnail=200x200&quality=75" alt="">
        </div>
        <div class="discount">
          <div class="line1">¥1</div>
          <div class="line2">¥5.9</div>
        </div>
      </div>
      <div class="cnt">
        <div class="title">严选一起拼</div>
        <div class="subTitle">超值1元团</div>
        <div class="benefitSpot">全场包邮</div>
      </div>
    </div>
    <div class="item">
      <div class="picWrap">
        <div class="pic">
          <img src="https://yanxuan.nosdn.127.net/fb59be6fcbbf5c494a0a92d71369e3ef.gif?imageView&thumbnail=200x200&quality=75" alt="">
        </div>

      </div>
      <div class="cnt">
        <div class="title">会员俱乐部</div>
        <div class="subTitle">领取每日礼券</div>
      </div>
    </div>
    <div class="item">
      <div class="picWrap">
        <div class="pic">
          <img src="https://yanxuan.nosdn.127.net/15addf04475e65e0c0eb854f8a7c27aa.gif?imageView&thumbnail=200x200&quality=75" alt="">
        </div>
      </div>
      <div class="cnt">
        <div class="title">积分兑换</div>
        <div class="subTitle">限时限量0元兑</div>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    name: "m-indexActivityModule"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .m-indexActivityModule
    padding: .4rem .34667rem .34667rem .4rem;
    background: #fff;
    overflow: hidden;
    margin-bottom: .26667rem
    floar left
    .item
      position relative
      display: block;
      color: #333;
      width: 313px;
      height: 200px;
      float: left;
      border-radius: .05333rem;
      margin: 0 .05333rem .05333rem 0;
      font-size: .32rem;
      padding: .26667rem 0 0 .4rem
      background-size: 100% 100%
      &:nth-child(1)
        background-image url("https://yanxuan.nosdn.127.net/dc4bbc16d3946fddb71382f8132210b9.png?imageView&thumbnail=343x220&quality=75")
      &:nth-child(2)
        background-image url(https://yanxuan.nosdn.127.net/fccd022ad6cbf158a6e2cb694f7a281a.png?imageView&thumbnail=343x220&quality=75)
      &:nth-child(3)
        background-image url(https://yanxuan.nosdn.127.net/f27c3ec2a30b64debc57285b76c4d03d.png?imageView&thumbnail=343x220&quality=75)
      &:nth-child(4)
        background-image url(https://yanxuan.nosdn.127.net/807ed8cee518d6730180b48484f01ff2.png?imageView&thumbnail=343x220&quality=75)
      .picWrap
        position: absolute;
        right: 0;
        top: 0
        .pic
          width: 200px
          height: 200px
          img
            width: 100%;
            height: auto
            display inline
        .discount
          position: absolute;
          top: .4rem;
          right: .45333rem;
          width: 80px;
          height: 70px;
          opacity: .8;
          background: #F59524;
          border-radius: 50%;
          padding-top: .13333rem;
          color: #fff;
          text-align: center
          .line1
            padding-top 6px
            font-size: .32rem
          .line2
            padding-top 10px
            font-size: .26667rem;
            margin-top: -.09333rem;
            text-decoration: line-through
      .cnt
        position relative
        &>div
          margin-bottom 15px
        .title
          font-family: PingFangSC-Medium;
          font-size: .42667rem
        .subTitle
           color: #7F7F7F
        .benefitSpot
           color: #b4282d
</style>
