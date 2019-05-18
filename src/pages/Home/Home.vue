<template>
  <div>
   <Header/><!--头部-->
    <Swiper ref="swiper"/> <!--轮播-->
    <Grow :policyDescList="policyDescList"/> <!--服务策略-->
    <homeNav :navList="navList"/><!--首页导航-->
  </div>

</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import Header from '../../components/Header/Header'
  import Swiper from './components/Swiper/Swiper'
  import Grow from './components/Grow/Grow'
  import homeNav from './components/homeNav/homeNav'
  export default {
    name: "Home",
    computed: {
      ...mapState({
        policyDescList:state => state.home.policyDescList,
        navList:state => state.home.navList
      })
    },
    components:{
      Header,
      Swiper,
      Grow,
      homeNav
    },
    mounted() {
      this.$nextTick(()=>{
        this.$refs.swiper._initSwiper()
        this.$store.dispatch('getHomeData')
      })

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
