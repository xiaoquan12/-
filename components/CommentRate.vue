<!-- 评价星星组件 -->
<template>
  <div class="rate-list">
    <div class="rate-item" v-for="(item,index) in items" :key="index" @click="change(index)">
      <image src="/static/images/start-yes.png" v-if="item.active" />
      <image src="/static/images/start-no.png" v-else />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    num: {
      type: Number,
      default: 5
    },
    ratenum: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      rate: 0
    }
  },
  computed: {
    items() {
      var list = []
      this.rate = this.ratenum
      for (var i = 0; i < this.num; i++) {
        list.push({ id: i + 1, active: this.rate > i })
      }
      return list
    }
  },
  methods: {
    /**
     * 切换星级
     * @author 空心科技-王效玉
     * @date 2020-06-22
     * @param 星级索引 index
     * @returns 无
     */
    change(index) {
      if (index == 0) this.rate = this.rate == 1 ? 0 : 1
      else this.rate = index + 1
      this.$emit('change', this.rate)
    }
  }
}
</script>

<style lang="scss" scope>
.rate-list {
  .rate-item {
    margin-right: 8rpx;
    display: inline-block;
    image {
      width: 48rpx;
      height: 48rpx;
    }
  }
  .rate-item:last-child {
    margin-right: 0;
  }
}
</style>