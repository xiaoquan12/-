<template>
	<view class='flex-conDirection'>
		<view class="marT30 askMain">
			<view class="paddingB30 borderB">
				<QAItem :config='config'></QAItem>
				 <view class="askDate marT24">
				 	5月26日
				 </view>
			</view>
			<view class="flex-verCenter marT30 marL24">
				<image class='questionIcon' src="/static/images/question.png" mode="widthFix"></image>
				<view class="questionNum marL24">共5条回答</view>
			</view>
			<div v-for="(item,index) in [1,1,1,1]" :class="{marT50:index==0,marT40:index!=0}" class='borderB flex-conDirection paddingB30' :key="index">
				<view class="flex-verCenter relative questionHead width638">
					<image class='questionPerson' src="../../static/images/access_right.png" mode="widthFix"></image>
					<view class="questionName">人</view>
					<view class="questionDate">
	                    2020-01-25				
					</view>
				</view>
				<view class="width638 marT24 questionText">
					萨达多撒多所
				</view>
			</div>
		</view>
		<view class="bottomButton flex-allcenter">
			<image class='bottomLeft' src="../../static/images/access_right.png" mode="widthFix"></image>
			<view class="bottomRight">我要回答</view>
		</view>
	</view>
</template>

<script>
	import QAItem  from "@/components/Q&AItem.vue"
	export default {
		components:{
			QAItem
		},
		data() {
			return {
				questionList:[
					
				],
				config:{
					width:686,
				},
				askList:[{
					
				}]
			};
		}
	}
</script>

<style lang="scss">
	.questionPerson{
		width: 48rpx;
		height: 48rpx;
		border-radius: 50%;
	}
	.askDate{
		margin-left: 56rpx;
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #666666;
	}
   page{
	   background-color: #f6f6f6;
   }
   .askMain{
	  width: 686rpx;
	  background: #FFFFFF;
	  border-radius: 8rpx;
   }
   .questionIcon{
	   width: 32rpx;
   }
   .questionNum{
	   font-size: 24rpx;
	   font-family: PingFangSC-Semibold, PingFang SC;
	   font-weight: 600;
	   color: #FF7F7F;
   }
   .questionView{
	   
   }
   .questionHead{
	  height: 48rpx;
	  line-height: 48rpx;
   }
   .questionName{
	   margin-left: 16rpx;
	   font-size: 24px;
	   font-family: PingFangSC-Regular, PingFang SC;
	   font-weight: 400;
	   color: #333333;
   }
   .width638{
	   width: 638rpx;
   }
   .questionDate{
	   height: 100%;
	   line-height: 100%;
	   position: absolute;
	   right: 0;
	   top: 0;
	   font-size: 22rpx;
	   font-family: PingFangSC-Regular, PingFang SC;
	   font-weight: 400;
	   color: #999999;
   }
   .questionText{
	   font-size: 24rpx;
	   font-family: PingFangSC-Regular, PingFang SC;
	   font-weight: 400;
	   color: #666666;
   }
   .bottomButton{
   	position: fixed;
   	width: 280rpx;
   	height: 88rpx;
   	bottom: 80rpx;
   	left: 236rpx;
   	background: linear-gradient(316deg, #FF7F7F 0%, #FF5450 100%);
   	box-shadow: 0px 4px 8px 0px rgba(119, 8, 8, 0.2);
   	border-radius: 8rpx;
   }
   .bottomRight{
   	font-size: 40rpx;
   	font-family: PingFangSC-Regular, PingFang SC;
   	font-weight: 400;
   	color: #FFFFFF;
   	margin-left: 8rpx;
   }
   .bottomLeft{
   	width: 43rpx;
   }
   .marT50{
	   margin-top: 50rpx;
   }
   .marL24{
   		 margin-left: 24rpx;
   }
   .marT24{
   		margin-top: 24rpx;
   }
</style>
