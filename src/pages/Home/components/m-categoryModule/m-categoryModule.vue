<template>
  <div>
    <div class="cateGory" v-for="(category,index) in categoryModule" :key="index">
      <img :src="category.titlePicUrl" alt="">
      <div class="swiper-container-category">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in category.itemList" :key="item.id">
            <img :src="item.listPicUrl" alt="">
            <div class="textWrap">
              <span>{{item.name}}</span>
              <span> &nbsp;¥{{item.counterPrice}}</span>
            </div>
            <span class="icon">好货内部价</span>
          </div>
        </div>

      </div>
    </div>

  </div>


</template>

<script type="text/ecmascript-6">
  import 'swiper/dist/css/swiper.min.css';
  import Swiper from 'swiper';
  export default {
    name: "m-categoryModule",
    props:{
      categoryModule:Array
    },
    methods: {
      _initSwiper4 () {
        new Swiper('.swiper-container-category', {
          slidesPerView: 3,
          centeredSlides: false,
          spaceBetween: 10
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .cateGory
    background-color #fff
    overflow hidden
    margin-bottom 20px
    img
      margin-bottom 20px
      width 750px
      height 370px
    .swiper-container-category
      .swiper-wrapper
        width 690px
        height 361px
        padding 0 30px 30px 30px
        .swiper-slide
          font-size 0
          float left
          margin-left 10px
          width 200px !important
          height 350px
          img
            width 200px
            height 216px
            margin-bottom 12px
            background-color #f5f5f5
          .textWrap
            margin-top 0
            margin-bottom .13333rem
            padding 0 .13333rem
            font-size .32rem
            overflow visible
            line-clamp: 1
            text-overflow: ellipsis
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
            bottom -25px
            left 10px





</style>
