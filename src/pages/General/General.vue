<template>
  <div class="wrap">
    <HeaderSlot>
      <div class="title" slot="Headertitle">
        <span :class="{active:!active}" @click="active = !active">发现</span>
        <span :class="{active:active}" @click="active = !active">甄选家</span>
      </div>
    </HeaderSlot>
    <div class="nav-left">
      <ul>
        <li v-for="(nav,index) in payload" :key="index" :class="{active:curA===index}" @click="goroute(index)">

          {{nav.tabName}}
        </li>
      </ul>
    </div>
    <router-view/>
  </div>

</template>

<script type="text/ecmascript-6">
  import {mapState} from "vuex"
  import BScroll from 'better-scroll'
  import HeaderSlot from "../../components/HeaderSlot/HeaderSlot";
  export default {
    name: "General",
    data(){
      return {
        curA:0,
        active :'',
        routes:['/general/recommend','/general/goodstuff','/general/rep','/general/bask','/general/developer','/general/intelligent','/general/update','/general/home']
      }
    },
    methods:{
      goroute(index){
        this.curA = index
      this.$router.replace(this.routes[index])
      }
    },
    computed:{
      ...mapState({
        payload:state =>state.General.payload
      })
    },
    mounted () {
      // 识物页面初始显示时即请求数据,为路由组件使用数据做准备
      this.$store.dispatch('getRecommendTabs');
      this.$store.dispatch('getRecommends');

        this.$nextTick(()=>{
          if (this.payload) {
            this.scroll = new BScroll('.nav-left',{
              scrollX:true,
              click:true

            })
          }
        })

    },
    components: {HeaderSlot}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wrap
    background-color #f4f4f4
    height 100%
    .title
      position absolute
      left 50%
      transform translateX(-50%)
      font-size: 28px;
      line-height 100px
      color: #7F7F7F
      display inline-block
      span
        padding 0 16px
        &.active
          font-size: 40px;
          color: #b4282d;
          font-weight: bold

    .nav-left
      width 100%
      height 72px
      overflow hidden
      .showText
        display inline-block
        vertical-align top
        margin-left 30px
        height 72px
        line-height 72px
        font-size 28px
      ul
        background-color #fff
        border-top 1px  solid #d9d9d9
        border-bottom  1px  solid #d9d9d9
        height 72px
        display flex
        width 1100px
        padding  0 30px
        li
          display flex
          font-size 28px
          line-height 72px
          height 72px
          padding  0 23px
          color #7F7F7F
          justify-content center
          &.active
            box-sizing border-box
            color #b4282d
            border-bottom 3px solid #b4282d
</style>
