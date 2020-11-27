<!-- 积分订单 -->
<template>
	<view class="inegralOrder">
		<view class="nav">
			<view :class="[navIndex==0?'select':'']" @tap="navIndex=0">
				未发货
			</view>
			<view :class="[navIndex==1?'select':'']" @tap="navIndex=1">
				已发货
			</view>
			<view :class="[navIndex==2?'select':'']" @tap="navIndex=2">
				已签收
			</view>
		</view>

		<swiper :indicator-dots="false" :autoplay="false" :interval="3000" :duration="1000" :current="navIndex" @change="swiperChange"
		 style="height:calc(100vh - 66rpx)">
			<swiper-item>
				<scroll-view scroll-y="true" style="height:100%">
					<view class="list">
						<view v-for="(item,index) in [1,2,3]" :key="index" class="item">
							<view class="order_info flexbetween">
								<view class="code">
									订单编号：202005081325283003
								</view>
								<view class="type">
									等待卖家发货
								</view>
							</view>
							<GoodsShow navigateUrl=""></GoodsShow>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<view class="list">
					<view v-for="(item,index) in [1,2,3]" :key="index" class="item">
						<view class="order_info flexbetween">
							<view class="code">
								订单编号：202005081325283003
							</view>
							<view class="type">
								已发货
							</view>
						</view>
						<GoodsShow navigateUrl=""></GoodsShow>
						<view class="yfh_button flexend">
							<button type="default">查看物流</button>
							<button type="default">确认收货</button>
						</view>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="list">
					<view v-for="(item,index) in [1,2,3]" :key="index" class="item">
						<view class="order_info flexbetween">
							<view class="code">
								订单编号：202005081325283003
							</view>
							<view class="type">
								已签收
							</view>
						</view>
						<GoodsShow navigateUrl=""></GoodsShow>

						<view class="yfh_button flexend">
							<button type="default">删除订单</button>
							<button type="default">评价</button>
						</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>


</template>

<script>
	export default {
		data() {
			return {

				navIndex: 0
			};
		},
		methods: {
			swiperChange(e) {


				this.navIndex = e.detail.current
			}
		}
	}
</script>

<style scoped lang="scss">
	
	
	// .inegralOrder {
	// 	position: relative;
	// }

	.nav {
		// position: fixed;
		// top: 0;
		// left: 0;
		// right: 0;
		display: flex;
		border-bottom: 2rpx solid #F5F5F5;
		background-color: white;

	}

	.nav>view {
		flex: 1;
		text-align: center;
		padding: 18rpx 0;
		font-size: 28rpx;
		font-weight: 500;
		color: #000000;
		cursor: pointer;
		position: relative;
	}

	.select:after {
		content: " ";
		position: absolute;
		height: 4rpx;
		background: #000000;
		bottom: 0;
		left: 45%;
		right: 45%;
	}


	swiper {
		padding-top: 66rpx;
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
			width: 176rpx;
			height: 68rpx;
			line-height: 32rpx;
			border-radius: 0 !important;
		}

		button:nth-child(2) {
			color: white;
			background-color: #2B2C3E !important;
			margin-left: 48rpx;
		}



	}
</style>
