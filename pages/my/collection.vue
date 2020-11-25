<template>
	<view class="">
		<view class="tip flex">
			<image src="" mode="aspectFill"></image>
			价格由市场供需决定，存在起伏，请理性消费
		</view>
	</view>
</template>

<script>
	export default {
		name: "",
		props: {

		},
		data() {
			return {

			}
		},
		onLoad() {

		},
		mounted() {

		},
		computed: {

		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.tip {
		height: 68rpx;
		background: #F5F5F5;
		padding: 16rpx 32rpx;
		box-sizing: border-box;


		font-size: 22rpx;
		font-family: PingFangSC;
		color: #666666;
		line-height: 36rpx;

		image {
			height: 21.8rpx;
			width: 21.8rpx;
			padding-right: 8rpx;
		}
	}
</style>
