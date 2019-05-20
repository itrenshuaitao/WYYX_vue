<template>

  <div class="sceneLightShoppingGuideModule">
    <div class="wrap" v-for="(item,index) in sceneLightShoppingGuideModule" :key="index">
      <div class="textUp">{{item.styleItem.title}}</div>
      <div class="textDown">{{item.styleItem.desc}}</div>
      <div class="imgWrap">
        <img :src="item.styleItem.picUrlList[0]" alt="">
        <img :src="item.styleItem.picUrlList[1]" alt="">
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    name: "sceneLightShoppingGuideModule",
    props: {
      sceneLightShoppingGuideModule: Array
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .sceneLightShoppingGuideModule
    padding 10px 30px 30px 26px
    height 536px
    margin-bottom 20px
    background-color #fff
    .wrap
      float left
      background-image url("https://yanxuan.nosdn.127.net/b143c18172b5433310ff1f2adf281792.png?imageView&thumbnail=343x264&quality=75")
      background-size 100% 100%
      width 323px
      height 244px
      padding 20px 0 0 20px
      margin 4px 0 0 4px
      .textUp
        font-size .42667rem
        padding-left 10px
      .textDown
        color #333

        padding 10px 10px
        font-size .32rem
      img
        width 150px
        height 150px
        margin-right 4px

</style>
