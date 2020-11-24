<!-- 优惠券 -->
<template>
	<view class="coupon">
		<view v-for="(item,index) in list" :key="index" class="item" :class="{select:selectkey==index}" @click="clickItem(index)">

			<view class="top  flexbetween">
				<view class="name">
					{{item.name}}
				</view>
				<view class="price">
					<text class="price_unit">
						￥
					</text>
					{{item.amount}}
				</view>
			</view>
			<view class="bottom flexbetween">
				<view class="time">
					{{formatterTime(item.startTime)}}至{{formatterTime(item.endTime)}}
				</view>
				<view class="remark">
					
					{{item.remark}}
				</view>
			</view>
		</view>

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
				selectkey: "",
				list: [{
					name: "全场通用",
					startTime: 1606201118735,
					endTime: 1606201118735,
					amount: 120,
					remark: "无门槛"
				}, {
					name: "全场通用",
					startTime: 1606201118735,
					endTime: 1606201118735,
					amount: 100,
					remark: "满500可用"
				}, {
					name: "全场通用",
					startTime: 1606201118735,
					endTime: 1606201118735,
					amount: 200,
					remark: "代200"
				}, {
					name: "全场通用",
					startTime: 1606201118735,
					endTime: 1606201118735,
					amount: 300,
					remark: "满500可用"
				}]
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
			}

		},
		methods: {

			async getCouponList() {

				try {
					let data = await this.$api.post()
				} catch (e) {
					//TODO handle the exception
				}
			},
			clickItem(index) {
				this.selectkey = index;
			}
		}
	}
</script>

<style scoped>
	page {
		background: #F6F6F6;
	}

	.coupon .item {
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
		color: #FF7F7F;
		line-height: 56rpx;

	}

	.time {

		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #666666;
		line-height: 34rpx;
	}
	
	.remark{
		
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FF7F7F;
		line-height: 40rpx;
		

	}


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
		border-top: 35rpx solid #FF7F7F;
	}
</style>
