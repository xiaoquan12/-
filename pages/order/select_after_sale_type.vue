<template>
	<view>
		<view class="goods">
			<view class="left">
				<image src="../../static/images/jiu.png" mode="widthFix" class="goods_img"></image>
			</view>
			<view class="right flex-column-center">
				<view class="title">
					Vintara Red（干红/13度）百琪干红葡萄酒750ML/13度
				</view>
				<view class="props flex">
					<view class="item flex">
						<view class="title">
							单价：
						</view>
						<view class="">
							118
						</view>
					</view>
					<view class="item flex">
						<view class="title">
							数量：
						</view>
						<view class="">
							1
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="content">
			<view class="item">
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
			<view class="item">
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
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style scoped lang="scss">
	page {
		background-color: #F6F6F6;
	}

	.goods {
		background: #FFFFFF;
		padding: 42rpx 32rpx 32rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;

		.goods_img {
			width: 112rpx;
			height: 112rpx;
		}

		.right {
			padding-left: 13rpx;
			box-sizing: border-box;
			display: flex;
			height: 112rpx;

			.title {
				font-size: 24rpx;
				color: #333333;
			}

			.props {
				font-size: 24rpx;

				.item {
					align-items: center;

					.title {
						color: #999999;
					}

				}

				.item:nth-child(2) {
					padding-left: 62rpx;
				}
			}
		}
	}

	.content {
		margin: 48rpx;
		background-color: #FFFFFF;

		.item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 48rpx 34rpx;

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
				
				view:nth-child(2){
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
