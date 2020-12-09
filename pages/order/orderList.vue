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
				<view v-for="(item,index) in [1,2,3]" :key="index" class="item">
					<view class="order_info flexbetween">
						<view class="code">
							订单编号：202005081325283003
						</view>
						<view class="type">
							{{formatStatus(0)}}
						</view>
					</view>
					<GoodsShow navigateUrl="/pages/order/orderDetail"></GoodsShow>
					<view class="yfh_button flexend">
						<button type="default">查看物流</button>
						<button type="default">确认收货</button>
					</view>
				</view>
			</view>
			<view class="" v-if="isShowTabContent(1)">
				<view v-for="(item,index) in [1,2,3]" :key="index" class="item">
					<view class="order_info flexbetween">
						<view class="code">
							订单编号：202005081325283003
						</view>
						<view class="type">
							{{formatStatus(1)}}
						</view>
					</view>
					<GoodsShow navigateUrl="/pages/order/orderDetail"></GoodsShow>
					<view class="yfh_button flexend">
						<button type="default">取消订单</button>
						<button type="default">继续支付</button>
					</view>
				</view>
			</view>
			<view class="" v-if="isShowTabContent(2)">
				<view v-for="(item,index) in [1,2,3]" :key="index" class="item">
					<view class="order_info flexbetween">
						<view class="code">
							订单编号：202005081325283003
						</view>
						<view class="type">
							{{formatStatus(2)}}
						</view>
					</view>
					<GoodsShow navigateUrl="/pages/order/orderDetail"></GoodsShow>
					<view class="yfh_button flexend">
						<button type="default">查看物流</button>
						<button type="default">确认收货</button>
					</view>
				</view>
			</view>
			<view class="" v-if="isShowTabContent(3)">
				<view v-for="(item,index) in [1,2,3]" :key="index" class="item">
					<view class="order_info flexbetween">
						<view class="code">
							订单编号：202005081325283003
						</view>
						<view class="type">
							{{formatStatus(3)}}
						</view>
					</view>
					<GoodsShow navigateUrl="/pages/order/orderDetail"></GoodsShow>
					<view class="yfh_button flexend">
						<button type="default">查看物流</button>
						<button type="default">确认收货</button>
					</view>
				</view>
			</view>
			<view class="" v-if="isShowTabContent(4)">
				<view v-for="(item,index) in [1,2,3]" :key="index" class="item">
					<view class="order_info flexbetween">
						<view class="code">
							订单编号：202005081325283003
						</view>
						<view class="type">
							{{formatStatus(4)}}
						</view>
					</view>
					<GoodsShow navigateUrl="/pages/order/orderDetail"></GoodsShow>
					<view class="yfh_button flexend">
						<button type="default">删除订单</button>
						<button type="default" @click="afterSaleTap">申请售后</button>
						<button type="default">评价</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navIndex: 0
			};
		},
		computed: {
			// getSelectTabCss() {
			// 	return function(index) {

			// 		return this.navIndex == index ? "select" : ""

			// 	}
			// },
			isShowTabContent() {
				return function(index) {
					return this.navIndex == index
				}
			},
			formatStatus() {
				return function(status) {

					switch (status) {
						case 0:
							return "待发货"
							break;
						case 1:
							return "待付款"
							break;
						case 2:
							return "待发货"
							break;
						case 3:
							return "待收货"
							break;
						case 4:
							return "已完成"
							break;
						default:
							return ""
							break;
					}

				}
			}
		},
		onLoad(options) {

			this.navIndex = options.tabIndex || 0

		},
		methods:{
			afterSaleTap(){
				
				this.$common.redirect("/pages/afterSale/select_after_sale_type")
			}
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
		}
		
		button:not(:first-child){
			margin-left: 48rpx;
		}

		button:last-child {
			color: white;
			background-color: #2B2C3E !important;
			
		}
	}
</style>
