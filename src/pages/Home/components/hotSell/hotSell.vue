<template>
  <div id="wrap">
    <navHeader>
      <div slot="left">类目热销榜</div>
    </navHeader>
    <div class="hotSellWrap">
      <div class="up">
        <div>
          <div class="text">热销榜</div>
          <img src="https://yanxuan.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&quality=65&thumbnail=200x200" alt="">
        </div>
        <div>
          <div class="text">好评榜</div>
          <img src="https://yanxuan.nosdn.127.net/7b420678ee556f428d48d1b4011aee70.png?imageView&quality=65&thumbnail=200x200" alt="">
        </div>
      </div>
      <div class="down">
        <div class="item" v-for="(item,index) in getNavlist" :key="index">
          <span class="text">{{item.text}}榜</span>
          <img :src="item.imgURL" alt="">
        </div>
      </div>
    </div>

  </div>

</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    name: "hotSell",
    computed: {
      ...mapState({
        navList:state => state.home.navList
      }),
      getNavlist(){
        return [...this.navList].splice(2,10)
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #wrap
    margin-bottom 20px
    .hotSellWrap
      background-color #fff
      width: 700px
      height 590px
      padding   0 20px 20px 30px
      .up>div
        float: left
        width: 340px
        height: 200px
        display flex
        justify-items center
        align-items center
        margin 0 10px 10px 0
        &:first-child
          background-color #F9F3E4
        &:last-child
          background-color #EBEFF6
        .text
          position relative
          margin-left 24px
          font-size: .37333rem
          display inline-block
          &:before
            content: '';
            position: absolute;
            left: 0;
            bottom: -.21333rem;
            width: .64rem;
            height: .05333rem;
            background: #333

      .down
        .item
          float left
          display flex
          align-items center
          width: 2.2rem;
          height: 2.4rem;
          background: #F5F5F5;
          border-radius: .05333rem;
          margin: 0 .13333rem .13333rem 0
          flex-direction column
          .text
            display inline-block
            margin-top: .13333rem;
            text-align: center;
            font-size: .32rem;
            color: #333
          img
            margin-top 20px
            width: 120px
            height: 120px

</style>
