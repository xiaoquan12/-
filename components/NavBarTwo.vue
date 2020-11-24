<template>
	 <view class="flex-verCenter headView relative" :style="{ 'padding-top': barHeight, height: 80 + 'rpx', 'padding-bottom': 22 + 'rpx','background':bgGray }">
	 	<view class="backView flex-allcenter relative">
	 		<view class="backLeft flex-allcenter" @click='backFront()'>
	 		    <image src="/static/images/back.png" class='backLeftIcon' mode="widthFix"></image>
	 		</view>
	 		<view class="backLeft flex-allcenter" @click='navScroll()'>
	 			<image src="/static/images/navbar.png" class='backRightIcon' mode="widthFix"></image>
	 		</view>
	 		<view class="borderLine">
	 		</view>
	 	</view>
	 	<view class="worldTitle flex-allcenter" :style="{'top':barHeight,'height':80+'rpx'}">{{title}}</view>
	 </view>
</template>
<script>
	const app=getApp()
	export default {
		props: {
		    title:{
		    	type:String,
		    	default:""
		    },
			bgGray:{
				type:String,
				default:""
			}
		},
		data() {
			return {
				barHeight:0,
				barHeightNum:0,
			}
		},
		mounted() {
			console.log("app.globalData.systemInfo",app.globalData.systemInfo);
			this.subHeight=app.globalData.systemInfo.windowHeight/app.globalData.systemInfo.radio-238;
			var _this = this;
			uni.getSystemInfo({
				success: res => {
					console.log('res', res);
					//处理自定义头部的高度问题
					var k = parseInt(res.statusBarHeight) + 2;
					_this.barHeight = k / app.globalData.systemInfo.radio + 'rpx';
					_this.barHeightNum = k / app.globalData.systemInfo.radio;
				}
			});
		},
		methods: {
			navScroll(){
				console.log("navScroll");
				this.$emit("pressNav","")
			},
			backFront(){
				uni.navigateBack({
				})
			}
		}
	}
</script>

<style scoped>
	.worldTitle{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		text-align: center;
		font-size: 36rpx;
		font-family: Microsoft YaHei;
		font-weight: 400;
	}
	.backView{
		margin-left: 40rpx;
		width: 174rpx;
		height:64rpx;
		background-color: #ffffff;
		border: 1rpx solid #f5f8f8;
		border-radius: 50rpx;
	}
	.backLeft{
		width: 50%;
		height: 100%;
		z-index: 1000;
	}
	.backLeftIcon{
		width: 14rpx;
		height: auto;
	}
	.backRightIcon{
		width: 30rpx;
		height: auto;
	}
	.headView{
		width: 750rpx;
		background: #ffffff;
	}
	.borderLine{
		width: 1rpx;
		height: 50rpx;
		position: absolute;
		top: 7rpx;
		left: 50%;
	}
</style>
