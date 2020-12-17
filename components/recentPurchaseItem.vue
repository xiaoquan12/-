<!-- 最近购买项组件 -->
<template>
	<view class="item flex">
		<view class="flex alic">
			<image class="photo" mode="aspectFill" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606227337468&di=dd6fb5de0f05a0e111c69e2ca2afea99&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg"></image>
			<view class="name">
				宣*韵
			</view>
		</view>
		<view class="num">
			1瓶
		</view>
		<view class="price">
			¥188
		</view>
		<view class="time">
			2020年06月27日
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 24rpx 0;
		width: 100%;
		box-sizing: border-box;

		.photo {
			width: 32rpx;
			height: 32rpx;
			border-radius: 50%;
		}

		.name {
			padding-left: 16rpx;
			font-size: 22rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #333333;

		}

		.num {
			font-size: 22rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #333333;

		}

		.price {
			font-size: 22rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #333333;

		}

		.time {

			font-size: 22rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #999999;
			width: 35%;
			text-align: right;
		}
	}
</style>
