<template>
  <div id="topicList">
    <navHeader>
      <div slot="left">专题精选</div>
      <div slot="right">
        <span>更多</span>
        <i></i>
      </div>
    </navHeader>
    <div class="swiper-container-topicList">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in topicList" :key="item.id">
          <img :src="item.itemPicUrl" alt="">
          <span class="line">{{item.title}}</span>
          <span class="desc">{{item.subtitle}}</span>
        </div>
      </div>

    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import 'swiper/dist/css/swiper.min.css';
  import Swiper from 'swiper';
  export default {
    name: "topicList",
    props:['topicList'],
    methods: {
      _initSwiper3 () {
        new Swiper('.swiper-container-topicList', {
          slidesPerView: 1.4,
          centeredSlides: false,
          spaceBetween: 30
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #topicList
    overflow hidden
    background-color #fff
    padding 0 30px 30px 30px
    .swiper-container-topicList .swiper-wrapper .swiper-slide
      width: 480px
      height 354px
      padding-bottom 24px
      border-radius: .10667rem
      background-color #f5f5f5
      margin-right 32px
      overflow hidden
      img
        display: block;
        width: 480px;
        height 267px
        margin-bottom: .21333rem;
      .line
        display inline-block
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap
        float: left;
        font-size: .37333rem
        height: .54667rem
        line-height: .53333rem;
        margin-bottom: .08rem;
        padding: 0 .26667rem
      .desc
        display inline-block
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 5.86667rem;
        font-size: .32rem;
        color: #7F7F7F;
        padding: 0 .26667rem
        margin-bottom 45px
</style>
