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
					 mode="aspectFit" v-for="(item,index) in 5" :key="index" @click="selectStar(index)"></image>
				</view>
			</view>
		</view>
		<view class="evaluate p32">
			<textarea v-model="evaluate" maxlength="500" placeholder-style="color: #AAAAAA;font-size:28rpx" placeholder="写下你对产品的心得～" />
			<text class="count">{{evaluate.length}}/500</text>
		</view>
		<view class="images">
				<view class="relative" v-for="(item,index) in imgList" :key="index">
					<image class="img" :src="item" mode="aspectFill"></image>
					<image class="delete" src="../../static/images/icon_shanchuh@2x.png" mode="aspectFill"></image>
				</view>
			<image src="../../static/images/add_image.png" mode="" v-if="imgList.length<6" mode="aspectFill"></image>
		</view>
		<view class="btn_wrap p32">
			<button type="default" >发布评价</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				starCount: 1,
				evaluate: "",
				imgList:['../../static/images/jiu.png']
			}
		},
		methods: {
			selectStar(index){
				this.starCount=index+1
			}
		}
	}
</script>

<style scoped lang="scss">
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
	
		
	.images{
		padding: 32rpx;
		display: flex;
		flex-wrap: wrap;
		image{
			padding-left: 40rpx;
			height: 144rpx;
			width: 144rpx;
		}
		
		image:first-child{
			padding-left: 0;
		}
		
		.delete{
			width: 26rpx;
			height: 26rpx;
			position: absolute;
			right: -13rpx;
			top: -13rpx;
			cursor: pointer;
		}
	}
	.btn_wrap{
		
		
	
	}
	
	button{
		color: white;
		border-radius: 0;
		z-index: 1;
	}
	
	button:after{
		border-radius: 0;
		color: #FFFFFF;
		background-color: #2B2C3E;
		z-index: -1;
	}
</style>
