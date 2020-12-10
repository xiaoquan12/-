<!-- 优惠券 -->
<template>
	<view class="item" @click="" :class="{usedOrOver:isUsed|| isOverTime}">

		<view class="top  flexbetween">
			<view class="name">
				{{coupon.name}}
			</view>
			<view class="price">
				<text class="price_unit">
					￥
				</text>
				{{coupon.amount}}
			</view>
		</view>
		<view class="bottom flexbetween">
			<view class="time">
				{{formatterTime(coupon.startTime)}}至{{formatterTime(coupon.endTime)}}
			</view>
			<view class="remark">

				{{coupon.remark}}
			</view>
		</view>


		<image src="../../static/images/ygq.jpg" mode="aspectFill" class="flag" v-if="isOverTime"></image>
		<image src="../../static/images/ysy.jpg" mode="aspectFill" class="flag" v-if="isUsed"></image>
	</view>

</template>

<script>
	export default {
		name: "",
		props: {
			coupon: {
				type: Object,
				default: {
					name: "全场通用",
					startTime: 1606201118735,
					endTime: 1606201118735,
					amount: 120,
					remark: "无门槛",
					status: 3
				}
			}
		},
		data() {
			return {
				selectkey: "",


			}
		},
		onLoad() {

		},
		mounted() {

		},
		computed: {
			formatterTime() {
				return function(time) {

					return this.$common.formatDate(time, 'yyyy-M-d')
				}
			},
			isUsed() {
				return this.coupon.status == 2
			},
			isOverTime() {
				return this.coupon.status == 3
			}

		},
		methods: {


			clickItem(index) {
				this.selectkey = index;
			}
		}
	}
</script>

<style scoped lang="scss">
	.select {
		border: 2rpx solid rgba(255, 127, 127, 0.5);
	}

	.select::after {
		content: " ";
		position: absolute;
		top: 0;
		right: 0;
		width: 0;
		height: 0;
		border-left: 35rpx solid transparent;
		border-top: 35rpx solid $uni-text-color;
	}




	.item {
		height: 190rpx;
		background-color: white;
		border-radius: 8rpx;
		margin: 32rpx;
		padding: 32rpx;
		box-sizing: border-box;
		position: relative;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.flag {
		width: 168rpx;
		height: 168rpx;
		position: absolute;
		right: 180rpx;
	}


	.top {
		margin-bottom: 16rpx;
	}

	.name {
		font-size: 32rpx;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: #333333;
		line-height: 44rpx;
	}


	.price_unit {
		padding-right: 4rpx;
	}

	.price {
		display: flex;
		font-size: 40rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: $uni-text-color;
		line-height: 56rpx;

	}

	.time {

		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #666666;
		line-height: 34rpx;
	}

	.remark {

		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: $uni-text-color;
		line-height: 40rpx;
	}

	.usedOrOver {

		.name,
		.price,
		.remark,
		.time {
			color: #BBBBBB !important;
		}

	}
</style>
