<template>
	<view class='flex-conDirection relative'>
		<view class="address">
			<image class='addressIcon floatL relative marL40' src="../../static/images/my_dfk.png" mode="widthFix"></image>
			<view class="addressText floatL marL10">北京市朝阳区来广营帝维系咖啡</view>
			<view class="addressButton floatR marR30">
				{{isEdit?"完成":"编辑"}}
			</view>
		</view>
	    <view class='shopSon flex-verCenter' :class="{'marT20':index==0}" v-for="(item,index) in shopList" :key="index">
			<view class="chooseShop flex-alcenter">
				<image src="../../static/images/my_dfk.png" class='chooseIcon' mode="widthFix"></image>
			</view>
	    	<rowShop :config='config'></rowShop>
	    </view>
		<view class="buyView flex-verCenter">
			<view class="chooseShop flex-alcenter">
				<image src="../../static/images/my_dfk.png" class='chooseIcon' mode="widthFix"></image>
			</view>
			<view class="chooseText marL10">
				全选
			</view>
			<view class="hejiText" v-show='!isEdit'>
				合计:
			</view>
			<view class="marL20 allPrice" v-show='!isEdit'>
				￥188
			</view>
			<view class="buyButton flex-allcenter">
				{{isEdit?"删除":"立即购买"}}
			</view>
		</view>
	</view>
</template>

<script>
	import rowShop from '@/components/rowShop.vue'
	export default {
		components:{
			rowShop
		},
		data() {
			return {
				isEdit:false,
				shopList:[{
					
				},{
					
				}],
				config:{
					width:650,
					height:200,
					imgWidth:200,
					imgHeight:200,
					isAddNum:true
				},
			};
		}
	}
</script>

<style lang="scss">
	.addressText{
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
	}
	.addressIcon{
		top: 34rpx;
		width: 22rpx;
	}
	.addressButton{
	    font-size: 28rpx;
	    font-family: PingFangSC-Regular, PingFang SC;
	    font-weight: 400;
	    color: #999999;
	}
	.address{
		background-color: #ffffff;
		width: 750rpx;
		height: 96rpx;
		line-height: 96rpx;
		margin-left: 38rpx;
		margin-right: 32rpx;
	}
	.chooseShop{
		margin-left: 32rpx;
		// margin-right: 26rpx;
		width: 31rpx;
		height: 31rpx;
		background: #2B2C3E;
		border-radius: 50%;
	}
	.buyView{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 98rpx;
		background-color: #ffffff;
		z-index: 10;
	}
	.chooseIcon{
		width: 28rpx;
	}
	.chooseText{
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
	}
	.hejiText{
		margin-left: 160rpx;
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
	}
	.allPrice{
		font-size: 40rpx;
		font-family: DIN-BlackItalic, DIN;
		font-weight: normal;
		color:$orange;
	}
	.buyButton{
		position: absolute;
		right: 0;
		top: 0;
		width: 250rpx;
		height: 98rpx;
		background: #2B2C3E;
		font-size: 32rpx;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: #FFFFFF;
	}
	.shopSon{
		width: 750rpx;
		background-color: #ffffff;
		padding: 24rpx 0;
	}
   page{
     background: #F6F6F6;
   }
</style>
