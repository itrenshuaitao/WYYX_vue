<template>
  <div class="supply">
    <navHeader>
      <div slot="left">品牌制造商直供</div>
      <div slot="right">
        <span>更多</span>
        <i></i>
      </div>
    </navHeader>
    <ul class="list">
      <li class="item">
        <div class="cnt">
          <h4 class="title">海外制造商</h4>
          <div class="text">
            <span class="price">9.9元起</span>
            <i class="newIcon">上新</i>
          </div>
        </div>
      </li>
      <li class="item">
        <div class="cnt">
          <h4 class="title">CK制造商</h4>
          <div class="text">
            <span class="price">29.9元起</span>
          </div>
        </div>
      </li>
      <li class="item">
        <div class="cnt">
          <h4 class="title">新秀丽制造商</h4>
          <div class="text">
            <span class="price">34.9元起</span>
          </div>
        </div>
      </li>
      <li class="item">
        <div class="cnt">
          <h4 class="title">Nine West制造商</h4>
          <div class="text">
            <span class="price">219元起</span>
          </div>
        </div>
      </li>

    </ul>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    name: "supply"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .supply
    padding-bottom 8px
    .list
      position relative
      overflow hidden
      background #fff
      margin-bottom 20px
      padding 0 26px 26px 30px
      .item
        display: inline-block;
        position: relative;
        margin: 0 4px 4px 0;
        width: 343px
        height: 260px
        overflow: hidden;
        background-color: #f4f4f4;
        border-radius: .05333rem
        background-size: 100% 100%
        &:nth-child(1)
          background-image url("https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1")
        &:nth-child(2)
          background-image url("https://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?imageView&thumbnail=343y260&enlarge=1")
        &:nth-child(3)
          background-image url("https://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png?imageView&thumbnail=343y260&enlarge=1")
        &:nth-child(4)
          background-image url("https://yanxuan.nosdn.127.net/3bf5a8a2f6eef284ecb40806ae9ce043.png?imageView&thumbnail=343y260&enlarge=1")
        .cnt
          position: absolute;
          left: 0;
          top: 0;
          padding-top: .30667rem;
          width: 100%;
          z-index: 4;
          text-align: center
          .title
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            color: #333;
            font-family: PingFangSC-Medium;
            font-size: .37333rem;
            line-height: .45333rem;
            margin-bottom: .04rem
          .text
            transform translateY(-35px)
            .price
              color: #7F7F7F;
              font-size: .32rem
            .newIcon
              font-size 20px
              display: inline-block;
              width: .85333rem;
              height: .42667rem;
              color: #fff;
              line-height: .42667rem;
              text-align: center;
              background: #CBB693;
              border-radius: .05333rem;
              margin-left: .13333rem
</style>
