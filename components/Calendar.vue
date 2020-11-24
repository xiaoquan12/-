<!-- 日历选择组件 -->
<template>
  <div class="w-calendar">
    <div class="w-calendar-tit">
      选择日期
      <i class="iconfont iconclose font26" @click="close"></i>
    </div>
    <v-calendar lunar :range="range" :value="currentVal" :begin="begin" :end="end" :events="events" :disabled="disabled" @select="selectDate" />
  </div>
</template>
<script>
import VCalendar from './mpvue-calendar/mpvue-calendar'

export default {
  components: {
    VCalendar
  },
  props: {
    value: {
      type: String,
      default: () => {
        return ''
      }
    },
    begin: {
      type: Array,
      default: () => {
        return []
      }
    },
    end: {
      type: Array,
      default: () => {
        return []
      }
    },
    disabled: {
      type: Array,
      default: () => {
        return []
      }
    },
    range: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    currentVal() {
      if (this.value) {
        var arr = this.value.split('-')
        return new Array(parseInt(arr[0]), parseInt(arr[1]), parseInt(arr[2]))
      }
      return []
    },
    events() {
      var events = {}
      if (this.disabled) {
        this.disabled.forEach(e => {
          var d = this.$common.formatDate(e, 'yyyy-M-d')
          events[d] = '已满'
        })
      }
      return events
    }
  },
  methods: {
    /**
     * 选择日期
     * @author 空心科技-王效玉
     * @date 2020-06-22
     * @returns 无
     */
    selectDate(val, val2) {
      if (this.range) {
        this.$emit('select', val, val2)
      } else {
        var date = val[0] + '-' + val[1] + '-' + val[2]
        this.$emit('select', date)
      }
    },
    /**
     * 关闭日期
     * @author 空心科技-王效玉
     * @date 2020-06-22
     * @returns 无
     */
    close() {
      this.$emit('close')
    }
  }
}
</script>
<style scoped>
.w-calendar {
  width: 100%;
}
.w-calendar-tit {
  height: 100rpx;
  line-height: 100rpx;
  font-size: 36rpx;
  text-align: center;
  background: #fff;
  position: relative;
  z-index: 9;
}
.w-calendar-tit .iconfont {
  position: absolute;
  right: 40rpx;
  width: 40rpx;
  display: inline-block;
}
</style>
