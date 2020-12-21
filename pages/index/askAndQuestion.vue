<template>
	<view class='flex-conDirection'>
		<view class="askAndQ" :class="{marT30:index==0,marT20:index!=0}" v-for='(item,index) in askList' :key='index'>
			<QAItem :config='config' :questionList='item.askPerson'></QAItem>
		</view>
		
		<view class="bottomButton flex-allcenter">
			<image class='bottomLeft' src="../../static/images/access_right.png" mode="widthFix"></image>
			<view class="bottomRight">问问买家</view>
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
				config:{
					width:686,
				},
				askList:[{
					
				},{
					askPerson:[{
						
					},{
						
					}]
				},{
					askPerson:[{
						
					}]
				}]
			};
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #f6f6f6;
	}
	.bottomButton{
		position: fixed;
		width: 280rpx;
		height: 88rpx;
		bottom: 80rpx;
		left: 236rpx;
		background: linear-gradient(316deg, #6AC3FF 0%, #3990FF 100%);
		box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(8, 57, 119, 0.2);
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
    .askAndQ{
		// background: #FFFFFF;
		border-radius: 8rpx;
	}
</style>
