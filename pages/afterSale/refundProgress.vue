<!-- Refund progress
	退款进度
 -->
<template>
	<view>
		<view class="header p32 flex-column-center">
			<view class="status">
				退款成功
			</view>
			<view class="remark ">
				已到账
			</view>
			<view class="line" v-if="isShowRefundPrice"></view>

			<view class="" v-if="isShowRefundPrice">
				<view class="header_item flex flexbetween">
					<view>退款金额</view>
					<view class="price">
						￥119
					</view>
				</view>
				<view class="header_item flex flexbetween">
					<view>退款账户</view>
					<view class="returnAddress">
						原支付账户
					</view>
				</view>
			</view>
		</view>
		<view class="bgWhite p32 process_wrap">
			<view class="process">退款进度</view>
			<view class="">
				<view class="processMain flex-verCenter" :class='{marT20:index!=0,curr:index==0}' :key="index" v-for="(item, index) in logisticsList">
					<view class="time_wrap flex-column-center" :class="{curr:index==0}">
						<view class="date">
							中午
						</view>
						<view class="">
							12:00
						</view>
					</view>
					<view class="mainLeft timeLine marL40 marR50" :class='{colors:index!=0,curr:index==0}'></view>
					<view class="mainRight flex1 relative">
						<view class="tuiState" :class='{colorsText:index!=0,curr:index==0}'>{{ item.status }}</view>
						<view class="tuiDate" :class="{curr:index==0}">{{item.remark}}</view>
						<!-- <view class="tuiDate" :class="{curr:index==0}"> 2020-12-09 12:00:99</view> -->
					</view>
				</view>
			</view>
		</view>

		<view class="p32 bgWhite">
			<view class="process">退款信息</view>

			<view class="goods_wrap">
				<AfterSaleGoods :isShowSelectNum="false" :goods="{}"></AfterSaleGoods>
			</view>

			<view class="">
				<view class="header_item flex flexbetween">
					<view>退款原因</view>
					<view class="orderId">
						买错了
					</view>
				</view>
				<view class="header_item flex flexbetween">
					<view>订单号码</view>
					<view class="orderId">
						订单编号：202005081325283003
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import AfterSaleGoods from '../../components/afterSaleGoods.vue'
	export default {

		components: {
			AfterSaleGoods
		},
		data() {
			return {
				logisticsList: [{
					time: "",
					status: "退款已到账",
					remark: "微信已在2020年7月3日中午11；23前190元入账至您的支付用户零钱"
				}, {
					time: "",
					status: "审核通过",
					remark: "您的退款已被受理"
				}, {
					time: "",
					status: "退款申请已提交",
					remark: "退款原因：买错了"
				}],
				isShowRefundPrice:true
			};
		}
	}
</script>

<style lang="scss">
	page {
		background-color: $uni-bg-color-grey;
	}

	.header {
		border-bottom: 10rpx solid #EEEEEE;
		background-color: white;
	}

	.status {

		font-size: 40rpx;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: $uni-text-color;
	}

	.remark {
		margin-top: 16rpx;
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;

	}

	.line {
		height: 2rpx;
		width: 100%;
		background-color: #EEEEEE;
		margin: 32rpx 0;
	}

	.header_item {

		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #666666;

	}

	.header_item:nth-child(2) {
		margin-top: 16rpx;
	}

	.price {

		font-size: 32rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: $uni-text-color;
	}

	.returnAddress {
		font-size: 32rpx;
		color: #333333;
	}




	.processMain {
		width: 100%;
		height: 90rpx;
		margin-top: 32rpx;
		margin-bottom: 80rpx;
		box-sizing: border-box;

		position: relative;
	}

	.process {
		font-size: 32rpx;
		font-weight: 600;
		color: rgba(51, 51, 51, 1);

	}

	.marT20 {
		margin-top: 0rpx;
		// background:#c1c1c1;
	}

	.colors {
		// background: #c1c1c1;
		// z-index: 1;
	}




	.colorsText {
		color: #c1c1c1;

	}

	.tuiDate {
		margin-top: 16rpx;
		font-size: 24rpx;
		color: #999999;
	}

	.tuiState {

		font-size: 28rpx;
	}

	.mainRight {
		// width: 100%;

	}

	.curr {
		color: #2B2C3E !important;

		.tuiState {
			font-weight: 600;
			font-size: 32rpx;
		}
	}

	.mainLeft {
		// width: 18rpx;
		height: 100%;
		display: flex;
		position: relative;

	}

	.mainLeft:before {
		content: " ";
		display: block;
		position: absolute;
		width: 18rpx;
		height: 18rpx;
		background-color: #EEEEEE;
		border-radius: 50%;
		left: 0rpx;
		top: 36rpx;

	}

	.mainLeft::after {
		content: "";
		display: block;
		position: absolute;
		width: 2rpx;
		height: calc(90rpx + 80rpx);
		background-color: #EEEEEE;
		left: 9rpx;
		top: 54rpx;
	}


	.processMain:last-child .mainLeft::after {
		display: none;
		content: "";
	}


	.processMain:first-child .mainLeft::before {
		background-color: #2B2C3E !important;
	}


	.marR50 {
		margin-right: 50rpx;
	}

	.time_wrap {
		// margin-left: 32rpx;
		font-size: 22rpx;
		color: #999999;

		view {
			text-align: center;
		}
	}

	.bgWhite {
		background-color: white;
	}

	.process_wrap {
		border: 1rpx solid #EEEEEE;
	}

	.goods_wrap {
		margin: 24rpx 0 32rpx;
	}

	.orderId {

		color: #333333;
		font-size: 28rpx;
	}
</style>
