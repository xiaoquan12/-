<template>
	<view class='bgAsk' :style="{'width':config.width+'rpx'}">
         <view class="ask marL24 flex-verCenter">
             <image class="askLeft" mode='widthFix' src='/static/images/ask.png'></image>
			 <view class="askCenter">这个酒味道可以吗？</view>
         </view>
		 <view class="marT24 marL56 nullQuestion" v-if='!questionList'>
		 	暂无回答。答友们正 飞速赶来 ～
		 </view>
		 <view class="question marL24 flex-verCenter marT24" v-if='questionList'>
		 	<image class="askLeft" mode='widthFix' src='/static/images/question.png'></image>
		 	<view class="askCenter">当然可以</view>
		 </view>
		 <view class="questions marL24 flex-verCenter marT16" v-if='questionList&&questionList.length>1'>
		 	<image class="personIcon" mode='widthFix' src='/static/images/question.png'></image>
		 	<view class="askCenter marL10">aaa等1人进行了回答</view>
		 </view>
	</view>
</template>

<script>
	export default {
		props:{
			config:null,
			questionList:null
		},
		data() {
			return {
			    
			};
		}
	}
</script>

<style lang="scss">
	.nullQuestion{
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #666666;
	}
	.personIcon{
		width: 32rpx;
		height: 32rpx;
		border: 2rpx solid #FFFFFF;
	}
     .bgAsk{
		 padding: 32rpx 0;
		 background-color: #ffffff;
	 }
	 .ask{
		 // height: 44rpx;
		 // line-height: 44rpx;
	 }
	 .marL24{
		 margin-left: 24rpx;
	 }
	 .marT24{
		margin-top: 24rpx;
	 }
	 .marL56{
		 margin-left: 56rpx;
	 }
	 .askCenter{
		 margin-left: 24rpx;
		 font-size: 32rpx;
		 font-family: PingFangSC-Semibold, PingFang SC;
		 font-weight: 600;
		 color: #333333;
		 line-height: 44rpx;
	 }
	 .askLeft{
		 width: 32rpx;
	 }
	 .questions{
		 margin-top: 16rpx;
	 }
</style> 
