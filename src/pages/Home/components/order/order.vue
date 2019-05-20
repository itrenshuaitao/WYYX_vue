<template>
  <div class="orderWrap">
    <div class="title">私人订制</div>
    <div class="swiper-container-order">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in personalShop" :key="item.id">
          <img :src="item.listPicUrl" alt="">
          <div class="textWrap">
            <span>{{item.name}}</span>
            <span> &nbsp;¥{{item.counterPrice}}</span>
          </div>
        </div>

      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination-order"></div>
    </div>

  </div>

</template>

<script type="text/ecmascript-6">
  import 'swiper/dist/css/swiper.min.css';
  import Swiper from 'swiper';
  export default {
    name: "order",
    props:{
      personalShop:Array
    },
    methods:{
      _initSwiper2(){
        new Swiper('.swiper-container-order', {
          slidesPerView: 3,
          spaceBetween: 10,
          slidesPerGroup: 3,
          loop: true,
          loopFillGroupWithBlank: true,
          pagination: {
            el: '.swiper-pagination-order',
            clickable: true,
          }
        });
      }

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .orderWrap
    width 750px
    height 470px
    margin-bottom 20px
    overflow hidden
    background-color #fff
    .title
      padding 0 30px
      height 100px
      line-height 100px
      font-size .42667rem
    .swiper-wrapper
      margin-left 10px
      .swiper-slide
        width 200px
        height 300px
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




    .swiper-pagination-order
      display flex
      transform translateY(40px)
      align-items center
      justify-content center
</style>
