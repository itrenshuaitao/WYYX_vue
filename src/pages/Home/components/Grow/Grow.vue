<template>
  <div class="grow">
    <ul v-if="policyDescList">
      <li v-for="(item,index) in policyDescList" :key="index">
        <img :src="item.icon" alt="">
        <span>{{item.desc}}</span>
      </li>
    </ul>
  </div>

</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    name: "Grow",
    props:['policyDescList'],
    mounted() {
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .grow
    font-size 24px
    width 690px
    height 72px
    margin 0 30px
    display flex
    align-items center
    ul
      display flex
      zoom 1
      align-items baseline
      li
        width 227px
        height 36px
        flex 1
        display flex
        vertical-align bottom
        img
          width 32px
          height 32px
          margin-right 10px
        span
          color: #B4282D;
          line-height 30px

</style>
