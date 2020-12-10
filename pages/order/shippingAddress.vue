<!-- 收货地址 -->
<template>
	<view>
		<view class="list ">
			<view class="item p32 bgWhite" :class="modalName=='move-box-'+ index?'move-cur':''" v-for="(item,index) in [1,2,3,4]"
			 :key="index" @touchstart="ListTouchStart" @touchmove="ListTouchMove" @touchend="ListTouchEnd" :data-target="'move-box-' + index">
				<view class="left">
					<view class="top flex">
						<view class="">
							呼哈哈
						</view>
						<view class="">
							18920719765
						</view>
					</view>
					<view class="bottom flex">
						<view class="default" v-if="index==0">
							默认
						</view>
						<view class="address">
							天津-天津市-东丽区-华明家园
						</view>
					</view>
				</view>
				<view class="">
					<image src="../../static/images/edit.png" mode="aspectFill" class="edit_img"></image>
				</view>
				<view class="delete">
					删除
				</view>
			</view>
		</view>


		<view class="addAddress">
			新增地址
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName: "",
				listTouchDirection: null,

			};
		},
		methods: {
			// ListTouch触摸开始
			ListTouchStart(e) {
				this.listTouchStart = e.touches[0].pageX
			},

			// ListTouch计算方向
			ListTouchMove(e) {
				this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left'
			},

			// ListTouch计算滚动
			ListTouchEnd(e) {
				if (this.listTouchDirection == 'left') {
					this.modalName = e.currentTarget.dataset.target
				} else {
					this.modalName = null
				}
				this.listTouchDirection = null
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: $uni-bg-color-grey;
	}

	.edit_img {
		width: 32rpx;
		height: 32rpx;
	}

	.item {
		border-bottom: 1rpx solid #EEEEEE;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		transition: all .6s ease-in-out 0s;

		.left {

			width: calc(100% - 32rpx);
		}

		.top {
			font-size: 32rpx;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;
			color: #333333;
		}

		.bottom {
			margin-top: 16rpx;
			font-size: 24rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #999999;

		}

		.default {
			margin-right: 10rpx;
			font-size: 24rpx;
			color: $uni-text-color;
			position: relative;
		}

		.default:after {
			content: " ";
			position: absolute;
			top: 0;
			left: -4rpx;
			width: 6rpx;
			height: 12rpx;
			border: 1rpx solid $uni-text-color;
			border-bottom-color: transparent;
			border-right-color: transparent;
		}


		.default:before {
			content: " ";
			position: absolute;
			bottom: 0;
			right: -4rpx;
			width: 6rpx;
			height: 12rpx;
			border: 1rpx solid $uni-text-color;
			border-top-color: transparent;
			border-left-color: transparent;
		}

	}

	.addAddress {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 98rpx;
		background: #2B2C3E;

		font-size: 32rpx;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: #FFFFFF;
		line-height: 98rpx;
		text-align: center;
	}

	.delete {
		width: 112rpx;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		// height: 158rpx;
		background: #EEEEEE;
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		position: absolute;
		right: 0;
		transform: translateX(100%);

	}

	.move-cur {
		transform: translateX(-112rpx);
	}
</style>
