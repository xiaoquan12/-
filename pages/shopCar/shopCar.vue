<template>
	<view class='flex-conDirection relative'>
		<view class="address">
			<image class='addressIcon floatL relative marL40' src="../../static/images/my_dfk.png" mode="widthFix"></image>
			<view class="addressText floatL marL10">北京市朝阳区来广营帝维系咖啡</view>
			<view class="addressButton floatR marR30" @click='editShop'>
				{{isEdit?"完成":"编辑"}}
		    </view>
		</view>
	    <view class='shopSon flex-verCenter' :class="{'marT20':index==0}" v-for="(item,index) in shopList" :key="index">
			<view class="chooseShop flex-alcenter" @click='chooseShops(item,index)'>
				<image src="../../static/images/my_dfk.png" v-show='item.isChoose' class='chooseIcon' mode="widthFix"></image>
			</view>
	    	<rowShop :config='config'></rowShop>
	    </view>
		<view class="buyView flex-verCenter">
			<view class="chooseShop flex-alcenter" @click='chooseAll'>
				<image src="../../static/images/my_dfk.png" v-show='isChooseAll' class='chooseIcon' mode="widthFix"></image>
			</view>
			<view class="chooseText marL10" @click='chooseAll'>
				全选
			</view>
			<view class="hejiText" v-show='!isEdit'>
				合计:
			</view>
			<view class="marL20 allPrice" v-show='!isEdit'>
				￥188
			</view>
			<view class="buyButton flex-allcenter" @click='buyButton'>
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
				isChooseAll:false,
				shopList:[{
					isChoose:false,
					id:0
				},{
					isChoose:false,
					id:1
				}],
				config:{
					width:650,
					height:200,
					imgWidth:200,
					imgHeight:200,
					isAddNum:true
				},
				chooseList:[]
			};
		},
		methods:{
			buyButton(){
				if(this.isEdit){
					this.$ui.showModal("是否删除所选").then(res=>{
						const waitSplice=[];
						this.shopList.forEach((item,index)=>{
							if(item.isChoose){
								const spliceIndex=this.chooseList.findIndex((itemS,indexS)=>{
									return item.id==itemS.id;
								})
								this.chooseList.splice(spliceIndex,1);
								waitSplice.push(index)
							}
						})
						console.log("waitSplice",waitSplice);
						waitSplice.forEach((item,index)=>{
							this.shopList.splice(0,1)
						})
					})
				}else{
					
				}
			},
			chooseAll(){
				this.isChooseAll=!this.isChooseAll;
				if(this.isChooseAll){
				    this.shopList.forEach((item,index)=>{
						item.isChoose=true;
					     this.chooseList.push(item);
					})
				}else{
					this.shopList.forEach((item,index)=>{
						item.isChoose=false;
					     this.chooseList.splice(index,1);
					})
				}
			},
			chooseShops(item,index){
				this.shopList[index].isChoose=!this.shopList[index].isChoose;
			    if(this.shopList[index].isChoose){
					this.chooseList.push(this.shopList[index])
				}else{
				    const findIndex=this.chooseList.findIndex(item=>{
						return item.id==this.shopList[index].id;
					})
					this.chooseList.splice(findIndex,1);
				}
				console.log("this.chooseList",this.chooseList);
			},
			editShop(){
				this.isEdit=!this.isEdit;
			}
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
