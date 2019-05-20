<template>

    <div>
      <Header/><!--头部-->

      <div class="homeCenter">
        <Swiper ref="swiper"/> <!--轮播-->
        <homeNav :navList="navList"/>
        <Grow :policyDescList="policyDescList"/> <!--服务策略-->
        <data_reactid/><!--图片-->
        <sceneLightShoppingGuideModule :sceneLightShoppingGuideModule="sceneLightShoppingGuideModule"/><!--购物导航榜单-->
        <order :personalShop="personalShop" ref="swiper2"/><!--私人定制-->
        <flashSaleModule :flashSaleModule="flashSaleModule"/><!--限时购-->
        <newItemList :newItemList="newItemList"/><!--新品首发-->
        <popularItemList :popularItemList="popularItemList"/><!--人气推荐-->
        <hotSell/><!--类目热销榜-->
        <m_indexActivityModule/>
        <Supply/><!--品牌制造商直供-->
        <TopicList ref="swiper3" :topicList="topicList"/><!--专题精选-->
        <zhongChouList/><!--众筹-->
        <categoryModule ref="swiper4" :categoryModule="categoryModule"/>
        <Ftwrap/><!--首页底部-->

      </div>

    </div>



</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import Header from '../../components/Header/Header'
  import Swiper from './components/Swiper/Swiper'
  import Grow from './components/Grow/Grow'
  import homeNav from './components/homeNav/homeNav'
  import data_reactid from './components/data-reactid/data-reactid'
  import sceneLightShoppingGuideModule from './components/sceneLightShoppingGuideModule/sceneLightShoppingGuideModule'
  import order from './components/order/order'
  import flashSaleModule from './components/flashSaleModule/flashSaleModule'
  import newItemList from './components/newItemList/newItemList'
  import popularItemList from './components/popularItemList/popularItemList'
  import hotSell from './components/hotSell/hotSell'
  import m_indexActivityModule from './components/m-indexActivityModule/m-indexActivityModule'
  import Supply from './components/supply/supply'
  import TopicList from './components/topicList/topicList'
  import zhongChouList from './components/zhongChouList/zhongChouList'
  import categoryModule from './components/m-categoryModule/m-categoryModule'
  import Ftwrap from './components/ftwrap/ftwrap'

  export default {
    name: "Home",
    computed: {
      ...mapState({
        policyDescList:state => state.home.policyDescList,
        navList:state => state.home.navList,
        sceneLightShoppingGuideModule:state => state.home.sceneLightShoppingGuideModule,
        personalShop:state => state.home.personalShop,
        flashSaleModule:state => state.home.flashSaleModule,
        newItemList:state => state.home.newItemList,
        popularItemList:state => state.home.popularItemList,
        topicList:state => state.home.topicList,
        categoryModule:state => state.home.categoryModule,

      })
    },
    components:{
      Header,
      Swiper,
      Grow,
      homeNav,
      data_reactid,
      sceneLightShoppingGuideModule,
      order,
      flashSaleModule,
      newItemList,
      popularItemList,
      hotSell,
      m_indexActivityModule,
      Supply,
      TopicList,
      zhongChouList,
      categoryModule,
      Ftwrap
    },
    mounted() {
      this.$nextTick(()=>{
        this.$refs.swiper._initSwiper()
        this.$refs.swiper2._initSwiper2()
        this.$refs.swiper3._initSwiper3()
        this.$refs.swiper4._initSwiper4()

        this.$store.dispatch('getHomeData')
      })

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .homeCenter
    margin-bottom 100px
    background #eee
</style>
