<template>
  <div class="popularItemList">
    <navHeader>
      <div slot="left">人气推荐</div>
      <div slot="right">
        <span>更多</span>
        <i></i>
      </div>
    </navHeader>
    <div class="spItem">
      <div class="img">
        <img src="https://yanxuan.nosdn.127.net/042fa68e8179420a9203436256b14a01.png?imageView&quality=65&thumbnail=280x280" alt="">
      </div>
      <div class="text">
        <span>520特惠</span><br/>
        <span>九制黑芝麻丸</span><br/>
        <span>传统工艺,芝麻香浓郁,颗颗...</span><br/>
        <span>¥69</span>
      </div>

    </div>
    <div class="m-indexItem">
      <div class="swiper-slide" v-for="item in getPopularItemList" :key="item.id">
        <img :src="item.listPicUrl" alt="">
        <div class="textWrap">
          <span>{{item.name}}</span>
          <span> &nbsp;¥{{item.counterPrice}}</span>
        </div>
        <span class="icon">好货内部价</span>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    name: "popularItemList",
    props:['popularItemList'],
    computed:{
      getPopularItemList(){
        return [...this.popularItemList].splice(0,3)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .popularItemList
    width 100%
    height 754px
    background-color #fff
    padding-bottom 30px
    margin-bottom 20px
    .spItem
      position relative
      background-color #FEF0DF
      width 690px
      height 280px
      margin 0 30px 20px 30px
      .img
        font-size 0
        margin-right 30px
        background-size 100% 100%
        display inline-block
        background-image url("//yanxuan.nosdn.127.net/3235bc71e70f134b5499316fc74337d4.png")
      .text
        font-size 22px
        display inline-block
        position absolute
        top 50%
        transform translateY(-50%)
        span
          display inline-block
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
          &:nth-child(1)
            font-size: .26667rem
            height 30px
            line-height 30px
            color #B4282D
            padding 0 8px
            background-color rgba(255,255,255,.8)
            border: 1px solid #B4282D;
            margin-bottom 10px
            border-radius: .02667rem
          &:nth-child(3)
            font-size .37333rem
            width 4.66667rem
            margin-bottom 10px
          &:nth-child(5)
            font-size: .32rem;
            color: #7F7F7F;
            width: 4.66667rem
          &:nth-child(7)
            font-size .37333rem
            color #b4282d
            margin 10px 0
    .m-indexItem
      margin-left 10px
      .swiper-slide

        font-size 0
        float left
        margin-left 20px
        width 216px
        height 350px
        img
          width 216px
          height 216px
          margin-bottom 12px
          background-color #f5f5f5
        .textWrap
          margin-top 0
          margin-bottom .13333rem
          padding 0 .13333rem
          font-size .32rem
          overflow visible
          white-space normal
          line-height .48rem
          span
            font-size 24px
            &:nth-child(2)
              color #b4282d
        .icon
          display inline-block
          border 1px solid #CE2424
          height 30px
          line-height 30px
          padding 0 12px
          color #CE2424
          font-size .26667rem
          border-radius .18667rem
          vertical-align middle
          position absolute
          bottom 10px
          left 10px


</style>
