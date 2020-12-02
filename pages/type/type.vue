<template>
	<view class='flex-conDirection paddingB40'>
		 <view class="flex-conDirection headSreach">
		 	<VSearch></VSearch>
		 </view>
		 <view class="mainProduct flex borderT"  :style="{height:subHeight+'rpx'}">
		 	 <view class="productLeft relative">
		 	 	<div class='typeSon flex-verCenter' @click='pressType(index)' :class="{'currentSon':currentIndex==index}" v-for="(item,index) in typeProduct" :key="index">
		 			<view class="typeNullView marL10" v-if='currentIndex==index'></view>
		 	 		<view class="typeText">{{item.text}}</view>
		 	 	</div>
		 	 </view>
		 	 <scroll-view class="productRight relative" :scroll-y='true'>
		 		 <view class="chooseType borderB flex">
		 		 	<view class="chooseSon">
		 		 	  综合
		 		 	</view>
					<view class="chooseSon marL64">
					  销量
					</view>
					<view class="chooseSon marL64 flex-verCenter">
					  价格
					  <view class="choosePrice">
					  	 <image class='priceIcon' src="/static/images/my_dfk.png" mode="widthFix"></image>
						 <image  class='priceIcon marT5' src="/static/images/my_dfk.png" mode="widthFix"></image>
					  </view>
					</view>
		 		 </view>
				 <view class="marT30">
				 	<rowShop :config='config'></rowShop>
				 </view>
		 	 </scroll-view>
		 </view>
	</view>
</template>

<script>
	import rowShop from '@/components/rowShop.vue'
	import VSearch from '@/components/Search';
	const app=getApp()
	export default {
		components:{
			VSearch,
			rowShop
		},
		data() {
			return {
				config:{
					width:536,
					height:160,
					imgWidth:160,
					imgHeight:160,
					isAddCart:true
				},
				currentIndex:0,
				subHeight:"",
				typeProduct:[{
					text:"分类名称"
				},{
					text:"国际品牌"
				},{
					text:"奢侈品"
				},{
					text:"唯品会"
				},{
					text:"男装"
				},{
					text:"女装"
				},{
					text:"箱包手袋"
				},{
					text:"京东国际"
				}],	
			};
		},
		onLoad() {
		   this.subHeight=app.globalData.systemInfo.windowHeight/app.globalData.systemInfo.radio-100;	
		},
		methods:{
			pressType(index){
				if(Number(index)!=this.currentIndex){
					this.currentIndex=index;
				}
			}
		}
	}
</script>

<style lang="scss">
    .headSreach{
    	background-color: #ffffff;
    	width: 750rpx;
    	height: 100rpx;
    }
	.mainProduct{
			 position: absolute;
			 width: 100%;
			 top: 100rpx;
			 left: 0;
			 // background-color: red;
	}
	.productLeft{
			 width: 176rpx;
			 height: 100%;
	    background: #F5F5F5;
	}
	.typeSon{
			 width: 100%;
			 height: 76rpx;
			 font-size: 28rpx;
			 font-family: Microsoft YaHei;
			 font-weight: 400;
			 color: #666666;
	}
	.currentSon{
			 background-color: #ffffff;
			 // color:#3990FF;
	}
	.typeText{
			 position: absolute;
			 left: 40rpx;
			 display: inline-block;
			 vertical-align: middle;
	}
	.typeNullView{
			 width: 7rpx;
			 height: 23rpx;
			 background: #FF7F7F;
			 border-radius: 3rpx;
	}
	.productRight{
			 width: 574rpx;
			 height: 100%;
	}
	.nullView{
			 width: 750rpx;
			 height: 1rpx;
			 background: #F5F5F5;
	}
	.shop{
			 margin-top: 22rpx;
			 margin-left: 23rpx;
			 width: 227rpx;
	}
	.marLs{
			 margin-left: 21rpx;
	}
	.shopImage{
			 width: 227rpx;
			 height: 195rpx;
			 border-radius: 12rpx;
	}
	.shopName{
			 margin-top: 25rpx;
			 font-size: 28rpx;
			 font-family: Microsoft YaHei;
			 font-weight: 400;
			 color: #333333;
	}
	.chooseSon{
		font-size: 28rpx;
		font-family: PingFangSC;
		color: #999999;
	}
	.chooseType{
		width: 542rpx;
		height: 108rpx;
		justify-content: flex-end;
		align-items: center;
	}
	.priceIcon{
		width: 12rpx;
	}
	.chooseColor{
		color: $orange;
	}
	.choosePrice{
		margin-left: 6rpx;
		display: flex;
		flex-direction: column;
	}
	.marT5{
		margin-top: 5rpx;
	}
	.marL64{
		margin-left: 64rpx;
	}
</style>
