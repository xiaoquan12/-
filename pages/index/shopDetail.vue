<!-- 商品详情 -->
<template>
	<view>
		<view class="goods flex-column-center bb10">
			<view class="">
				<image src="../../static/images/jiu.png" mode="aspectFill" class="goods_img"></image>
			</view>
			<view class="flex bgWhite  name_wrap">
				<view class="name flex1">
					Vintara Red（干红/13度）百琪干红葡萄酒750ML/13度
				</view>
				<view class="collect flex-column-center ">
					<image :src="!isCollect?'../../static/images/icon_24＊24pt_shoucang_nor@2x.png':'../../static/images/icon_24＊24pt_shoucang_sel@2x.png'"
					 mode="aspectFill" @click="collectTap"></image>

					<text class="txt">收藏</text>
				</view>
			</view>
			<view class="price_wrap  bgWhite">
				<view class="flex flex-allcenter">
					<view class="price">
						￥118
					</view>
					<view class="price_unit">
						/瓶
					</view>
					<view class="market_price">
						市场价：¥288
					</view>
				</view>
				<view class="xiaoliang">
					月销量23433
				</view>
			</view>
		</view>
		<view class="goods_i bb10" style="padding: 24rpx 32rpx">
			<view class="title">
				保障
			</view>
			<view class="content">
				<image src="../../static/images/icon_dunpai@2x.png" mode="widthFix" class="baozhang_img"></image>
				假一赔十·极速退款·不支持7天退换
			</view>
		</view>
		<view class=" bgWhite goods_i_wrap bb10">
			<view class="goods_i">
				<view class="title">
					优惠
				</view>
				<view class="content">
					<view class="flex">
						<view class="manjian">
							满减
						</view>
						满188减10元
					</view>
					<image src="../../static/images/access_right.png" mode="aspectFill" class="access"></image>
				</view>
			</view>
			<view class="goods_i" @click="isShowChooseSku=true">
				<view class="title">
					已选
				</view>
				<view class="content">
					Vintara Red（干红/13度）*1瓶
					<image src="../../static/images/access_right.png" mode="aspectFill" class="access"></image>
				</view>
			</view>

			<view class="goods_i">
				<view class="title">
					送至
				</view>
				<view class="content">
					<view class="flex-column-center songzhiContent">
						<view class="flex address">
							北京市朝阳区来广营帝维系咖啡
						</view>
						<view class="flex time">
							<view class="">
								现货
							</view>
							<view class="">
								23:00前下单，预计明天（06月24日到达）
							</view>
						</view>
					</view>
					<image src="../../static/images/access_right.png" mode="aspectFill" class="access"></image>
				</view>
			</view>
		</view>
		<view class="evaluate_wrap p32 bgWhite">
			<view class="header alic" data-url="/pages/index/evaluateList" @click="navigateTo">
				<view class="flex-allcenter alic">
					<view class="evaluate_title">
						评价
					</view>
					<view class="evaluate_count">
						10000+
					</view>
				</view>
				<view class="high_praise alic">
					好评度99%
					<image src="../../static/images/access_right.png" mode="aspectFill" class="access"></image>
				</view>
			</view>
			<view class="flex-column-center evaluate_list">
				<view class="evalutate_item_wrap" v-for="(item,index) in [1,2]" :key="index">
					<EvaluateItem :imgsStyle="{}"></EvaluateItem>
				</view>
			</view>
		</view>
		<view class="evaluate_wrap p32 bgWhite">
			<view class="header alic" data-url="/pages/index/evaluateList" @click="navigateTo">
				<view class="flex-allcenter alic">
					<view class="evaluate_title">
						问答
					</view>
					<!-- <view class="evaluate_count">
						10000+
					</view> -->
				</view>
				<view class="high_praise alic">
					查看全部回答
					<image src="../../static/images/access_right.png" mode="aspectFill" class="access"></image>
				</view>
			</view>

			<view class="flex-column-center evaluate_list">
				<view class="evalutate_item_wrap" v-for="(item,index) in [1,1]" :key="index">
					<!-- <EvaluateItem></EvaluateItem> -->
				</view>
			</view>
		</view>
		<view class="evaluate_wrap p32 bgWhite bb10">
			<view class="header alic" data-url="/pages/index/recentPurchase" @click="navigateTo">
				<view class="flex-allcenter alic">
					<view class="evaluate_title">
						最近购买
					</view>
					<!-- <view class="evaluate_count">
						10000+
					</view> -->
				</view>
				<view class="high_praise alic">
					查看全部
					<image src="../../static/images/access_right.png" mode="aspectFill" class="access"></image>
				</view>
			</view>
			<view class="flex-column-center evaluate_list">
				<view class="evalutate_item_wrap" v-for="(item,index) in [1,1,1,1]" :key="index">
					<RecentPurchaseItem></RecentPurchaseItem>
				</view>
			</view>
		</view>
		<view class="detail bgWhite">
			<view class="title">
				-详情-
			</view>
			<view class="imgs">
				<image src="../../static/images/jiu.png" mode="aspectFill" v-for="(item,index) in new Array(2)"></image>
			</view>
		</view>

		<view class="chooseSkuDialog" v-if="isShowChooseSku" @click="closeChooseSku">

		</view>
		<view class="chooseSku flex-column-center" :class="{showChooseSku:isShowChooseSku}">
			<image src="../../static/images/close.png" mode="aspectFill" class="close" @click="closeChooseSku"></image>
			<view class="p32 flex-column-center">
				<view class="flex">
					<image src="../../static/images/jiu.png" mode="aspectFill" class="photo"></image>
					<view class="flex-column-center">
						<view class="price">
							￥299
						</view>
						<view class="weight">
							重量：10kg
						</view>
					</view>
				</view>
				<view class="flex-column-center">
					<view class="choose_sku_title">
						选择规格
					</view>
					<view class="list">
						<view v-for="(item,index) in skuList" :key="index" :class="{selectSku:selectSkuIndex==index}" @click="selectSkuIndex=index">
							{{item.name}}
						</view>
					</view>
				</view>

				<view class="flex flexbetween buyNums">
					<view class="buyNum_txt">
						购买数量
					</view>
					<view class="shopButtomRight flex-verCenter">
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
			<view class="buy">
				立即购买
			</view>
		</view>
		<BottomBuy></BottomBuy>
	</view>
</template>
<script>
	import EvaluateItem from '../../components/evaluateItem.vue';
	import BottomBuy from '../../components/bottomBuy.vue'
	import RecentPurchaseItem from '../../components/recentPurchaseItem.vue'
	export default {
		components: {
			EvaluateItem,
			BottomBuy,
			RecentPurchaseItem
		},
		data() {
			return {
				isCollect: false,
				isShowChooseSku: false,
				skuList: [{
					id: "1",
					name: "单只·Vintara Red·750ML/13度"
				}, {
					id: "2",
					name: "6只·Vintara Red·750ML/13度·成箱装"
				}, {
					id: "3",
					name: "2只·Vintara Red·750ML/13度·礼盒装"
				}],
				selectSkuIndex: 0,
				buyNum: 1
			}
		},
		onLoad() {


		},
		methods: {
			collectTap() {
				this.isCollect = !this.isCollect
			},
			navigateTo(e) {

				let url = e.currentTarget.dataset.url;

				this.$common.redirect(url)
			},

			closeChooseSku() {
				this.isShowChooseSku = false
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: $uni-bg-color-grey;
	}

	.goods {
		width: 100%;

		image {
			height: 100vw;
			width: 100%;
		}

		.collect {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 80rpx;
			cursor: pointer;

			image {

				width: 35rpx;
				height: 32rpx;
			}

			.txt {

				font-size: 18rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #999999;

			}
		}

		.name_wrap {
			padding: 32rpx 32rpx 24rpx;
		}

		.name {

			font-size: 36rpx;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;
			color: #333333;

		}

		.price_wrap {

			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 24rpx;
			font-family: PingFangSC;
			color: #999999;
			padding: 0rpx 32rpx 32rpx;

			.price {
				font-size: 52rpx;
				font-family: DIN-BoldItalic, DIN;
				font-weight: normal;
				color: $uni-text-color;
				font-style: italic;

			}

			.price_unit {
				margin-left: 8rpx;
				font-size: 28rpx;
			}

			.market_price {
				margin-left: 24rpx;
				text-decoration: line-through;
			}

		}

	}

	.goods_i {
		display: flex;
		justify-content: space-between;

		background-color: white;

		.title {

			// height: 48rpx;
			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #999999;
			// line-height: 48rpx;
			margin-right: 36rpx;
		}

		.content {
			display: flex;
			align-items: center;
			flex: 1;
			font-size: 28rpx;
			color: #333333;

		}

		.baozhang_img {
			width: 23rpx;
			height: 26rpx;
			margin-right: 12rpx;

		}
	}

	.goods_i_wrap {
		padding: 32rpx 32rpx 0rpx;

		.goods_i {
			padding: 24rpx 0;
			border-bottom: 1rpx solid #F6F6F6;

			.content {
				justify-content: space-between;


				.manjian {
					height: 24rpx;
					font-size: 22rpx;
					line-height: 24rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: $uni-text-color;
					background-color: rgba(255, 127, 127, 0.4);
					margin-right: 12rpx;

				}

				view {
					align-items: center;
				}
			}
		}

		.goods_i:last-child {
			border-bottom: none;
		}
	}

	.songzhiContent {




		.address {
			width: 100%;
		}

		.time {
			font-size: 24rpx;
			color: #999999;
			height: 48rpx;

			view:first-child {
				color: #FF7F7F;
			}
		}
	}

	.evaluate_wrap {

		.header {
			display: flex;
			justify-content: space-between;
			color: #333333;
			font-weight: 600;

			.evaluate_title {

				font-size: 40rpx;
				font-family: PingFangSC-Semibold, PingFang SC;
			}

			.evaluate_count {
				margin-left: 8rpx;
				font-size: 28rpx;
			}

			.high_praise {
				font-size: 24rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #999999;

			}
		}

		.evaluate_list {

			.evalutate_item_wrap {
				border-bottom: 1rpx solid #F6F6F6;
			}
		}


	}

	.detail {

		.title {

			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #333333;
			padding: 32rpx;
			text-align: center;

		}

		.imgs {
			display: flex;
			flex-direction: column;

			image {
				width: 100%;
			}
		}
	}

	.chooseSkuDialog {
		z-index: 1;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.6);
	}

	.chooseSku {
		position: fixed;
		bottom: 0rpx;
		left: 0;
		right: 0;
		transform: translateY(100%);
		z-index: 2;
		background-color: white;
		transition: all 0.5s;

		.close {
			width: 32rpx;
			height: 32rpx;
			border: 3rpx solid #999999;
			position: absolute;
			top: 32rpx;
			right: 32rpx;
			border-radius: 50%;
		}

		.photo {
			height: 180rpx;
			width: 180rpx;
			padding-right: 32rpx;
		}

		.price {
			font-size: 40rpx;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;
			color: $uni-text-color;

		}

		.weight {
			padding-top: 14rpx;
			font-size: 24rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #666666;


		}

		.choose_sku_title {

			font-size: 28rpx;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;
			color: #333333;
			line-height: 40px;

		}

		.list {

			view {
				padding: 32rpx 0;

				font-size: 24rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #999999;
				border: 4rpx solid #979797;
				padding: 16rpx 32rpx;
				margin: 32rpx 0;
				position: relative;
			}

			.selectSku {
				color: #000000;
				border: 4rpx solid #000000;

			}

			.selectSku::after {
				content: " ";
				position: absolute;
				bottom: 0;
				right: 0;
				// height: 30rpx;
				// width: 30rpx;
				// background-color: #000000;
				// border-left: transparent;
				border-left: 14rpx solid transparent;
				border-bottom: 14rpx solid #000000;
			}
		}

		.buy {
			font-size: 32rpx;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;
			color: #FFFFFF;
			height: 98rpx;
			line-height: 98rpx;
			text-align: center;
			background: #2B2C3E;
		}

		.buyNums {

			padding: 32rpx 0;

			.buyNum_txt {
				font-size: 28rpx;
				font-family: PingFangSC-Semibold, PingFang SC;
				font-weight: 600;
				color: #333333;

			}




			.shopButtomButton {
				width: 32rpx;
				height: 32rpx;
				background: #2B2C3E;
				border-radius: 50%;
				color: #ffffff;
			}

			.shopButtomRight {
				font-size: 28rpx;
				font-family: PingFangSC-Semibold, PingFang SC;
				font-weight: 600;
				color: #333333;
			}

			.shopNumButton {
				border-radius: 50%;
				color: #aaaaaa;
				width: 44rpx;
				height: 44rpx;
				background: #F5F5F5;
				cursor: pointer;
			}

			.shopNum {
				padding: 0 32rpx;
			}

		}

	}

	.showChooseSku {
		transform: translateY(0);
	}
</style>
