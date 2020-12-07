<template>
	<view class='flex shop'  :style="{'width':config.width+'rpx','height':config.height+'rpx'}">
		<image src="../static/images/my_dfk.png" :style="{'width':config.imgWidth+'rpx','height':config.imgHeight+'rpx'}" class='shopLeft' mode="aspectFill"></image>
		<view class="shopRight flex1 relative">
		    <view class="shopName line">
		    	MAHOU马傲五星啤酒西…
		    </view>
			<view class="shopDescript marT10 line">
				23:00前下单，预计明天到达
			</view>
			<view class="shopBottom">
			    <view class="shopPrice">
			    	¥118/瓶
			    </view>
				<view class="shopButtomButton flex-allcenter" v-if='config.isAddCart'>
					+
				</view>
				<view class="shopButtomRight flex-verCenter" v-if='config.isAddNum'>
					<view class="shopNumButton flex-allcenter" @click='subNum'>
					     -
					</view>
					<view class="shopNum">
					     {{buyNum}}
					</view>
					<view class="shopNumButton flex-allcenter" @click='addNum'>
					     +
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			config: Object,
			shopMsg:Object
		},
		data() {
			return {
				buyNum:1
			};
		},
		methods:{
			addNum(){
				this.buyNum +=1;
				this.$emit("add", this.buyNum)
			},
			subNum(){
				if(this.buyNum!=1){
					this.buyNum -=1;
				    this.$emit("sub", this.buyNum)
				}
			}
		}
	}
</script>

<style lang="scss">
   .shopView{
	  
   }
   .shopLeft{
	   margin-left: 24rpx;
	   margin-right: 16rpx;
   }
   .shopDescript{
	   width: 100%;
	   font-size: 24rpx;
	   font-family: PingFangSC-Regular, PingFang SC;
	   font-weight: 400;
	   color: #999999;
   }
   .shopName{
	   width: 100%;
	   font-size: 28rpx;
	   font-family: PingFangSC-Regular, PingFang SC;
	   font-weight: 400;
	   color: #333333;
   }
   .shopPrice{
	   font-size: 24rpx;
	   font-family: PingFangSC-Semibold, PingFang SC;
	   font-weight: 600;
	   color: #FF7F7F;
   }
   .shopButtomButton{
	   width: 32rpx;
	   height: 32rpx;
	   background: #2B2C3E;
	   border-radius: 50%;
	   color: #ffffff;
   }
   .shopButtomRight{
	   font-size: 28rpx;
	   font-family: PingFangSC-Semibold, PingFang SC;
	   font-weight: 600;
	   color: #333333;
   }
   .shopNumButton{
	   border-radius: 50%;
	   color: #aaaaaa;
	   width: 44rpx;
	   height: 44rpx;
	   background: #F5F5F5;
   }
   .shopNum{
	   padding: 0 32rpx;
   }
   .shop{
	   background-color: #ffffff;
   }
   .shopBottom{
	   position: absolute;
	   bottom: 0;
	   left: 0;
	   width: 100%;
	   display: flex;
	   justify-content: space-between;
	   align-items: center;
   }
</style>
