<!-- 换、换货商品头部 -->
<template>
	<view>
		<view class="goods_wrap">
			<view class="goods" :class="{'showSelectNum':isShowSelectNum}">
				<view class="left">
					<image src="../static/images/jiu.png" mode="widthFix" class="goods_img"></image>
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
			<view class="goods_nums" v-if="isShowSelectNum">
				<view class="">
					选择数量
				</view>

				<view class="shopButtomRight flex-verCenter">
					<view class="shopNumButton flex-allcenter" @click='subNum'>
						-
					</view>
					<view class="shopNum">
						{{buyNum}}
					</view>
					<view class="shopNumButton flex-allcenter" @click='addNum'>
						+
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			isShowSelectNum: {
				type: Boolean,
				default: false
			},
			goods:{
				type:Object,
				default:{}
			}
		},
		data() {
			return {
				buyNum: 1
			};
		},
		methods: {
			addNum() {
				this.buyNum += 1;
				this.$emit("add", this.buyNum)
			},
			subNum() {
				if (this.buyNum != 1) {
					this.buyNum -= 1;
					this.$emit("sub", this.buyNum)
				}
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F6F6F6;
	}

	.goods_wrap {
		background: #FFFFFF;
		padding: 42rpx 32rpx 32rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
	}
	
	.showSelectNum{
		border-bottom: 1rpx solid #EEEEEE;
		padding-bottom: 32rpx;
	}

	.goods {

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

	.goods_nums {
		padding-top: 32rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		font-size: 32rpx;
		font-weight: 600;
		color: #333333;
		justify-content: space-between;
	}

	.shopButtomButton {
		width: 32rpx;
		height: 32rpx;
		background: #2B2C3E;
		border-radius: 50%;
		color: #ffffff;
	}

	.shopButtomRight {
		font-size: 28rpx;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: #333333;
	}

	.shopNumButton {
		border-radius: 50%;
		color: #aaaaaa;
		width: 44rpx;
		height: 44rpx;
		background: #F5F5F5;
		cursor: pointer;
	}

	.shopNum {
		padding: 0 32rpx;
	}
</style>
