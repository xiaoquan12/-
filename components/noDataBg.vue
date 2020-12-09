<template>
	<view class="wrap">
		<image src="../static/images/kongzhuangtai.png" mode="aspectFill"></image>
		<text>{{text}}</text>
	</view>
</template>

<script>
	export default {
		props: {
			text: {
				type: String,
				default: "暂无数据~"
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.wrap {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		image {
			width: 468rpx;
			height: 500rpx;
		}
		
		text{
			margin-top: 32rpx;
			font-size: 32rpx;
			font-family: PingFangSC;
			color: #42454F;

		}
	}
</style>
