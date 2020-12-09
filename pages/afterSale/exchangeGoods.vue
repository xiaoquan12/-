<!-- 换货 -->
<template>
	<view>

		<view class="goods_wrap" >
			<AfterSaleGoods :isShowSelectNum="true" @sub="subNum" @add="addNum" :goods="{}"></AfterSaleGoods>
		</view>
		<!-- </view> -->


		<ReturnOrExchangeGoodsFrom></ReturnOrExchangeGoodsFrom>

		<view class="address flex flexbetween">
			<view class="flex">
				<image src="../../static/images/dizhi.png" mode="aspectFill" class="address_img"></image>
				<view class="flex-column-center">
					<view class="flex">
						<text class="name">
							胡哈哈
						</text>
						<text class="phone">18920***765</text>
					</view>
					<view class="txt">
						天津-天津市-东丽区-华明家园**********
					</view>
				</view>
			</view>
			<image src="../../static/images/access_right.png" mode="aspectFill" class="access"></image>
		</view>

		<view class="upload" @tap="upload">
			提交申请
		</view>
	</view>

</template>

<script>
	import AfterSaleGoods from '../../components/afterSaleGoods.vue'
	import ReturnOrExchangeGoodsFrom from '../../components/ReturnOrExchangeGoodsForm.vue'
	export default {
		components: {
			AfterSaleGoods,
			ReturnOrExchangeGoodsFrom
		},
		data() {
			return {
				reasonValue: -1,
				reasonList: [{
					id: 1,
					title: "质量问题"
				}, {
					id: 2,
					title: "商品降价"
				}, {
					id: 3,
					title: "发错货"
				}, {
					id: 4,
					title: "商品损坏"
				}, {
					id: 5,
					title: "商品与页面描述不相符"
				}]
			};
		},
		mounted() {

		},
		methods: {
			subNum(e) {
				console.log(e)
			},
			addNum(e) {
				console.log(e)
			},
			resonChoose(e) {
				console.log(e)
				let value = e.detail.value

				this.reasonValue = Number(value)
			},

			upload() {


				if (this.reasonValue == -1) {
					return
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	page {
		background-color: #F6F6F6;
	}
	
	.goods_wrap{
		background-color: white;
		padding: 32rpx;
	}

	.content {
		margin: 32rpx;
		background-color: #FFFFFF;
		border-radius: 8px;
		padding: 32rpx 24rpx;
		box-sizing: border-box;

		.title {
			display: flex;
			padding-bottom: 32rpx;
			box-sizing: border-box;
			color: #333333;
			font-size: 32rpx;
			font-weight: 600;

			.reason_title {
				color: #999999;
				font-size: 28rpx;
			}

			.access {
				width: 26rpx;
				height: 26rpx;
			}
		}
	}

	.input {
		width: calc(100% - 48rpx);

		textarea {
			width: 100%;
			padding: 24rpx;
			background: #F6F6F6;
			border-radius: 8rpx;
		}
	}

	.images {
		padding: 32rpx 0;

		image {
			width: 144rpx;
			height: 144rpx;
		}
	}

	.tips {

		color: $uni-text-color;
		font-size: 22rpx;
	}

	.address {
		margin: 24rpx 32rpx;
		padding: 24rpx;
		box-sizing: border-box;
		background-color: #FFFFFF;
		display: flex;
		margin-bottom: 128rpx;

		.address_img {
			width: 36rpx;
			height: 42rpx;
			margin-right: 16rpx;

		}

		.name,
		.phone {
			font-size: 28rpx;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;
			color: #333333;
		}

		.txt {
			margin-top: 24rpx;
			font-size: 24rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #666666;

		}

		.access {
			width: 26rpx;
			height: 26rpx;

		}
	}

	.upload {
		width: 100%;
		height: 98rpx;
		line-height: 98rpx;
		text-align: center;
		background: #2B2C3E;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		color: #FFFFFF;
		font-size: 32rpx;
		font-weight: 600;
	}
</style>
