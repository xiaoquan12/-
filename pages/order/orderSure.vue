<template>
	<view class='borderT flex-conDirection'>
		<view class="width686 marT30 orderTitle">
			您需要我们送到哪里
		</view>
		<view  @click='addAddress()' class="width686 marT30 flexbetween paddingB20 borderB flex-verCebter">
			<view class="addressText">添加收货地址</view>
			<view class="addressIcon">></view>
		</view>
		<view class="width686 marT20 flexbetween paddingB30 flex-verCerter">
			<view class="addressText">选择快递</view>
			<view class="addressIcon">></view>
		</view>
		<view class="nullView">
		</view>
		<view class="width686 marT30 orderTitle">
			您需要我们送到哪里
		</view>
		<view class="width686 marT20 flexbetween flex-verCerter">
			<view class="addressText">选择快递</view>
			<view class="orderRight">￥188</view>
		</view>
		<view class="width686 marT20 flexbetween flex-verCerter">
			<view class="addressText">运费</view>
			<view class="orderRight">包邮</view>
		</view>
		<view class="width686 marT20 flexbetween flex-verCerter paddingB20 borderB">
			<view class="addressText">优惠</view>
			<view class="orderRight">暂无优惠</view>
		</view>
		<view class="width686 marT20 flexbetween flex-verCerter paddingB20">
			<view class="addressText">商品合计</view>
			<view class="shopPrice">￥188</view>
		</view>
		<view class="nullView">
		</view>
		<view class="p32 bgWhite width686">
			<view class="payType">
				再次选择支付方式，重新支付：
			</view>
			<view class="flex-column-center types">
				<radio-group name="" class="flex-column-center">
					<label>
						<view class="">
							<image src="../../static/images/my_jfdd.png" mode="aspectFill"></image>
							<text>微信支付</text>
						</view>
						<radio value="weixin" />
					</label>
					<label>
						<view class="">
							<image src="../../static/images/my_jfdd.png" mode="aspectFill"></image>
							<text>支付宝支付</text>
						</view>
						<radio value="zhifubao" />
					</label>
				</radio-group>
			</view>
		</view>
		<view class="shopView flex-conDirection">
			<view class="width686 marT30 orderTitle">
				您的商品清单
			</view>
			<view class="marT20">
				<rowShop :config='config'></rowShop>
			</view>
		</view>
	    <view class="bottomButton flex-verCenter">
	    	<view class="bottomLeft marL30">￥188</view>
			<view class="payButton flex-allcenter">马上结算</view>
	    </view>
	</view>
</template>

<script>
	import rowShop from "@/components/rowShop.vue"
	export default {
		components:{
			rowShop
		},
		data() {
			return {
				config:{
					width:686,
					height:200,
					imgWidth:200,
					imgHeight:200
				}
			};
		},
		methods:{
			addAddress(){
				this.$common.redirect("/pages/order/shippingAddress")
			}
		}
	}
</script>

<style lang="scss">
	.shop{
		padding: 24rpx 0!important;
	}
	.addressText{
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
	}
	.addressIcon{
		color: #aaaaaa;
		width: 15rpx;
		height: 26rpx;
	}
	.nullView{
		width: 750rpx;
		height: 10rpx;
background: #F6F6F6;
	}
	.orderRight{
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
	}
	.shopPrice{
		font-size: 40rpx;
		font-family: DIN-BlackItalic, DIN;
		font-weight: normal;
		color: #FF7F7F;
	}
	.orderTitle{
		font-size: 40rpx;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: #333333;
	}
	.payTitle{
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #9FA2AA;
	}
	.bottomButton{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 750rpx;
		height: 98rpx;
		background-color: #ffffff;
		z-index: 10;
	}
	.payButton{
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
	.shopView{
		padding: 30rpx 0 148rpx 0;
	    width: 750rpx;
        background: #F6F6F6;
	}
	.bottomLeft{
		font-size: 40rpx;
		font-family: DIN-BlackItalic, DIN;
		font-weight: normal;
		color: #FF7F7F;
	}
   .width686{
	   width: 686rpx;
   }
   .payType {
   
   	font-size: 24rpx;
   	font-family: PingFangSC-Regular, PingFang SC;
   	font-weight: 400;
   	color: #9FA2AA;
   
   }
   .types {
   
   	font-size: 28rpx;
   	font-family: PingFangSC-Regular, PingFang SC;
   	font-weight: 400;
   	color: #333333;
   
   	label {
   		display: flex;
   		justify-content: space-between;
   		padding: 32rpx 0;
   
   		image {
   			height: 48rpx;
   			width: 48rpx;
   			margin-right: 16rpx;
   			border-radius: 50%;
   		}
   	}
   
   	label:first-child {
   		border-bottom: 1rpx solid #F6F6F6;
   	}
   
   
   	label:last-child {
   		padding-bottom: 0;
   	}
   
   	radio {
   		transform: scale(0.7);
   	}
   }
</style>
