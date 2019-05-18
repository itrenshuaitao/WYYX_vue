
<template>
  <div class="page">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/ac28c333645667553b74545c46ba5e7b.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/3f6db7a6a0b24bc30807c806507b81e0.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/a45c727b09ded1e0554df1fac12b94b1.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/8db54c351c497620aff3b0e65dd5f95c.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/82f1d71773bfd416da55e7facb155b8d.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/fdf6de9f80d2200d8fe6d267dff99151.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/cfa93449e6deef735fc746c7aa39b96f.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/931e7f847284a387d4725c9409383814.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>



      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.min.css';
  import Swiper from 'swiper';
  export default {
    methods: {
      _initSwiper () {
        /* eslint-disable no-new */
        new Swiper('.swiper-container', {
          direction: 'horizontal',
          loop: true,
          autoplay: true, // 自动轮播
          speed: 1000,
          pagination: {
            el: '.swiper-pagination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
              let customPaginationHtml = '';
              for (let i = 0; i < total; i++) {
                // 判断哪个分页器此刻应该被激活
                if (i === current - 1) {
                  customPaginationHtml +=
                    '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
                } else {
                  customPaginationHtml +=
                    '<span class="swiper-pagination-customs"></span>';
                }
              }
//              return '<span class="swiperPag">' + customPaginationHtml + '</span>';
              return customPaginationHtml;
            }
          }
        });
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../../common/stylus/mixins.styl";
  .page
    .swiper-container
      width 750px
      height 370px
      img
        width 100%
        height 100%
      .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets
        width 100%
        height 4px
        bottom 100px
        .swiper-pagination-customs
          width 40px
          height 4px
          display inline-block
          margin-right 10px
          background-color rgba(255, 255, 255, .5)
        .swiper-pagination-customs-active
          width 40px
          height 4px
          display inline-block
          border-radius 2px
          background-color #fff
</style>
