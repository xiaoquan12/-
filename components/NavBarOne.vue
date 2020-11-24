<template>
	<view class="background" v-show="isOpenBox">
		<view class="mask" @click="closeIcon" v-show="isOpenBox"></view>
		<view class="openBox" :class="{ addWidth: isOpenBox, subWidth: !isOpenBox }">
			<view class="boxHead flex-allcenter relative borderB" @click="closeIcon" :style="{ 'padding-top': barHeight }">
				<image src="/static/images/closeIcon.png" class="closeIcon" mode="widthFix"></image>
				网站导航
			</view>
			<div v-for="(item, index) in typeList" @click="pressType(item.channelid)" class="buttonSon flex-allcenter" :key="index">{{ item.channelName }}</div>
			<view class="navBottom flex-rowCenter"><image :src="storeLogo" class="navIcon" mode="widthFix"></image></view>
			<view class="navBottomText flex-rowCenter">{{ storeDetail.COMPANYNAME }}</view>
		</view>
	</view>
</template>

<script>
const app = getApp();
const NAVS_ROUTES = ['pages/aboutMy/aboutMy', 'pages/phone/phone', 'pages/map/map', 'pages/leaveWorld/leaveWorld', 'pages/vr/vr'];
export default {
	props: {},
	data() {
		return {
			isOpenBox: null,
			typeList: null,
			storeLogo: null,
			storeDetail: null,
			barHeight: 0,
			barHeightNum: 0
		};
	},
	mounted() {
		this.subHeight = app.globalData.systemInfo.windowHeight / app.globalData.systemInfo.radio - 238;
		var _this = this;
		uni.getSystemInfo({
			success: res => {
				console.log('res', res);
				//处理自定义头部的高度问题
				var k = parseInt(res.statusBarHeight) + 2;
				_this.barHeight = k / app.globalData.systemInfo.radio + 'rpx';
				_this.barHeightNum = k / app.globalData.systemInfo.radio;
			}
		});
		this.getProductSwipe();
		this.getStoreIcon();
	},
	methods: {
		//获取企业logo
		getStoreIcon() {
			this.$api.common
				.get('/api/json/config/config.ashx?action=config', {})
				.then(res => {
					this.storeLogo = 'https:' + res.webLogo;
					this.storeDetail = res;
					console.log(res);
				})
				.catch(err => {
					console.log(err);
				});
		},
		pressType(id) {
			const currentPage = getCurrentPages();
			const pageIndex = NAVS_ROUTES.filter((item, index) => {
				return item == currentPage[currentPage.length - 1].route;
			});
			console.log('id', id);
			switch (Number(id)) {
			    case 0:
			    	this.$common.redirect('/pages/index/index', true);
			    	break;
				case 100:
					this.$common.redirect('/pages/aboutMy/aboutMy', true);
					break;
				case 101:
					this.$common.redirect('/pages/index/newList', true);
					break;
				case 102:
				    this.$common.redirect('/pages/index/productList', true);
					break;
				case 103:
				    this.$common.redirect('/pages/leaveWorld/leaveWorld', true);
					break;
				case 105:
				   this.$common.redirect('/pages/index/exampleList', true);
					break;
				case 104:
				    this.$common.redirect('/pages/index/connectMy', true);
					break;
			}
		},
		closeIcon() {
			this.isOpenBox = false;
			// setTimeout(res=>{
			// 	this.isOpenBox=false;
			// },1000)
		},
		//获取产品展示
		getProductSwipe() {
			return new Promise((resolve, reject) => {
				this.$api.common
					.get('/api/json/channel/channel.ashx?action=channel', {})
					.then(res => {
						// unshift
						res.list.unshift({
							channelName:"网站首页",
							channelid:0
						})
						this.typeList = res.list;
						resolve(res);
						console.log(res);
					})
					.catch(err => {
						reject(err);
						console.log(err);
					});
			});
		}
	}
};
</script>

<style>
.navBottom {
	position: absolute;
	bottom: 102rpx;
	width: 100%;
}
.navIcon {
	width: 228rpx;
	height: 104rpx;
}
.navBottomText {
	position: absolute;
	bottom: 66rpx;
	width: 100%;
	text-align: center;
	font-size: 24rpx;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: #959595;
}
.buttonSon {
	width: 100%;
	height: 90rpx;
	font-size: 32rpx;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: #666666;
}
.closeIcon {
	position: absolute;
	left: 44rpx;
	width: 22rpx;
	display: inline-block;
	vertical-align: middle;
}
.openBox {
	position: fixed;
	top: 0;
	left: 750rpx;
	width: 630rpx;
	height: 100%;
	z-index: 10001;
	background-color: #ffffff;
	overflow: hidden;
}
.boxHead {
	width: 100%;
	height: 80rpx;
	font-size: 36rpx;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: #000000;
	padding: 23rpx 0;
}
.addWidth {
	left: 120rpx;

	transition: left 1s ease;
}
.subWidth {
	left: 750rpx;
	transition: left 1s ease;
}
</style>
