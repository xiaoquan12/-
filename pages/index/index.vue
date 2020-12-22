<template>
	<view class="flex-conDirection paddingB40">
		<view class="flex-conDirection headSreach">
			<VSearch></VSearch>
		</view>
		<swiper class='width686 headSwiper' :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for='(item,index) in [1,1,1]' :key='index'>
				<image src="../../static/images/my_dfk.png" class='background' mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<view class="width686 titleText">热门酒类</view>
		<view class="width686 flexbetween">
			<block v-for='(item,index) in [1,1,1]' :key='index'>
				<block v-if='index==0'>
					<VerticalShop  @turnDetail='turnDetail' :styles='styles' isOne='true'></VerticalShop>
				</block>
				<block v-if='index==1'>
					<VerticalShop  @turnDetail='turnDetail' :styles='styles' isTwo='true'></VerticalShop>
				</block>
				<block v-if='index==2'>
					<VerticalShop  @turnDetail='turnDetail' :styles='styles' isThree='true'></VerticalShop>
				</block>
			</block>
		</view>
		<image src="/static/images/my_dfk.png" class='width686 headImg' mode="aspectFill"></image>
		<view class="marT50 allView width686">
			<view class="allText floatL">所有酒类</view>
			<image src="/static/images/my_dfk.png" class='checkIcon floatR'  mode="widthFix"></image>
			<view class="checkText floatR marR10">查看全部</view>
		</view>
		<view class="width686 marT30 flexbetween relative flex-wrap">
			<block v-for='(item,index) in allShop' :key='index'>
			     <VerticalShop @turnDetail='turnDetail' :styles='(index==0||index==1)?stylesAll:stylesAllT'></VerticalShop>
			</block>
		</view>
	</view>
</template>
<script>
	import VSearch from '@/components/Search';
	import VerticalShop from '@/components/verticalShop';
	export default {
		components:{
			VSearch,
			VerticalShop
		},
		data() {
			return {
				title: 'Hello',
				styles:{
					width:216
				},
				stylesAll:{
					width:332,
				},
				stylesAllT:{
					width:332,
					marT:24
				},
				allShop:[{
					
				},{
					
				},{
					
				}]
			}
		},
		onLoad() {
            //接口请求实例
		    this.example().then(res=>{
				console.log("111");
			}).catch(err=>{
				console.log("err",err);
			})
		},
		methods: {
			//
			example(){
				return new Promise((resolve, reject) => {
					this.$api.common
						.get('/plus/qkk/list/v3.0/quanjinwa.ashx?action=videolist', {
							city: '九江市',
							channelid: channelid,
							classid: classid ? classid : 0,
							elite: elite ? elite : 0,
							specialid: specialid ? specialid : 0,
							pageindex: pageindex,
							pagesize: pagesize
						})
						.then(res => {
							resolve(res);
						})
						.catch(err => {
							reject(err);
						});
				});
			},
            turnDetail(){
				this.$common.redirect("/pages/index/shopDetail")
			}
		}
	}
</script>

<style>
	page{
	    background: #F6F6F6;
	}
	.headImg{
		height: 200rpx;
		padding: 32rpx 0 48rpx 0;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}
     .headSwiper{
		 margin-top: 24rpx;
		 height: 344rpx;
	 }
	.text-area {
		display: flex;
		justify-content: center;
	}
    .titleText{
		padding: 48rpx 0 32rpx 0;
		font-size: 40rpx;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
        color: #42454F;
	}
	.allText{
		font-size: 40rpx;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: #42454F;
	}
	.checkIcon{
		position: relative;
		top: 6rpx;
		width: 12rpx;
		height: 22rpx;
	}
	.headSreach{
		background-color: #ffffff;
		width: 750rpx;
		height: 100rpx;
	}
	.checkText{
		font-size: 24rpx;
		font-family: PingFangSC;
		color: #999999;
	}
	.allView{
	    height: 36rpx;
		line-height: 36rpx;
	}
	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
