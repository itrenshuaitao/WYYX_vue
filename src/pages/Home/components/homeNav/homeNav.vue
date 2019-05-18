<template>
  <section class="homeNav">
    <ul>
      <li v-for="(nav,index) in navList" :key="index">
        <img :src="nav.picUrl" alt="">
        <span>{{nav.text}}</span>
      </li>
    </ul>

  </section>

</template>

<script type="text/ecmascript-6">
  export default {
    name: "homeNav",
    props:['navList']
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .homeNav
    height 341px
    padding-bottom 32px
    li
      width 110px
      height 156px
      margin 10px 20px
      margin-bottom 9px
</style>
