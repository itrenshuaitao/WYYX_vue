<template>
  <div class="categoryList-container">
    <div class="m-topSearchIpt">
      <i class="icon"></i>
      <span class="placeholder">搜索商品, 共22845款好物</span>
    </div>
    <section class="categoryList-main">
      <div class="line"></div>
      <div class="categoryList-left">
        <ul>
          <li :class="{active: currentId * 1 === category.id}" v-for="(category, index) in categoryList" :key="index">
            <router-link :to="{path: 'category', query: {id: category.id}}">{{category.name}}</router-link>
          </li>
        </ul>
      </div>
      <router-view />
    </section>
  </div>
</template>
<script>
  import {mapState} from 'vuex';
  import BScroll from 'better-scroll';
  export default {
    data () {
      return {
        isActive: true,
        currentId: ''
      }
    },
    computed: {
      ...mapState({
        categoryList: state => state.categoryList.categoryList
      })
    },
    mounted () {
      this.$store.dispatch('getCategoryList');
      this.currentId = this.$route.query.id ? this.$route.query.id : '1022001';
    },
    watch: {
      $route () {
        this.currentId = this.$route.query.id;
      },
      categoryList () {
        this.$nextTick(() => {
          /* eslint-disable no-new */
          new BScroll('.categoryList-left', {
            click: true
          })
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl";
  *
    margin 0
    padding 0
    color #333
    list-style none
    text-decoration none
  .categoryList-container
    height 100%
    .m-topSearchIpt
      width 92%
      box-sizing padding-box
      overflow hidden
      position fixed
      top 0
      z-index 30
      display flex
      align-items center
      justify-content center
      height 56px
      background-color #ededed
      border-radius 10px
      margin  15px 30px
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
    .line
      width 100%
      height 2px
      background-color #eee
    .categoryList-main
        transform translateY(100px)
        top-border-1px(#ccc)
        overflow hidden
        width 100%
        height: 1048px;
      .categoryList-left
        position absolute
        top 0
        left 0
        height 100%
        padding 20px 0
        ul
          width 162px
          display flex
          flex-direction column
          li
            width 160px
            height 50px
            line-height 50px
            text-align center
            font-size 28px
            margin 15px 0
            border-left 6px solid #fff
            &.active
              border-left 6px solid red
              a
                color red
</style>
