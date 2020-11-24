<template>
	<div class="spot-head" :style="{background:bg,'padding-top':barHeight}">
		<div class="spot-head-return">
			<!-- #ifdef MP-WEIXIN -->
			<div class="spot-head-icon" @click="goback">
				<image src="/static/images/indexStatic/scenic/left.png" />
			</div>
			<!-- #endif -->
			<!-- #ifdef MP-ALIPAY -->
			<div class="spot-head-icon opacity" >
				<image src="/static/images/indexStatic/scenic/left.png" />
			</div>
			<!-- #endif -->
			<view class="spot-head-text" v-if='barTitle'>
				{{barTitle}}
			</view>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			barTitle: {
				type: String,
				default: ""
			},
			bg:{
				type:String,
				default:""
			}
		},
		data() {
			return {
				barHeight: null
			}
		},
		mounted() {
			var _this = this
			uni.getSystemInfo({
				success: res => {
					var k = parseInt(res.statusBarHeight) - 3;
					_this.barHeight=k+'px';
				}
			});
			
		},
		methods: {
			/**
			 * 返回上一页
			 * @author 空心科技-王效玉
			 * @date 2020-06-22
			 * @returns  无
			 */
			goback() {
				uni.navigateBack({
					delta: 1
				})
			},
		}
	}
</script>

<style lang='scss'>
	.spot-head {
		height: 100rpx;
		line-height: 100rpx;
		display: flex;
		position: fixed;
		left: 0;
		right: 0;
		//   top: 140rpx;
		z-index: 999;
		align-items: center;
		justify-content: center;

		.spot-head-icon {
			width: 100rpx;
			height: 100rpx;
			line-height: 100rpx;
			text-align: center;
		}

		.spot-head-text {
			position: relative;
			right: 10rpx;
			color: #fff;
			font-size: 30rpx;
			height: 100rpx;
			line-height: 100rpx;
		}

		.spot-head-return {
			flex: 1;
			display: flex;
		}


		.spot-head-return image {
			width: 44rpx;
			height: 44rpx;
		}

		.spot-head-like image {
			width: 48rpx;
			height: 48rpx;
		}
	}
</style>
