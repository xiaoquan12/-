<!-- 无数据组件 -->
<template>
  <div>
    <div class="nothingBox">
      <image src="../static/images/kongzhuangtai.png" mode="aspectFit" />
      <slot name="nothing"></slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    type: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {}
  },
  onLoad() {},
  onShow() {},
  methods: {}
}
</script>

<style lang="scss" scope>
</style>