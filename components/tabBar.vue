<template>
	<!-- #ifdef MP-BAIDU||MP-WEIXIN -->
	<cover-view class="tabBar">
		<block v-for="(item,index) in tabBar" :key="index">
			<cover-view  class="relative tabSon" :class="{'active':item.url == currentPage,'flex-allcenter':index!=2,'tabbar_item':index!=2}"
			 @click="navTo(item,index)">
			    <block v-if='index==2'>
					<cover-view class="tabText" @click.stop="navTo(item,index)">{{item.text}}</cover-view>
				</block>
				<block v-else>
					<cover-image  class='tabIcon' :class="{'width42':index==0,'width40':index==1,'width34':index==3,'width48':index==4}" v-if="item.url == currentPage" :src="item.imgClick" mode="widthFix"></cover-image>
					<cover-image class='tabIcon' :class="{'width42':index==0,'width40':index==1,'width34':index==3,'width48':index==4}" v-else :src="item.imgNormal" mode="widthFix"></cover-image>
					<cover-view class="text">{{item.text}}</cover-view>
				</block>
			</cover-view>
			<cover-view class="tabView relative flex-allcenter" v-if='index==2'  @click.stop="navTo(item,index)">
			   <cover-image src="/static/images/VR2x.png" class='tabImg' mode="widthFix"></cover-image>
			</cover-view>
		</block>
	</cover-view>
	<!-- #endif -->
	<!-- #ifdef MP-ALIPAY||MP-TOUTIAO -->
	<div class="tabBar">
		<block v-for="(item,index) in tabBar" :key="index">
			<view class="tabView relative flex-allcenter" v-if='index==2'  @click="navTo(item,index)">
			   <image src="/static/images/VR2x.png" class='tabImg' mode="widthFix"></image>
			</view>
			<div  class="relative tabSon" :class="{'active':item.url == currentPage,'flex-allcenter':index!=2,'tabbar_item':index!=2}"
			 @click="navTo(item,index)">
			    <block v-if='index==2'>
					<div class="tabText" @click.stop="navTo(item,index)">{{item.text}}</div>
				</block>
				<block v-else>
					<image  class='tabIcon' :class="{'width42':index==0,'width40':index==1,'width34':index==3,'width48':index==4}" v-if="item.url == currentPage" :src="item.imgClick" mode="widthFix"></image>
					<image class='tabIcon' :class="{'width42':index==0,'width40':index==1,'width34':index==3,'width48':index==4}" v-else :src="item.imgNormal" mode="widthFix"></image>
					<div class="text">{{item.text}}</div>
				</block>
			</div>
		</block>
	</div>
	<!-- #endif -->
</template>

<script>
	const app=getApp()
    export default {
        props: {
            currentPage: {
                type: String,
                default: 'index'
            }
        },
        data() {
            return {
                tabBar: [{
                        url: 'index',
                        text: '首页',
                        imgNormal:'/static/images/home.jpg',
                        imgClick:'/static/images/home.jpg'
                    },
                    {
                        url: 'aboutMy',
                        text: '关于',
                        imgNormal:'/static/images/about282x.png',
                        imgClick:'/static/images/about282x.png'
                    },
                    {
                        url: 'vr',
                        text: '云展',
                        imgNormal:'/static/images/phone.png',
                        imgClick:'/static/images/phone.png'
                    }, {
                        url: 'map',
                        text: '地图',
                        imgNormal:'/static/images/map.png',
                        imgClick:'/static/images/map.png'
                    }, {
                        url: 'leaveWorld',
                        text: '留言',
                        imgNormal:'/static/images/world.png',
                        imgClick:'/static/images/world.png'
                    }
                ],
                level:''
                 
            };
        },mounted(){
            // let userlevel = uni.getStorageSync('level');
            // let _this = this;
            // if (userlevel== 1) {
            //     _this.tabBar.splice(3, 1);
            // } else {
            //     _this.tabBar.splice(1,1);
            //     _this.tabBar.splice(1,1);
            // }
        },
        created() {
            uni.hideTabBar({})
        },
        computed: {
            
        },
        methods: {
            navTo(item,index) {
				console.log("111");
                let _this = this;
                if (item.url !== _this.currentPage) {
                    var isUrl = `/pages/${item.url}/${item.url}`
                    const that = this;
					if(item.url=='vr'){
						uni.navigateTo({
							url: isUrl
						})
					}else{
						uni.switchTab({
						    url: isUrl
						})
					}
					console.log("isUrl",isUrl);
                } else {
                    /* this.$parent.toTop() */
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    //导航栏设置
    $isRadius:20upx; //左上右上圆角
    $isWidth:100vw; //导航栏宽度
    $isBorder:1px solid #eeeeee; //边框 不需要则设为0px
    $isBg:transparent; //背景
     
    // 选中设置
    $chooseTextColor:#ffffff; //选中时字体颜色
    $chooseBgColor:#1c1c1c; //选中时背景颜色 transparent为透明
 
    //未选中设置
	
    $normalTextColor:#ffffff; //未选中颜色
	cover-image {
		display: block !important;
		height: auto !important;
		overflow: visible!important;
		line-height: normal!important;
		pointer-events:none!important;
	}
	cover-view {
		background-color:transparent;
	    overflow: visible!important;
	    line-height: normal!important;
	    pointer-events:none!important;
		// white-space: ;: ;
	}
	.tabText{
		position: absolute;
		bottom: 14rpx;
        width: 100%;
		text-align: center;
		font-size: 28rpx;
	}
	.tabIcon{
		position: relative;
		bottom: 20rpx;
		display: block !important;
		overflow: visible !important;
		line-height: normal !important;
		pointer-events: none !important;
	}
	/* #ifndef MP-TOUTIAO */
	.tabIcon{
		height: auto !important;
	}
	/* #endif */
	.tabImg{
		position: absolute;
		top: 42rpx;
		left: 30rpx;
		width: 58rpx !important;
		display: block !important;
		overflow: visible !important;
		line-height: normal !important;
		pointer-events: none !important;
	}
	/* #ifndef MP-TOUTIAO */
	.tabImg{
		height: auto !important;
	}
	/* #endif */
	/* #ifdef MP-BAIDU */
	.tabImg{
		position: absolute;
		top: 30rpx;
		left: 16rpx;
		height: auto;
		width: 58rpx !important;
	}
	/* #endif */
	.tabView{
		position: absolute;
		overflow: visible!important;
		line-height: normal!important;
		pointer-events:none!important;
		bottom: 70rpx;
		left: 318rpx;
		width: 116rpx;
		height: 116rpx;
		background: #DAA044;
		border-radius: 50%;
		z-index: 10;
		border: 8rpx solid #ffffff;
	}
	/* #ifdef MP-BAIDU */
	.tabView{
		position: absolute;
		overflow: visible!important;
		line-height: normal!important;
		pointer-events:none!important;
		bottom: 70rpx;
		left: 315rpx;
		width: 90rpx;
		height: 90rpx;
		background: #DAA044;
		border-radius: 50%;
		z-index: 10!important;
		border: 18rpx solid #ffffff;
	}
	/* #endif */
	/* #ifdef MP-TOUTIAO */
	.tabView{
		left: 315rpx;
	}
	/* #endif */
	/* #ifdef MP-ALIPAY */
	.tabView{
		left: 310rpx;
	}
	/* #endif */
    .text{
		position: absolute;
		bottom: 14rpx;
		width: 100%;
		text-align: center;
		font-size: 28rpx;
	}
    .tabBar {
        width: $isWidth;
        height: 300rpx;
        position: fixed;
        bottom: 0upx;
        left: 0;
        right: 0;
        margin: 0 auto;
        z-index: 998;
        background-color: $isBg;
        color: $normalTextColor;
        // border-left: $isBorder;
        // border-top: $isBorder;
        // border-right: $isBorder;
        display: flex;
        justify-content: space-around;
		align-items: flex-end;
        box-sizing: border-box;
        overflow: visible!important;
        .tabbar_item {
            width: 25%;
            font-size: 28rpx;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
 
            &.active {
                /* border-left: $isBorder;
                border-top: $isBorder; */
                background: $chooseBgColor;
                color: $chooseTextColor;
            }
        }
        .tabSon{
			overflow: visible!important;
			width: 150rpx;
			height: 134rpx;
			background-color: #1c1c1c;
		}
		.width42{
			width: 42rpx;
		}
		.width40{
			width: 40rpx;
		}
		.width34{
			width: 34rpx;
		}
		.width48{
			width: 48rpx;
		}
        image {
            width: 36rpx;
            height: 36rpx;
            // margin-left: 5upx;
        }
    }
</style>