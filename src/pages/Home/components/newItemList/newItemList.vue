<template>
  <div class="newItemList">
    <navHeader>
      <div slot="left">新品首发</div>
      <div slot="right">
        <span>更多</span>
        <i></i>
      </div>
    </navHeader>
    <div class="ItemList">
      <div class="swiper-slide" v-for="item in getNewItemList" :key="item.id">
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
    name: "newItemList",
    props:{newItemList:Array},
    computed:{
      getNewItemList(){
        return [...this.newItemList].splice(0,6)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .newItemList
    width 750px
    height 808px
    background-color #fff
    padding-bottom 26px
    .ItemList
      padding 0 15px
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
