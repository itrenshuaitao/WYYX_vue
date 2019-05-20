<template>
  <div class="wrap">
    <navHeader>
      <div slot="left">限时购</div>
      <div slot="time"><div class="time-down">
        <span ref="timeHour">{{hour < 10 ? '0' + hour : hour}}</span>
        <span>:</span>
        <span ref="timeMinute">{{minute < 10 ? '0' + minute : minute}}</span>
        <span>:</span>
        <span ref="timeSecond">{{second < 10 ? '0' + second : second}}</span>
      </div></div>
      <div slot="right">
        <span>更多</span>
        <i></i>
      </div>
    </navHeader>
    <div class="cnt">
      <div v-for="item in flashSaleModule" :key="item.itemId">
        <img :src="item.picUrl" alt="">
        <span class="activityPrice">¥{{item.activityPrice}}</span>
        <span class="originPrice">{{item.originPrice}}</span>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    name: "flashSaleModule",
    props:['flashSaleModule'],
    data () {
      return {
        hour: 2,
        minute: 59,
        second: 59
      }
    },
    mounted () {
      this._timeDown();
    },
    methods: {
      _timeDown () {
        const intervalId = setInterval(() => {
          // 当秒数减至小于0时，重新置为59 同时分钟数减1
          if (this.second > 0) {
            // 秒数大于0时，秒数减1
            this.second--;
          } else {
            // 秒数小于0或者等于0时
            if (this.minute) {
              // 如果分钟数有值，则重置秒数，同时分钟数减1
              this.second = 59;
              this.minute--;
              // 如果小时数为0 则当分钟数减至0时，直接设为0
              if (this.minute <= 0 && this.hour === 0) {
                this.minute = 0;
              }
            } else if (this.hour) {
              // 如果分钟数为0而小时数不为0  即 x:0:xx 则秒数和分钟数均置为初始值 同时小时数减1
              this.second = 59;
              this.minute = 59;
              this.hour--;
              if (this.hour <= 0) {
                // 小时数减至0时，直接设为0
                this.hour = 0;
              }
            }
          }

          if (!this.hour && !this.minute && !this.second) {
            // 秒数/分钟数/小时数全都不大于0时，停止计时器
            clearInterval(intervalId);
          }
          // 当分钟数减至小于0时，重置为59 同时小时数减1
        }, 1000);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wrap
    background-color #fff
    margin-bottom 20px
    .cnt
      width 710px
      height 599px
      padding 0 10px 0 30px
      div
        float left
        width 216px
        height 269px
        margin-right 20px
        padding-bottom 30px
        text-align center
        overflow hidden
        font-size 0
        img
          width 216px
          height 216px
          background-color #f5f5f5
          margin-bottom 12px
          border-radius 4px
        .activityPrice
          font-size .37333rem
          color #b4282d
          margin-right .16rem
        .originPrice
          font-size: .32rem;
          color: #7F7F7F;
          text-decoration: line-through;
</style>
