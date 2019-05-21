<template>
  <div>
    <ul>
      <li v-for="(item,index) in recommends">
        <div v-if="">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div v-if=""></div>
      </li>
    </ul>
  </div>

</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex';
  export default {
    name: "Recommend",
    computed: {
      ...mapState({
        recommends: state => state.General.recommends
      })

    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
