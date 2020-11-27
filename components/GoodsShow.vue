<!-- 展示商品组件 -->
<template>
	<view class="goods" @tap="navigateTap" :class="{'bottomBorder':isShowBottomBorder}">
		<view class="left">
			<image :src="goods.image" mode="aspectFill"></image>
		</view>
		<view class="right">
			<view class="info">
				<view class="name">
					{{goods.name}}
				</view>
				<view class="desc">
					{{goods.description}}
				</view>
			</view>
			<view class="unit">
				￥{{goods.price}}元/瓶
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			goods: {
				type: Object,
				default: {
					image: "/static/images/my_dfk.png",
					name: "VSauvignon Blanc（长相思干白白白）",
					description: "源自法国，味道醇香",
					price: 118
				}
			},
			navigateUrl: {
				type: String,
				default: ""
			},
			isShowBottomBorder:{
				type:Boolean,
				default:true
			}
		},
		data() {
			return {

			}
		},
		methods: {
			// 要跳转的路径
			navigateTap() {
				if (this.navigateUrl) {
					this.$common.redirect(this.navigateUrl)
				}
			}
		}

	}
</script>

<style scoped lang="scss">
	.goods {
		display: flex;
		align-items: center;
		padding: 24rpx 0;
		margin: 0 24rpx;
		box-sizing: border-box;
		

	}
	.bottomBorder{
		border-bottom: 2rpx solid #F5F5F5;
	}

	.left {

		image {
			height: 180rpx;
			width: 180rpx;
			border-radius: 4rpx;
		}
	}

	.right {
		padding-left: 24rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		overflow: hidden;
		height: 180rpx;

		.info {
			display: flex;
			flex-direction: column;

			.name {
				flex: 1;
				font-size: 32rpx;
				color: #333333;
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
			}

			.desc {

				font-size: 24rpx;
				padding-top: 8rpx;
				color: #999999;
			}
		}

		.unit {

			font-size: 24rpx;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;
			color: $uni-text-color;
		}
	}
</style>
