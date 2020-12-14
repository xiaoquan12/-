<!-- 意见反馈 -->
<template>
	<view>
		<view class="bgWhite p32">
			<textarea value="" placeholder="请说出您的建议～" class="remark" placeholder-class="placeholder" />

			<image src="../../static/images/add_image.png" mode="aspectFill"></image>
		</view>
		
		<view class="bgWhite phone">
			<input type="text" value="" placeholder="请输入您的联系方式" placeholder-class="placeholder" />
		</view>
		
		<view class="submit">
			提交
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

<style lang="scss">
	
	page{
		background-color: $uni-bg-color-grey;
	}

.remark{
	width: 100%;
	height: 260rpx;
	
	margin-bottom: 24rpx;
}
image{	
	width: 144rpx;
	height: 144rpx;
}

.phone{
	margin-top: 24rpx;
		
	input{
		padding: 32rpx;
	}
}

.submit{
	line-height: 98rpx;
	height: 98rpx;
	background: #2B2C3E;

	font-size: 32rpx;
	font-family: PingFangSC-Semibold, PingFang SC;
	font-weight: 600;
	color: #FFFFFF;
	text-align: center;
	
	margin: 32rpx;
	margin-top: 80rpx;

}
</style>
