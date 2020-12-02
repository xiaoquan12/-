<template>
	<view>
		<view class="goods p32 flex">
			<image class="goods_img" src="../../static/images/jiu.png" mode="widthFix"></image>
			<view class="flex-column-center star_wrap">
				<view class="">
					商品评分
				</view>
				<view class="flex">
					<image class="xingxing" :src="starCount<=(index)?'../../static/images/icon_kongxinxing@2x.png':'../../static/images/icon_onexing@2x.png'"
					 mode="aspectFit" v-for="(item,index) in 5" :key="index"></image>
				</view>
			</view>
		</view>
		<view class="evaluate p32">
			<textarea v-model="evaluate" maxlength="500" placeholder-style="color: #AAAAAA;font-size:28rpx" placeholder="写下你对产品的心得～" />
			<text class="count">{{evaluate.length}}/500</text>
		</view>
		
		<view class="btn_wrap p32">
			<button type="default">发布评价</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				starCount: 1,
				evaluate: ""
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.goods {

		font-size: 28rpx;
		font-family: PingFangSC;
		color: #42454F;
		border-bottom: 2rpx solid #EEEEEE;


		.goods_img {
			width: 112rpx;
			height: 112rpx;
			margin-right: 24rpx;
		}
	}

	.star_wrap {
		height: 112rpx;
		justify-content: space-between;

		.xingxing {
			width: 48rpx;
			height: 48rpx;
		}
	}

	.evaluate {
		height: 270rpx;
		border-bottom: 2rpx solid #EEEEEE;
		position: relative;

		textarea {
			height: 100%;
			width: 100%;
		}

		.count {
			position: absolute;
			bottom: 32rpx;
			right: 32rpx;
			color: #AAAAAA;
			font-size: 22rpx;
		}
	}
	.btn_wrap{
		
		button{
			color: white;
			border-radius: 0;
		}
		
		button:after{
			border-radius: 0;
			color: white;
			background-color: #2B2C3E;
		}
	
	}
</style>
