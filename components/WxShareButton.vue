<!-- 分享组件 -->
<template>
  <div>
    <!--  #ifdef MP-WEIXIN -->
    <button plain='true' class="button-layer" style="border:0;" open-type="share" @click="showShare" />
    <!--  #endif -->
    <!--  #ifdef H5 -->
    <button @click="share" class="button-layer" />
    <!--  #endif -->
  </div>
</template>

<script>
export default {
  methods: {
    /**
     * 分享
     * @author 空心科技-王效玉
     * @date 2020-06-22
     * @returns 无
     */
    showShare() {
      uni.showShareMenu({
        success: res => {
          this.$emit('success')
        }
      })
    },
    share() {
      alert('hi')
    }
  }
}
</script>

<style scoped>
.button-layer {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  background: rgba(250, 0, 0, 0);
}
button::after {
  border: none;
}
</style>