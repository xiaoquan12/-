<!--商品详情-->
<template>
	<div>
		<load-view ref="loadview"></load-view>
		<!--head-->
		<!-- <div class="spike-head">
      <div class="spike-head-reBack">
        <image src="../../static/images/right-b.png" />
      </div>
      <div class="spike-head-tit">商品详情</div>
      <div class="spike-head-reBack"></div>
    </div> -->
		<!---->
		<div class="de-swiper">
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="(item, index) in content.imagesAll" :key="index"><image :src="item" mode="" /></swiper-item>
			</swiper>
		</div>
		<!--tit-->
		<view class="storeBranch flex" v-if="shopBranch" @click="turnDetail(shopBranch)">
			<image class="leftBranch" :src="shopBranch.GsPic" mode="aspectFill"></image>
			<view class="flex1 relative">
				<view class="branchName">{{ shopBranch.GsName }}</view>
				<view class="colorGray flex-verCenter">
					<comment-rate :ratenum="shopBranch.GsStart" />
					<view class="marL20">{{ shopBranch.GsStart }}.0</view>
				</view>
				<view class="branchLabel">
					<view class="floatL colorGray">{{ shopBranch.GsLabel }}</view>
					<view class="floatR checkButton flex-allcenter">进店查看</view>
				</view>
			</view>
		</view>

		<div class="de-tit">{{ content.title }}</div>
		<block v-if="type == 2"></block>
		<block v-else>
			<div class="de-integral" v-if="typeBottom == 2">10个积分兑换</div>
			<div class="de-endTime" v-if="typeBottom == 1">
				距离结束：
				<div class="spike-time">
					<view>{{ overMsg.d }}</view>
					天
					<view>{{ overMsg.h }}</view>
					时
					<view>{{ overMsg.m }}</view>
					分
					<view>{{ overMsg.s }}</view>
					秒
				</div>
			</div>
			<div class="de-integral" v-if="typeBottom == 0">活动已经结束</div>
		</block>
		<!--兑换积分总数-->
		<!-- <div class="de-integral" v-if='type==2'>10个积分兑换</div> -->
		<!--距离结束-->
		<!-- <div class="de-endTime">
			距离结束：
			<div class="spike-time">
				<view>00</view>天
				<view>00</view>时
				<view>00</view>分
				<view>00</view>秒
			</div>
			结束</div> -->

		<!--积分-->
		<!-- <div class="de-inte">
			<view class="de-inteTit">积分:</view>
			<view class="de-inteNum">10</view>
			<view class="de-inteOld">￥599</view>
			<view class="de-stock">库存：22</view>
		</div> -->
		<!--价格-->
		<div class="de-inte">
			<view class="de-intePrice">{{ chooseRealMsg.shop_attribute_price }}</view>
			<view class="de-inteOld">{{ chooseRealMsg.shop_attribute_price2 }}</view>
			<view class="de-stock">销量 {{ shopPriceMsg.sales }}</view>
		</div>

		<view class="nullView" v-if="shopPriceMsg.salesList && shopPriceMsg.salesList.length > 0"></view>
		<div class="de-spec" v-if="shopPriceMsg.salesList && shopPriceMsg.salesList.length > 0" @click="turnBuyUser">
			<view class="de-specName">已购</view>
			<scroll-view class="de-usersItem flex-verCenter" scroll-x="true">
				<image :src="item.memberFace" class="userImg" :class="{ marL20: index != 0 }" v-for="(item, index) in shopPriceMsg.salesList" :key="index" />
			</scroll-view>
			<div class="de-usersMore"><image src="../../static/images/right-b.png" /></div>
		</div>
		<view class="nullView" v-if="shopPriceMsg.salesList && shopPriceMsg.salesList.length > 0"></view>
		<!--已购买用户-->
		<!-- <div class="de-users" v-if="shopPriceMsg.salesList && shopPriceMsg.salesList.length > 0">
			<p class="de-users-tit">已购买用户</p>
			<div class="de-usersBox" @click="turnBuyUser">
				<div class="de-usersCase">
					<div class="de-usersItemBox">
						<scroll-view class="de-usersItem" scroll-x="true">
							<image :src="item.memberFace" v-for="(item, index) in shopPriceMsg.salesList" :key="index" />
						</scroll-view>
					</div>
				</div>
				<div class="de-usersMore"><image src="../../static/images/right-b.png" /></div>
			</div>
		</div> -->
		<!-- <div class="de-spec borderB0 flex-verCenter" style="line-height: 30rpx;" @click="show">
			<view class="de-specName">优惠：</view>
			<view class="jianText">满减</view>
			<view class="mjText marL10">满188减10元</view>
			<image class="de-usersMore1" src="../../static/images/right-b.png" style='right: 40rpx;' mode="widthFix" />
		</div> -->
		<div class="de-spec borderB0" @click="show" v-if="type == 2">
			<view class="de-specName">已选：</view>
			<view class="de-specTit">
				已选:
				{{
					shopPriceMsg.shop_attribute[index0].shop_attribute_xh + (shopTitle[1] ? shopPriceMsg.shop_attribute[index0].shop_attribute_data[index1].shop_attribute_gg : '')
				}}
			</view>
			<div class="de-usersMore"><image src="../../static/images/right-b.png" /></div>
		</div>
		<div class="de-chooseNum" v-else>
			<div class="de-chooseTit">选择数量</div>
			<div class="de-chooseBox">
				<view class="de-chooseLess" @click="sub">-</view>
				<view class="">{{ buyNum }}</view>
				<!-- <input class="de-chooseInput" type="text" value="1"> -->
				<view class="de-chooseAdd" @click="add">+</view>
			</div>
		</div>
		<!--规格-->
		<div class="de-spec" @click="$common.redirect('/pages/specialty/specialList')">
			<view class="de-specName">送至：</view>
			<view class="de-specTit">
				{{ defaultAdress ? defaultAdress.addressProvince + defaultAdress.addressCity + defaultAdress.addressArea + defaultAdress.addressXX : '' }}
			</view>
			<div class="de-usersMore"><image src="../../static/images/right-b.png" /></div>
		</div>

		<!--用户评价-->
		<div class="de-assess">
			<div class="de-assess-tit" @click="$common.redirect('/pages/specialty/appraisal?id=' + shopId)">
				<view>用户评价</view>
				<view class="chackQuestion">查看全部</view>
				<image class="rightIcon" src="/static/images/right-b.png" mode="widthFix"></image>
			</div>
			<block v-if="evaluteList && evaluteList.length > 0">
				<div class="de-assess-li" v-if="index <= 1" v-for="(item, index) in evaluteList" :key="item.cid">
					<view class="flex">
						<div class="de-assess-user"><image :src="item.memberFace" /></div>
						<div class="de-assess-info">
							<div class="de-assess-infoUser">
								{{ item.commentName }}
								<view>{{ item.commentTime }}</view>
							</div>
							<div class="de-assess-infoP">{{ item.commentContent }}</div>
						</div>
					</view>
					<view class="imgView flex" v-if="item.commentImages && item.commentImages.length > 0">
						<image
							class="imgCommon"
							@click.stop="preview(index1, item.commentImages)"
							:class="{ marL0: index1 == 0 }"
							mode="aspectFill"
							:src="item1"
							v-for="(item1, index1) in item.commentImages"
							:key="index1"
						></image>
					</view>
				</div>
			</block>
			<block v-else>
				<view class="marT30 noPingJia flex-allcenter paddingB30">
					<image src="/static/images/jixing.png" mode="widthFix" style="width:28rpx"></image>
					<view class="font28 colorsWu">暂无评价~</view>
				</view>
			</block>
		</div>
		<!--商品问问-->
		<div class="de-ask">
			<div class="de-assess-tit" @click="checkAll">
				<view>商品问问</view>
				<view class="chackQuestion">查看全部回答</view>
				<image class="rightIcon" src="/static/images/right-b.png" mode="widthFix"></image>
			</div>
			<div class="de-askBox">
				<div class="de-ask-li" v-for="item in userCommon" :key="item.cid">
					<view class="de-ask-icon red">问</view>
					<div class="de-ask-tit ellipsis">{{ item.commentContent }}</div>
					<div class="de-ask-aplay">{{ item.commentStatus == 2 ? '已回复' : '待回复' }}</div>
				</div>
				<div class="de-askQuiz" @click="askQuestion">
					<view>商品好不好问问大家？</view>
					<view class="questionView">去提问</view>
				</div>
			</div>
		</div>
		<view class="nullView" v-if="shopBranch"></view>
		<view class="storeVr flex relative" v-if="shopBranch" @click="turnVr">
			<image class="storeIcon" :src="shopBranch.GsPic" mode=""></image>
			<view class="flex1 relative storeCenter">
				<view class="headText">{{ shopDetail.GsName }}</view>
				<view class="bottomText">{{ shopDetail.GsAddress }}</view>
			</view>
			<view class="vrButton flex-allcenter">商家VR实景</view>
		</view>
		<view class="nullView" v-if="shopBranch"></view>
		<view class="titleText">商品详情</view>
		<!-- <div class="de-assess-tit" >
			<view>用户评价</view>
		</div> -->
		<!--产品详情-->
		<!-- <rich-text :nodes="content.content"></rich-text> -->
		<div class="de-detail">
			<block v-if="content"><rich-text :nodes="content.content"></rich-text></block>
			<!-- <div class="de-assess-tit">
				<view>产品详情</view>
				<view></view>
			</div>
			<div class="de-detail-info">
				<div class="de-detail-li" v-for="item in detailLi" :key="item.id">
					<view class="name">{{item.dname}}</view>
					<view class="tit"><view>200</view>{{item.dtit}}</view>
				</div>
			</div> -->
		</div>
		<!--foot-->
		<div class="de-foot">
			<div class="de-footBox">
				<div class="de-footLike" @click="collectShop(shopId)">
					<block v-if="typeBottom == 2 || typeBottom == 1">
						<image src="../../static/images/indexStatic/like.png" v-if="!jsFenCollect" />
						<image src="../../static/images/indexStatic/like-active.png" v-else />
					</block>
					<block v-else>
						<image src="../../static/images/indexStatic/like.png" v-if="!shopPriceMsg.collection" />
						<image src="../../static/images/indexStatic/like-active.png" v-else />
					</block>
				</div>
				<block v-if="type != 2">
					<block v-if="isLogin">
						<div class="de-footBtn" v-if="typeBottom == 1" @click.stop="turnBuy()">开始抢购</div>
						<div class="de-footBtn" v-if="typeBottom == 0" @click.stop="turnBuy()">活动结束</div>
						<div class="de-footBtn" v-if="typeBottom == 2" @click.stop="turnBuy()">立即兑换</div>
					</block>
					<block v-else>
						<div class="de-footBtn" v-if="typeBottom == 1" @click.stop="">
							开始抢购
							<wx-login-button @success="turnBuy()"></wx-login-button>
						</div>
						<div class="de-footBtn" v-if="typeBottom == 0" @click.stop="">
							活动结束
							<wx-login-button @success="turnBuy()"></wx-login-button>
						</div>
						<div class="de-footBtn" v-if="typeBottom == 2" @click.stop="">
							立即兑换
							<wx-login-button @success="turnBuy()"></wx-login-button>
						</div>
						<!-- <div class="de-pop-btn" @click.stop=''>
							确定
							<wx-login-button @success="turnBuy()"></wx-login-button>
						</div> -->
					</block>
				</block>
				<block v-else><div class="de-footBtn" @click="show">立即购买</div></block>
			</div>
		</div>
		<!--背景-->
		<div class="popBack" v-show="showPop" @click="close"></div>
		<!--弹层-->
		<div class="de-pop" v-show="showPop">
			<div class="de-pop-info">
				<div class="de-pop-infoImg"><image :src="content.images" /></div>
				<div class="de-pop-infoText">
					<view class="de-pop-title">{{ content.title }}</view>
					<p class="de-pop-p">{{ chooseRealMsg.shop_attribute_price2 }}</p>
					<p class="de-pop-price">{{ chooseRealMsg.shop_attribute_price }}</p>
				</div>
				<div class="de-pop-close" @click="close"><image src="../../static/images/delete-01.png" /></div>
			</div>
			<div class="de-pop-choose">
				<!-- <div class="de-pop-choose-li" v-for='(item,index) in shopTitle' :key='index'>
					<p class="de-pop-choose-tit">{{item}}</p>
					<div class="de-pop-choose-box">
						<view class="de-pop-choose-item"  v-for='(item1,index1) in shopPriceMsg.shop_attribute'>{{item1.shop_attribute_xh}}</view>
					</div>
				</div> -->
				<div class="de-pop-choose-li" v-if="shopTitle[0]">
					<p class="de-pop-choose-tit">{{ shopTitle[0] }}</p>
					<div class="de-pop-choose-box">
						<view
							class="de-pop-choose-item"
							@click="chooseValue(0, index)"
							:class="{ active: index0 == index }"
							:key="index"
							v-for="(item, index) in shopPriceMsg.shop_attribute"
						>
							{{ item.shop_attribute_xh }}
						</view>
					</div>
				</div>
				<div class="de-pop-choose-li" v-if="shopTitle[1]">
					<p class="de-pop-choose-tit">{{ shopTitle[1] }}</p>
					<div class="de-pop-choose-box">
						<view
							class="de-pop-choose-item"
							@click="chooseValue(1, index)"
							:class="{ active: index1 == index }"
							:key="index"
							v-for="(item, index) in shopPriceMsg.shop_attribute[index0].shop_attribute_data"
						>
							{{ item.shop_attribute_gg }}
						</view>
					</div>
				</div>
				<div class="de-pop-choose-li">
					<div class="de-pop-choose-num">
						<div class="de-pop-choose-numTit">库存：{{ chooseRealMsg.shop_attribute_stock }}</div>
						<div class="de-chooseBox">
							<view class="de-chooseLess" @click="sub">-</view>
							<view class="de-chooseInput">{{ buyNum }}</view>
							<!-- <input class="de-chooseInput" type="text" value="1"> -->
							<view class="de-chooseAdd" @click="add">+</view>
						</div>
					</div>
				</div>
			</div>
			<!-- <div class="de-pop-btn" @click="turnBuy">确定</div> -->
			<block v-if="isLogin"><div class="de-pop-btn" @click.stop="turnBuy()">确定</div></block>
			<block v-else>
				<div class="de-pop-btn" @click.stop="">
					确定
					<wx-login-button @success="turnBuy()"></wx-login-button>
				</div>
			</block>
		</div>
	</div>
</template>
<script>
import WxLoginButton from '@/components/WxLoginButton';
import CommentRate from '@/components/CommentRate';
import LoadView from '@/components/LoadView.vue';
import parseHtml from '@/utils/parseHtml.js';
export default {
	components: {
		WxLoginButton,
		CommentRate,
		LoadView
	},
	data() {
		return {
			shopDetail: null,
			defaultAdress: null,
			jsFenCollect: null,
			shopId: null,
			evaluteList: null,
			userCommon: null,
			shopBranch: null,
			overMsg: {},
			overTime: null,
			typeBottom: null,
			shopId: null,
			buyNum: 1,
			//初始化选择的实体数据
			chooseRealMsg: null,
			index0: 0,
			index1: 0,
			shopTitle: [],
			comentList: null,
			content: null,
			shopPriceMsg: null,
			like: false,
			indicatorDots: true,
			autoplay: true,
			interval: 3000,
			duration: 500,
			swiper: [
				{
					swiperImg: '../../static/images/indexStatic/goods/detail.jpg'
				},
				{
					swiperImg: '../../static/images/indexStatic/goods/detail.jpg'
				}
			],
			list: [
				{
					img: '../../static/images/head/1.jpg',
					userName: '傅小小',
					time: '下午06:00',
					info: '语雀是一款优雅高效的在线文档编辑与协同工具， 让每个企业轻松拥有文档中心阿里巴巴集团内部使用多年，众多中小企业首选。'
				},
				{
					img: '../../static/images/head/2.jpg',
					userName: '傅小小',
					time: '2018年08月08日',
					info: '语雀是一款优雅高效的在线文档编辑与协同工具， 让每个企业轻松拥有文档中心阿里巴巴集团内部使用多年，众多中小企业首选。'
				}
			],
			ask: [
				{
					askTit: '这个纪念物可以洗吗？我很想知道可不可以水洗呢。',
					askReply: '1'
				},
				{
					askTit: '可以包邮到家吗',
					askReply: '1'
				}
			],
			showPop: false,
			type: 1,
			detailLi: [
				{
					dname: '品牌',
					dtit: '泽道'
				},
				{
					dname: '分类',
					dtit: '生茶'
				},
				{
					dname: '商品名称',
					dtit: '泽道 游云南诚选.曼松贡茶'
				},
				{
					dname: '品类',
					dtit: '普洱生茶'
				},
				{
					dname: '单位',
					dtit: '饼'
				}
			]
		};
	},
	// filters: {
	// 	toFixed(value) {
	// 		return value.toFixed(1);
	// 	}
	// },
	computed: {
		isLogin() {
			return this.$store.getters.isLogin;
		}
	},
	filters: {
		splitHeadImg(img) {
			return img.split(',');
		},
		/**
		 * 处理富文本里的图片宽度自适应
		 * 1.去掉img标签里的style、width、height属性
		 * 2.img标签添加style属性：max-width:100%;height:auto
		 * 3.修改所有style里的width属性为max-width:100%
		 * 4.去掉<br/>标签
		 * @param html
		 * @returns {void|string|*}
		 */
		formatRichText(html) {
			//控制小程序中图片大小
			if (html) {
				let newContent = html.replace(/<img[^>]*>/gi, function(match, capture) {
					match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
					match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '');
					match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
					return match;
				});
				newContent = newContent.replace(/style="[^"]+"/gi, function(match, capture) {
					match = match.replace(/width:[^;]+;/gi, 'max-width:100%;').replace(/width:[^;]+;/gi, 'max-width:100%;');
					return match;
				});
				newContent = newContent.replace(/<br[^>]*\/>/gi, '');
				newContent = newContent.replace(/\<img/gi, '<img style="max-width:100%;height:auto;display:inline-block;margin:10rpx auto;"');
				return newContent;
			}
		}
	},
	onLoad(o) {
		console.log(o);
		this.shopId = o.id;
		this.type = o.type;
		this.typeBottom = o.typeBottom;
		if (this.typeBottom == 1) {
			this.overTime = o.overTime;
			this.startTimer();
		}
		this.shopId = o.id;
		this.getDetail(o.id);
		this.getShopPrice(o.id);
		this.getJiFen(o.id);
		// this.getShopComment({
		// 	id: o.id
		// });
		this.getCommon(o.id);
		this.getAskDetail(o.id);
		this.getTripList();
	},
	onShow() {
		if (uni.getStorageSync('chooseTrip')) {
			if (this.defaultAdress) {
				if (this.defaultAdress.addresslId != uni.getStorageSync('chooseTrip').addresslId) {
					this.defaultAdress = uni.getStorageSync('chooseTrip');
				}
			} else {
				this.defaultAdress = uni.getStorageSync('chooseTrip');
			}
			uni.removeStorageSync('chooseTrip');
		}
	},
	methods: {
		turnVr() {
			this.$common.redirect('/pages/tickets/ticketVr?src=' + this.shopDetail.GsVrLink);
		},
		getStoreDetail({ storeid, lng, lat }) {
			return new Promise((resolve, reject) => {
				this.$api.common
					.get('/plus/qkk/content/v3.0/content.ashx?action=storeinfo', {
						storeid: storeid,
						lng: lng ? lng : 0,
						lat: lat ? lat : 0
					})
					.then(res => {
						resolve(res);
						console.log(res);
					})
					.catch(err => {
						reject(err);
						console.log(err);
					});
			});
		},
		//获取常用旅客列表
		getTripList() {
			this.$api.common
				.get('/api/json/member/member.ashx?action=address', {})
				.then(res => {
					const defaultAdress = res.Delivery_AddressList.filter((item, index) => {
						return item.addressDefault;
					});
					if (defaultAdress && defaultAdress.length > 0) {
						this.defaultAdress = defaultAdress[0];
					}
					// defaultAdress
					// res.Delivery_AddressList.forEach((item,index)=>{

					// })
					// this.list = res.Delivery_AddressList;
					console.log(res);
				})
				.catch(err => {
					console.log(err);
				});
		},
		//获取积分兑换商品价格参数
		getJiFen(id) {
			this.$api.common
				.get('api/json/shop/shop.ashx?action=jfshopdata', {
					id
				})
				.then(res => {
					this.jsFenCollect = res.collection;
					console.log(res);
				})
				.catch(err => {});
		},
		checkCommon() {
			this.$common.redirect('/pages/specialty/appraisal?id=' + this.shopId);
		},
		preview(index, urls) {
			this.$ui.previewImage({
				current: index,
				urls: urls
			});
		},
		//获取商家分店部分信息
		getStoreBranch(storeid) {
			this.$api.common
				.get('/plus/qkk/content/v3.0/content.ashx?action=storesimpleinfo', {
					storeid: Number(storeid)
				})
				.then(res => {
					if (res.status) {
						this.shopBranch = res.content;
						this.getStoreDetail({
							storeid: this.shopBranch.GsId,
							lng: app.globalData.locate.lng ? app.globalData.locate.lng : 0,
							lat: app.globalData.locate.lat ? app.globalData.locate.lat : 0
						}).then(res => {
							this.shopDetail = res;
						});
					}
					console.log(res);
				})
				.catch(err => {
					console.log(err);
				});
		},
		startTimer() {
			if (new Date(this.overTime).getTime() - new Date().getTime() > 0) {
				const dateMsg = this.$common.countDown(new Date(), new Date(this.overTime), true);
				// console.log("dateMsg",dateMsg);
				this.$set(this.overMsg, 'd', dateMsg[0]);
				this.$set(this.overMsg, 'h', dateMsg[1]);
				this.$set(this.overMsg, 'm', dateMsg[2]);
				this.$set(this.overMsg, 's', dateMsg[3]);
				this.$set(this.overMsg, 'type', 1);
				// this.startTimer(this.overMsg, index);
			} else {
				this.$set(this.overMsg, 'd', '00');
				this.$set(this.overMsg, 'h', '00');
				this.$set(this.overMsg, 'm', '00');
				this.$set(this.overMsg, 's', '00');
				this.$set(this.overMsg, 'type', 0);
			}
			if (new Date(this.overTime).getTime() - new Date().getTime() > 0) {
				setTimeout(this.startTimer, 1000);
			}
		},
		onReady() {
			this.$refs.loadview.isShow = false;
		},
		getCommon(id) {
			this.$api.common
				.get('/api/json/common/common.ashx?action=commodityevaluation', {
					id: id
				})
				.then(res => {
					if (!this.isLoad) {
						// this.$refs.loadview.isShow = false;
					}
					if (res.list && res.list != 'null') {
						res.list.forEach((item, index) => {
							if (item.commentImages) {
								item.commentImages = this.$common.splitImg(item.commentImages);
							}
						});
						this.evaluteList = res.list;
					}
				})
				.catch(err => {
					console.log(err);
				});
		},
		//获取评论/咨询列表信息
		getAskDetail(id) {
			this.$api.common
				.get('/api/json/common/common.ashx?action=commentlist', {
					id: id
				})
				.then(res => {
					if (res.list && res.list != 'null') {
						//    res.list.forEach((item,index)=>{
						// 	item.memberFace=this.$common.splitImg(item.memberFace)
						// })
						this.userCommon = res.list;
						console.log(this.userCommon);
					}
				})
				.catch(err => {
					console.log(err);
				});
		},
		checkAll() {
			uni.setStorageSync('userCommon', this.userCommon);
			this.$common.redirect('/pages/specialty/askShow?title=' + this.content.title);
		},
		askQuestion() {
			this.$common.redirect('/pages/specialty/ask');
		},
		turnBuy() {
			const param = {
				id: this.shopId,
				s: this.buyNum,
				r: 1
				// h: this.chooseRealMsg.shop_attribute_hh
			};
			if (this.type == 2) {
				param.h = this.chooseRealMsg.shop_attribute_hh;
			}
			this.addCar(param);
		},
		//加入购物车
		addCar({ id, h, s, r }) {
			this.$api.common
				.get('/api/json/shop/shop.ashx?action=shoping', {
					id: id,
					s: s,
					r: r,
					h: h ? h : ''
				})
				.then(res => {
					// console.log("this.defaultAdress",this.defaultAdress);
					// console.log("this.defaultAdress.addresslId",this.defaultAdress.addresslId);
					console.log('res.errMsg', res);
					if (res.status == 10) {
						if (this.typeBottom == 2) {
							this.$common.redirect('/pages/specialty/integralCheck?id=' + res.CartId);
						} else {
							this.$common.redirect(
								'/pages/specialty/check?id=' + res.CartId + '&type=' + res.shopType + '&addresslId=' + (this.defaultAdress ? this.defaultAdress.addresslId : 0)
							);
						}
					}
					if (res.status == 1) this.$ui.showToast(res.errMsg);
				})
				.catch(err => {
					console.log(err);
				});
		},
		//内容收藏
		collectShop(id) {
			this.$api.common
				.get('/api/json/content/content.ashx?action=collection', {
					id: id
				})
				.then(res => {
					if (this.typeBottom == 2 || this.typeBottom == 1) {
						if (res.status == 1) this.jsFenCollect = 1;
						if (res.status == 2) this.jsFenCollect = 0;
					} else {
						if (res.status == 1) this.shopPriceMsg.collection = 1;
						if (res.status == 2) this.shopPriceMsg.collection = 0;
					}
				})
				.catch(err => {
					console.log(err);
				});
		},
		add() {
			this.buyNum += 1;
		},
		sub() {
			if (this.buyNum != 1) this.buyNum -= 1;
		},
		chooseValue(index, index1) {
			switch (index) {
				case 0:
					if (this.index0 != index1) {
						this.index0 = index1;
					}
					break;
				case 1:
					if (this.index1 != index1) {
						this.index1 = index1;
					}
					break;
			}
			this.chooseRealMsg = this.shopPriceMsg.shop_attribute[this.index0].shop_attribute_data[this.index1];
		},
		turnDetail(msg) {
			this.$common.redirect(`/pages/merchant/storeIn?id=${msg.GsId}`);
		},
		//获取评论/咨询列表信息

		//获取商品评价列表信息
		getShopComment({ id, level = '' }) {
			this.$api.common
				.get('/api/json/common/common.ashx?action=commodityevaluation', {
					id: id,
					level: level
				})
				.then(res => {
					this.comentList = res.list;
				})
				.catch(err => {
					console.log(err);
				});
		},
		turnBuyUser() {
			uni.setStorageSync('buyList', this.shopPriceMsg.salesList);
			this.$common.redirect('/pages/specialty/purchase');
		},
		//获取秒杀商品价格、评价、销量参数
		getShopPrice(id) {
			this.$api.common
				.get('/api/json/shop/shop.ashx?action=shopdata', {
					id: id
				})
				.then(res => {
					this.shopPriceMsg = res;
					this.shopTitle = [];
					if (res.shop_title1) {
						this.$set(this.shopTitle, 0, res.shop_title1);
					}
					if (res.shop_title2) {
						this.$set(this.shopTitle, 1, res.shop_title2);
					}
					this.chooseRealMsg = res.shop_attribute[0].shop_attribute_data[0];
					// this.shopTitle.push(res)
					// this.shopPriceMsg.shop_attribute.fo
				})
				.catch(err => {});
		},

		//获取内容详情
		getDetail(id) {
			this.$api.common
				.get('/api/json/content/content.ashx?action=content', {
					id: id
				})
				.then(res => {
					this.content = res.content[0];
					this.content.content = this.$common.formatRichText(this.content.content);
					if (!this.content.content instanceof Array) {
						this.content.content = parseHtml(this.content.contenDt);
					}
					// this.content.content = parseHtml(this.content.content);
					this.content.imagesAll = this.content.imagesAll.split(',');
					console.log('');
					if (this.content.StoreId) {
						this.getStoreBranch(this.content.StoreId);
					}
				})
				.catch(err => {
					console.log(err);
				});
		},
		/**
		 * 跳转购买页
		 * @author 空心科技-王效玉
		 * @date 2020-06-22
		 * @returns 无
		 */
		buy() {
			if (this.type == 1) {
				this.$common.redirect('/pages/specialty/integralCheck');
			} else {
				this.$common.redirect('/pages/specialty/check' + '&addresslId=' + this.defaultAdress ? this.defaultAdress.addresslId : 0);
			}
		},
		/**
		 * 显示规格选择框
		 * @author 空心科技-王效玉
		 * @date 2020-06-22
		 * @returns 无
		 */
		show() {
			this.showPop = !this.showPop;
		},
		/**
		 * 关闭规格选择框
		 * @author 空心科技-王效玉
		 * @date 2020-06-22
		 * @returns 无
		 */
		close() {
			this.showPop = false;
		}
	}
};
</script>
<style lang="scss">
.de-usersItem {
	border-radius: 0 !important;
}
.imgCommon {
	position: relative;
	width: 150rpx;
	height: 150rpx;
	margin-left: 20rpx;
	border-radius: 8rpx;
}

.imgView {
	margin-top: 20rpx;
	margin-left: 80rpx;
	flex-wrap: wrap;
}

.marL20 {
	margin-left: 15rpx;
}

.rate-list .rate-item image {
	width: 24rpx !important;
	height: 24rpx !important;
}

.checkButton {
	width: 160rpx;
	height: 40rpx;
	color: #fff;
	background: #5ebbff;
	font-size: 24rpx;
	margin-right: 20rpx;
	border-radius: 25rpx;
}

// <view class="storeBranch flex">
// 	<image class='leftBranch' :src="shopBranch.GsPic" mode="aspectFill"></image>
// 	<view class="flex1">

// 	</view>
// 	<view class="rightBranch">

// 	</view>
// </view>
.branchLabel {
	position: absolute;
	bottom: 10rpx;
	left: 0;
	width: 100%;
	height: 40rpx;
}

.branchName {
	margin-top: 10rpx;
	font-size: 28rpx;
	color: #000;
}

.storeBranch {
	width: 100%;
	height: 200rpx;
	background: #f5f5f5;
	margin-top: 10rpx;
}

.de-assess-li {
	flex-direction: column;
}

.leftBranch {
	width: 200rpx;
	height: 200rpx;
	margin-right: 20rpx;
}
.noPingJia {
	width: 100%;
	height: 50rpx;
}
.colorsWu {
	color: #999999;
}
.colorGray {
	color: #c3c3c3;
	font-size: 24rpx;
}

.de-specTit {
	font-size: 28rpx;

	color: #333333 !important;
}
.de-specName {
	font-size: 28rpx !important;
	color: #999999;
	padding-right: 32rpx !important;
}
.userImg {
	display: inline-block;
	width: 48rpx;
	height: 48rpx;
	bottom: 10rpx;
	position: relative;
	border-radius: 50%;
}
.de-usersItem {
	border-radius: 0 !important;
	width: 500rpx;
	height: 96rpx;
}
.nullView {
	width: 100%;
	height: 10rpx;
	background: #f6f6f6;
}
.mjText {
	font-size: 28rpx;

	color: #333333;
}
.jianText {
	background: rgba(255, 127, 127, 0.1);
	// opacity: 0.1047;
	font-size: 22rpx !important;
	color: #ff7f7f !important;
	padding: 4rpx;
	display: inline-block;
	// line-height:0 !important;
}
.de-usersMore1 {
	position: absolute;
	right: 32rpx;
	display: inline-block;
	vertical-align: middle;
	width: 15rpx;
}
.chackQuestion {
	font-size: 24rpx;
	color: #999999 !important;
}
.questionView {
	color: #ff7f7f !important;
	border: 2rpx solid #ff7f7f !important;
}
.rightIcon {
	width: 15rpx;
	margin-left: 18rpx;
}
.storeVr {
	width: 100%;
	height: 160rpx;
}
.storeIcon {
	margin-top: 32rpx;
	margin-left: 32rpx;
	margin-right: 16rpx;
	width: 96rpx;
	height: 96rpx;
}
.vrButton {
	position: absolute;
	right: 32rpx;
	top: 52rpx;
	width: 176rpx;
	height: 58rpx;
	border-radius: 29rpx;
	border: 2rpx solid #999999;

	font-size: 24rpx;

	color: #999999;
}
.headText {
	margin-top: 38rpx;
	font-size: 32rpx;

	color: #585b60;
}
.storeCenter {
	// flex-direction: column;
}
.bottomText {
	font-size: 24rpx;
	margin-top: 8rpx;
	color: #9fa2aa;
}
.titleText {
	padding: 32rpx 0;
	text-indent: 32rpx;
	font-size: 40rpx;
	font-weight: 700;
	color: #333333;
}
.borderB0 {
	border-bottom: 0 !important;
}
</style>
