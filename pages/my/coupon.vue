<!-- 优惠券 -->
<template>
	<view class="">

		<view class="nav">
			<view :class="{'select':isShowTabContent(0)}" @tap="navIndex=0">
				全部
			</view>
			<view :class="{'select':isShowTabContent(1)}" @tap="navIndex=1">
				未使用
			</view>
			<view :class="{'select':isShowTabContent(2)}" @tap="navIndex=2">
				已使用
			</view>
			<view :class="{'select':isShowTabContent(3)}" @tap="navIndex=3">
				已过期
			</view>
		</view>

		<view class="coupon list">
			<view v-for="(item,index) in list" :key="index" v-if="isShowTabContent(0)">
				<CouponItem :coupon="item"></CouponItem>
			</view>

			<view v-for="(item,index) in list" :key="index" v-if="isShowTabContent(1)">
				<CouponItem :coupon="item"></CouponItem>
			</view>

			<view v-for="(item,index) in list" :key="index" v-if="isShowTabContent(2)">
				<CouponItem :coupon="item"></CouponItem>
			</view>
			<view v-for="(item,index) in list" :key="index" v-if="isShowTabContent(3)">
				<CouponItem :coupon="item"></CouponItem>
			</view>
		</view>

	</view>

</template>

<script>
	import CouponItem from './couponItem.vue'
	export default {
		name: "",
		props: {

		},
		components: {
			CouponItem
		},
		data() {
			return {
				selectkey: "",
				list: [{
					name: "全场通用",
					startTime: 1606201118735,
					endTime: 1606201118735,
					amount: 120,
					remark: "无门槛",
					status: 1
				}, {
					name: "全场通用",
					startTime: 1606201118735,
					endTime: 1606201118735,
					amount: 100,
					remark: "满500可用",
					status: 2
				}, {
					name: "全场通用",
					startTime: 1606201118735,
					endTime: 1606201118735,
					amount: 200,
					remark: "代200",
					status: 3
				}, {
					name: "全场通用",
					startTime: 1606201118735,
					endTime: 1606201118735,
					amount: 300,
					remark: "满500可用",
					status: 3
				}],
				navIndex: 0,
				allOrderList: [{
					status: 1
				}, {
					status: 2
				}, {
					status: 4
				}, {
					status: 4
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
			},
			isShowTabContent() {
				return function(index) {
					return this.navIndex == index
				}
			},

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

<style scoped lang="scss">
	page {
		background-color: $uni-bg-color-grey;
	}


	.nav {
		position: fixed;
		top: var(--window-top);
		left: 0;
		right: 0;
		display: flex;
		border-bottom: 2rpx solid #F5F5F5;
		background: white;
		z-index: 1;

		.select:after {
			content: " ";
			position: absolute;
			height: 4rpx;
			background: #000000;
			bottom: 0;
			left: 42%;
			right: 42%;
		}

	}

	.nav>view {
		flex: 1;
		text-align: center;
		padding: 18rpx 0;
		font-size: 28rpx;
		font-weight: 500;
		color: #000000;
		cursor: pointer;
		background-color: #FFFFFF;
		position: relative;

	}



	.list {
		margin-top: 105rpx;

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
</style>
