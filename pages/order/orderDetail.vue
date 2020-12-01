<template>
	<view class="detail ">
		<view class="status_wrap flex-column-center">
			<view class="status">
				待收货
			</view>
			<view class="status_desc">
				货物已发出，请注意收货
			</view>
		</view>
		<view class="address_wrap borderBottom">
			<view class="info flexbetween">
				<view class="">
					收件人：胡哈哈
				</view>
				<view class="">
					18722***101
				</view>
			</view>
			<view class="address">
				天津-天津市-东丽区-华明家园**********
			</view>
		</view>
		<view class="goods_wrap borderBottom">
			<GoodsShow :isShowBottomBorder="false"></GoodsShow>
		</view>
		<view class="price_wrap borderBottom">
			<view class="item flexbetween">
				<view class="">
					商品价格
				</view>
				<view class="">
					1000积分
				</view>
			</view>
			<view class="item flexbetween">
				<view class="">
					运费
				</view>
				<view class="">
					包邮
				</view>
			</view>
			<view class="item flexbetween">
				<view class="">
					优惠
				</view>
				<view class="">
					暂无优惠
				</view>
			</view>
			<view class="item flexbetween total">
				<view class="">
					合计
				</view>
				<view class="">
					1000积分
				</view>
			</view>
		</view>
		<view class="order_info">
			<view class="flexbetween">
				<view class="">
					订单编号：202005081325283003
				</view>
				<view class="copy" @tap="copyOrder">
					复制
				</view>
			</view>
			<view class="createTime">
				创建时间：2020-07-01 16:25:56
			</view>
		</view>
		<view class="yfh_button flexend">

			<button type="default" v-if="orderStatus==orderClose || orderStatus==orderSuccess">删除订单</button>
			<button type="default" v-if="orderStatus==orderPay">取消订单</button>
			<button type="default" v-if="orderStatus==orderPay" class="bgDark">继续支付</button>
			<button type="default" v-if="orderStatus==orderSuccess">申请售后</button>
			<button type="default" v-if="orderStatus==orderSuccess" class="bgDark">评价</button>
			
			<button type="default"  v-if="orderStatus==orderToBeReceived">查看物流</button>
			<button type="default" class="bgDark" v-if="orderStatus==orderToBeReceived">确认收货</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderClose: -1, //订单关闭
				orderPay: 0, //代付款
				orderSuccess: 1, //交易成功
				orderToBeDelivered:2 ,//待发货
				orderToBeReceived:3, //待收货
				order: {

					status: 3,

				}

			}
		},
		computed: {
			orderStatus() {
				// -1 订单关闭
				// 0 代付款
				// 1 交易成功
				//  2 代发货
				// 3 代收货

				return this.order.status
			}
		},
		methods: {
			copyOrder() {

			}
		}
	}
</script>

<style scoped lang="scss">
	.status_wrap {

		background: #2B2C3E;
		padding: 48rpx 32rpx;

		.status {

			font-size: 40rpx;
			font-weight: 600;
			color: #FFFFFF;

		}

		.status_desc {

			font-size: 28rpx;
			font-weight: 400;
			color: #FFFFFF;
			padding-top: 8rpx;

		}
	}

	.address_wrap {
		padding: 34rpx 32rpx;

		.info {

			font-size: 32rpx;
			font-weight: 600;
			color: #333333;

		}

		.address {

			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #666666;
			padding-top: 16rpx;

		}
	}

	// .goods_wrap {

	// 	// background: #F6F6F6;
	// 	border: 10rpx solid #F6F6F6;
	// 	border-width: 10rpx 0;
	// }

	.borderBottom {
		border-bottom: 10rpx solid #F6F6F6;
	}

	.price_wrap {
		padding: 32rpx;


		// .item:not(nth-child(1)){
		// 	padding-top: 8rpx;
		// }

		// .item:not(:first-child){
		// 	padding-top: 16rpx;
		// }

		.item {
			padding: 16rpx 0;
		}

		.item>view:nth-child(1) {

			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #333333;
		}

		.item>view:nth-child(2) {
			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #999999;
		}

		.item:nth-child(3) {
			padding-bottom: 24rpx;
			border-bottom: 1rpx solid #EEEEEE;
		}

		.total>view:nth-child(2) {

			font-size: 40rpx;
			font-family: PingFangSC;
			color: $uni-text-color;

		}






	}

	.order_info {
		padding: 32rpx;
		font-size: 28rpx;
		color: #666666;
		padding-bottom: 74rpx;
		border-bottom: 1rpx solid #EEEEEE;

		.createTime {
			padding-top: 24rpx;
		}

		.copy {
			cursor: pointer;
			color: #000000;
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
			margin-left: 48rpx;
		}

		.bgDark {
			color: white;
			background-color: #2B2C3E !important;

		}
	}
</style>
