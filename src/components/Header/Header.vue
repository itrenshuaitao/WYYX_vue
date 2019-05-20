<template>
<header class="m-indexHd">
  <div class="line">
    <h1>
      <a class="logo" href="/"></a>
    </h1>

    <div class="m-topSearchIpt">
      <i class="icon"></i>
      <span class="placeholder">搜索商品, 共22845款好物</span>
    </div>
    <div class="loginBtn">登录</div>
  </div>
  <div class="header-nav">
    <div class="nav-left">
      <ul v-show="!isOpen">
        <li :class="{active:curA===20}" @click="curA = 20">推荐</li>
        <li v-for="(nav,index) in navList" :key="index" :class="{active:curA===index}"
          @click="addIndex(index)"
        >{{nav.text}}</li>

      </ul>
      <span v-show="isOpen" class="showText">全部频道</span>
    </div>
    <div class="nav-right">
      <div class="linear"></div>
      <div class="toggle" @click="isOpen = !isOpen">
        <span class="icon" :class="{active:isOpen}"></span>
      </div>
    </div>
  </div>
  <div v-show="isOpen" class="moreCate">
    <ul>
      <li :class="{active:curA===20}" @click="curA = 20">推荐</li>
      <li v-for="(nav,index) in navList" :key="index" :class="{active:curA===index}"
          @click="addIndex(index)"
      >{{nav.text}}</li>
    </ul>
    <div class="mask" v-show="isOpen"></div>
  </div>
</header>

</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    name: "Header",
    data(){
      return {
        isOpen:'',
        curA: 20
      }
    },
    computed: {
      ...mapState({
        navList:state => state.home.navList
      })
    },
    methods:{
      addIndex(index){
        this.curA = index
      },

    },
    mounted() {
      this.$nextTick(()=>{
        if (this.navList) {
          this.scroll = new BScroll('.nav-left',{
            scrollX:true,
            click:true

      })
    }
  })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .m-indexHd
    width 100%
    height 150px
    position fixed
    top 0
    z-index 10
    background-color #fff
    .line
      position relative
      z-index 2
      display flex
      height 88px
      background-color #fff
      box-sizing border-box
      justify-content space-between
      align-items center
      padding 16px 30px
      & h1
        width 138px
        height 40px
      .logo
        display inline-block
        vertical-align top
        width 138px
        height 40px
        background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png")
        background-repeat no-repeat
      .m-topSearchIpt
        display flex
        align-items center
        justify-content center
        width 442px
        height 56px
        background-color #ededed
        border-radius 10px
        .icon
          display inline-block
          width 28px
          height 28px
          background-repeat no-repeat
          background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png")
          margin-right 10px
        .placeholder
          font-size 28px
          color #666
      .loginBtn
        box-sizing border-box
        font-size 24px
        width 74px
        height 40px
        line-height 40px
        text-align center
        color red
        border 1px solid red
        border-radius 8px
  .header-nav
    position relative
    z-index 2
    background-color #fff
    display flex
    height 60px
    .nav-left
      width 650px
      height 60px
      overflow hidden
      .showText
        display inline-block
        vertical-align top
        margin-left 30px
        height 60px
        line-height 60px
        font-size 28px
      ul
        display flex
        width 1700px
        padding  0 30px
        li
          display flex
          font-size 28px
          line-height 60px
          height 60px
          padding  0 23px
          color #333
          justify-content center
          &.active
            box-sizing border-box
            color #b4282d
            border-bottom 3px solid #b4282d
    .nav-right
      position relative
      width 100px
      height 60px
      .linear
        width 60px
        height 60px
        position absolute
        left -60px
        background-image linear-gradient(to right,rgba(255,255,255,0) 0,#fff 100%)
      .toggle
        text-align center
        height 60px
        .icon
          display inline-block
          vertical-align super
          margin-top 15px
          width 30px
          height 30px
          background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png")
          transition: transform .5s;
          &.active
            transform: rotate(180deg);

  .moreCate
    position relative
    top -1px
    width 100%
    background-color #fff
    ul
      position absolute
      z-index 2
      padding-top   24px
      background-color #fff
      li
        display inline-block
        width 148px
        height 54px
        font-size 25px
        margin-left 30px
        margin-bottom 40px
        border-radius 5px
        border 1px solid #ccc
        background-color #FAFAFA
        text-align center
        line-height 54px
        float left
        &.active
          border: 1px solid #b4282d;
          color: #b4282d;
    .mask
      position fixed
      left 0
      bottom  0
      right 0
      top 0
      background-color rgba(0,0,0,.4)
</style>
