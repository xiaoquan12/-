 <!--商品提问-->
<template>
  
</template>
<script>
export default {
  components: {
	},
  data() {
    return {
		valueInput:""
	}
  },
  methods:{
	  ask(){
		  this.$ui.showToast("提问成功");
		  uni.navigateBack();
	  }
  }
}
</script>
<style lang="scss" scoped>
</style>