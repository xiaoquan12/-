<template>
	<view @click='turnDetail()' class='verticalShop relative' :style="{'width':styles.width+'rpx','margin-top':(styles.marT?styles.marT:0)+'rpx'}">
		 <view class="number flex-allcenter" style='background-color: #FF6767;' v-if='isOne'>TOP1</view>
		 <view class="number flex-allcenter" style='background-color: #FFB267;' v-if='isTwo'>TOP2</view>
		 <view class="number flex-allcenter" style='background-color: #67BDFF;' v-if='isThree'>TOP3</view>
	     <image class='vertivalImg relative' :style="{'width':styles.width+'rpx','height':styles.width+'rpx'}" src="../static/images/my_dfk.png" mode="aspectFill"></image>
	     <view class="verticalName line" :style="{'width':styles.width-32+'rpx'}">Sauvignon Blanc</view>
		 <view class="verticalBottom flex-verCenter relative" :style="{'width':styles.width-32+'rpx'}">
		 	<view class="verticalBottomPrice">￥128/瓶</view>
			<view class="verticalBottomButton flex-allcenter" v-if='isShowButton'>+</view>
		 </view>
	</view>
</template>

<script>
	export default {
		props:{
			styles:{
				type:Object,
				default:""
			},
			isOne:{
				type:Boolean,
				default:false
			},
			isTwo:{
				type:Boolean,
				default:false
			},
			isThree:{
				type:Boolean,
				default:false
			},
			isShowButton:{
				type:Boolean,
				default:false
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			turnDetail(){
			   this.$emit("turnDetail",'');
			},
		}
	}
</script>

<style lang="scss">
	
	.vertivalImg{
        border-radius: 8rpx;
	}
	.verticalShop{
		background-color: #ffffff;
		border-radius: 8rpx;
		padding-bottom: 16rpx;
	}
    .verticalName{
		margin-top: 16rpx;
		margin-left: 16rpx;
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
	}
	.verticalBottom{
		margin-left: 16rpx;
		margin-top: 4rpx;
		height: 38rpx;
	}
	.verticalBottomPrice{
	    font-size: 24rpx;
	    font-family: PingFangSC-Semibold, PingFang SC;
	    font-weight: 600;
	    color: #FF7F7F;
	}
	.verticalBottomButton{
		position: absolute;
		right: 0;
		top: 0;
		width: 32rpx;
		height: 32rpx;
		background: #2B2C3E;
	}
	.numberTwo{
		width: 76rpx;
		height: 40rpx;
		background: #FFB267;
		border-radius: 4px 0px 4px 0px;
		
	}
	.number{
		position: absolute;
		top: 0;
		left: 0;
		width: 76rpx;
		height: 40rpx;
		font-size: 22rpx;
		font-family: DIN-BlackItalic, DIN;
		font-weight: normal;
		color: #FFFFFF;
		border-radius: 4rpx 0rpx 4rpx 0rpx;
		z-index: 1;
	}
</style>
