<!-- 支付中心 -->
<template>
	<view>
		<view class="p32 bb10  bgWhite">
			<view class=" flex alic">
				<view class="title">
					订单编号：
				</view>
				<view class="order">
					2028180007778999
				</view>
			</view>
			<view class="flex alic" style="padding-top: 24rpx;">
				<view class="title">
					付款总额：
				</view>
				<view class="price">
					¥188
				</view>
			</view>
		</view>
		<view class="p32 bgWhite">
			<view class="payType">
				再次选择支付方式，重新支付：
			</view>

			<view class="flex-column-center types">
				<radio-group name="" class="flex-column-center">
					<label>
						<view class="">
							<image src="../../static/images/my_jfdd.png" mode="aspectFill"></image>
							<text>微信支付</text>
						</view>
						<radio value="weixin" />
					</label>
					<label>
						<view class="">
							<image src="../../static/images/my_jfdd.png" mode="aspectFill"></image>
							<text>支付宝支付</text>
						</view>
						<radio value="zhifubao" />
					</label>
				</radio-group>
			</view>
		</view>

		<view class="p32 payment_wrap">
			<view class="payment">
				马上结算
			</view>
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
	page {
		background-color: $uni-bg-color-grey;
	}

	.title,
	.order,
	.price {
		font-size: 32rpx;
		font-family: PingFangSC-Semibold, PingFang SC;

		color: #333333;

	}

	.order,
	.price {

		font-weight: 600;
	}

	.payType {

		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #9FA2AA;

	}

	.types {

		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;

		label {
			display: flex;
			justify-content: space-between;
			padding: 32rpx 0;

			image {
				height: 48rpx;
				width: 48rpx;
				margin-right: 16rpx;
				border-radius: 50%;
			}
		}

		label:first-child {
			border-bottom: 1rpx solid #F6F6F6;
		}


		label:last-child {
			padding-bottom: 0;
		}

		radio {
			transform: scale(0.7);
		}
	}
	
	.payment_wrap{
		box-sizing: border-box;
		position: absolute;
		bottom: 0;
		width: 100%;
	}
	
	.payment{
		height: 98rpx;
		line-height: 98rpx;
		background: #2B2C3E;
		color: white;
		font-size: 32rpx;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: #FFFFFF;
		text-align: center;


	}
</style>
