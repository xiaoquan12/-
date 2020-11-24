<template>
	<!--components/loadView/loadView.wxml-->
	<view class="bg" v-if="isShow"></view>
</template>

<script>
export default {
	data() {
		return {
			isShow:true
		};
	},
	methods:{

	}
};
</script>

<style lang="scss">
/* components/loadView/loadView.wxss */
.bg {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: #ffffff;
	z-index: 1000000;
}
</style>
