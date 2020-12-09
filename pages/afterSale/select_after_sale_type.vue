<template>
	<view>

		<view class="goods_wrap">
			<AfterSaleGoods :isShowSelectNum="false" :goods="{}"></AfterSaleGoods>
		</view>

		<view class="content">
			<view class="item" data-url="/pages/afterSale/returnGoods" @tap="navigateTo">
				<view class="title">
					<image src="../../static/images/tuihuo.png" mode="aspectFill"></image>
					<view class="txt">
						我要退货
					</view>
				</view>
				<view class="flex" style="align-items: center;">
					<view class="flex-column-center right">
						<view class="" style="text-align: right;color: #999999;">
							退回收到的商品
						</view>
						<view class="" style="text-align: right;">
							支持7天无理由退货
						</view>
					</view>
					<image src="../../static/images/access_right.png" class="access" mode="widthFix"></image>
				</view>

			</view>
			<view class="item" data-url="/pages/afterSale/exchangeGoods" @tap="navigateTo">
				<view class="title">
					<image src="../../static/images/huanhuo.png" mode="aspectFill"></image>
					<view class="txt">
						我要换货
					</view>
				</view>
				<view class="">
					<image src="../../static/images/access_right.png" class="access" mode="widthFix"></image>
				</view>


			</view>
		</view>
		<view class="tips">
			退换货说明
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

			};
		},
		methods: {
			navigateTo(e) {
				let url = e.currentTarget.dataset.url;

				this.$common.redirect(url)
			}
		}
	}
</script>

<style scoped lang="scss">
	page {
		background-color: #F6F6F6;
	}

	.goods_wrap {
		background-color: white;
		padding: 32rpx;
	}

	.content {
		margin: 48rpx;
		background-color: #FFFFFF;
		border-radius: 8rpx;


		.item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 48rpx 34rpx;
			cursor: pointer;

			.title {
				font-size: 32rpx;
				font-family: PingFangSC-Semibold, PingFang SC;
				font-weight: 600;
				color: #333333;
				display: flex;
				align-items: center;


				image {
					width: 58rpx;
					height: 58rpx;
					margin-right: 28rpx;
				}

			}

			.access {
				width: 26rpx;
				height: 26rpx;
			}

			.right {
				font-size: 20rpx;

				view:nth-child(2) {
					color: $uni-text-color;
				}
			}

		}

		.item:nth-child(1) {
			border-bottom: 2rpx solid #EEEEEE;
		}
	}

	.tips {
		font-size: 28rpx;
		font-family: PingFangSC;
		color: #3990FF;
		text-align: center;
		cursor: pointer;

	}
</style>
