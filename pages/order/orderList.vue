<template>
	<view>
		<view class="nav">
			<view :class="{'select':isShowTabContent(0)}" @tap="navIndex=0">
				全部
			</view>
			<view :class="{'select':isShowTabContent(1)}" @tap="navIndex=1">
				待付款
			</view>
			<view :class="{'select':isShowTabContent(2)}" @tap="navIndex=2">
				待发货
			</view>
			<view :class="{'select':isShowTabContent(3)}" @tap="navIndex=3">
				待收货
			</view>
			<view :class="{'select':isShowTabContent(4)}" @tap="navIndex=4">
				已完成
			</view>
		</view>

		<view class="list">
			<view class="" v-if="isShowTabContent(0)">

				<view v-for="(item,index) in allOrderList" :key="index">
					<OrderItem :order="item"></OrderItem>
				</view>

			</view>
			<view class="" v-if="isShowTabContent(1)">

				<view v-for="(item,index) in [1,2,3]" :key="index">
					<OrderItem :order="{status:1}"></OrderItem>
				</view>
			</view>
			<view class="" v-if="isShowTabContent(2)">

				<view v-for="(item,index) in [1,2,3]" :key="index">
					<OrderItem :order="{status:2}"></OrderItem>
				</view>
			</view>
			<view class="" v-if="isShowTabContent(3)">

				<view v-for="(item,index) in [1,2,3]" :key="index">
					<OrderItem :order="{status:3}"></OrderItem>
				</view>
			</view>
			<view class="" v-if="isShowTabContent(4)">

				<view v-for="(item,index) in [1,2,3]" :key="index">
					<OrderItem :order="{status:4}"></OrderItem>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import OrderItem from '../../components/orderListItem.vue'
	export default {
		components: {
			OrderItem
		},
		data() {
			return {
				navIndex: 0,
				allOrderList: [{
					status: 1
				}, {
					status: 2
				}, {
					status: 4
				}, {
					status: 4
				}, {
					status: 3
				}]
			};
		},
		computed: {

			isShowTabContent() {
				return function(index) {
					return this.navIndex == index
				}
			},

		},
		onLoad(options) {

			this.navIndex = options.tabIndex || 0

		},
		methods: {

		}

	}
</script>

<style scoped lang="scss">
	.nav {
		position: fixed;
		top: var(--window-top);
		left: 0;
		right: 0;
		display: flex;
		border-bottom: 2rpx solid #F5F5F5;
		background: white;
		z-index: 1;

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

	.select:after {
		content: " ";
		position: absolute;
		height: 4rpx;
		background: #000000;
		bottom: 0;
		left: 42%;
		right: 42%;
	}

	.list {
		margin-top: 75rpx;
		
		
	}
	
	.list>view>view{
		// border-bottom: 1rpx solid #EEEEEE;
		background-color: white;
	}


	.item {
		padding-top: 32rpx;
	}

	.order_info {
		padding: 0 32rpx;

		.code {

			font-size: 24rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #666666;

		}

		.type {

			font-size: 24rpx;

			font-weight: 400;
			color: $uni-text-color;



		}
	}


	button:after {
		border-radius: 0 !important;
		padding: 0;
		margin: 0;
	}


	.yfh_button {
		display: flex;
		justify-content: flex-end;
		padding: 24rpx 32rpx;



		button {
			padding: 16rpx 32rpx;
			margin: 0;
			font-size: 28rpx;
			line-height: 32rpx;
			border-radius: 0 !important;
			width: 176rpx;
		}

		button:not(:first-child) {
			margin-left: 48rpx;
		}

		button:last-child {
			color: white;
			background-color: #2B2C3E !important;

		}
	}
</style>
