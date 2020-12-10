<template>
	<view class="item">
		<view class="order_info flexbetween">
			<view class="code">
				订单编号：202005081325283003
			</view>
			<view class="type">
				{{formatStatus()}}
			</view>
		</view>

		<GoodsShow navigateUrl="/pages/order/orderDetail"></GoodsShow>

		<!-- <view class="yfh_button flexend">

			<button type="default" v-if="dfk">取消订单</button>
			<button type="default" v-if="dfk">继续支付</button>

			<button type="default" v-if="dfh || dsh">查看物流</button>
			<button type="default" v-if="dfh || dsh">确认收货</button>


			<button type="default" v-if="ywc">删除订单</button>
			<button type="default" @click="afterSaleTap" v-if="ywc">申请售后</button>
			<button type="default" v-if="ywc">评价</button>
		</view> -->
	</view>
</template>

<script>
	export default {

		props: {
			order: {
				type: Object,
				default: {
					status: 1
				}
			}
		},

		data() {
			return {

			};
		},
		computed: {



			// // 代付款
			// dfk() {
			// 	return this.order.status === 1;
			// },
			// // 待发货
			// dfh() {
			// 	return this.order.status == 2
			// },
			// // 待收货
			// dsh() {
			// 	return this.order.status == 3
			// },
			// // 完成
			// ywc() {
			// 	return this.order.status == 4
			// },

			formatStatus() {
				return function() {

					let status = this.order.status;
					
					switch (status) {
						case 1:
							return "待审核"
							break;
						case 2:
							return "已驳回"
							break;
						case 3:
							return "处理中"
							break;
						case 4:
							return "已退款"
							break;
						default:
							return ""
							break;
					}

				}
			}
		},
		methods: {
			afterSaleTap() {

				this.$common.redirect("/pages/afterSale/select_after_sale_type")
			}
		}
	}
</script>

<style lang="scss">
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
