<template>
	<view>
		<!-- 信息部分 -->
		<view class="card">
			<view class="info">
				<view class="info_left">
					<image class="photo" mode="aspectFill" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606227337468&di=dd6fb5de0f05a0e111c69e2ca2afea99&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg"></image>
					<view class="flex-column-center">
						<view class="name">
							哈哈哈
						</view>
						<view class="bindPhone">
							<button type="default" open-type="getPhoneNumber" @getphonenumber="getphonenumber">点击绑定手机号</button>
						</view>
					</view>
				</view>
				<view class="info_right">
					<view class="signIn" :class="{signInCss:isSignIn}" @click="isSignIn=true">
						{{isSignIn?'已签到':'签到'}}
					</view>
				</view>
			</view>
			<view class="datas">

				<view class="item"  data-url="/pages/my/collection" @click="navigateTo">
					<view class="num">
						2

						<view class="redPoint" v-if="isShowCollectionRedPoint">

						</view>
					</view>
					<view class="remark">
						我的收藏
					</view>
				</view>
				<view class="item">
					<view class="num">
						17
					</view>
					<view class="remark">
						浏览记录
					</view>
				</view>
				<view class="item"  data-url="/pages/my/integral" @click="navigateTo">
					<view class="num">
						292931
					</view>
					<view class="remark">
						我的积分
					</view>
				</view>
				<view class="item"  data-url="/pages/my/coupon" @click="navigateTo">
					<view class="num">
						3
					</view>
					<view class="remark">
						优惠券
					</view>
				</view>
			</view>
		</view>

		<!-- 我的订单 -->
		<view class="module">
			<view class="title flexbetween">
				<view class="name">
					我的订单
				</view>
				<view class="more access">
					查看更多 
				</view>
			</view>

			<view class="menus">
				<view v-for="(item,index) in orderMenu" :key="index" class="menu">
					<image :src="item.img" mode="aspectFill"></image>
					<view class="name">
						{{item.text}}
					</view>
				</view>
			</view>
		</view>

		<!-- 我的服务 -->
		<view class="module">
			<view class="title flexbetween">
				<view class="name">
					我的服务
				</view>
			</view>

			<view class="menus">
				<view v-for="(item,index) in serverMenu" :key="index" class="menu">
					<image :src="item.img" mode="aspectFill"></image>
					<view class="name">
						{{item.text}}
					</view>
				</view>
			</view>
		</view>

		<!-- 常用系统 -->
		<view class="module">
			<view class="title flexbetween">
				<view class="name">
					常用系统
				</view>
			</view>
			<view class="menus system">
				<view v-for="(item,index) in systemMenu" :key="index" class="menu">
					<image :src="item.img" mode="aspectFill"></image>
					<view class="name">
						{{item.text}}
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderMenu: [{
					img: "/static/images/my_dfk.png",
					text: "待付款",
					url: ""
				}, {
					img: "/static/images/my_yzf.png",
					text: "已支付",
					url: ""
				}, {
					img: "/static/images/my_tk.png",
					text: "退款",
					url: ""
				}],
				serverMenu: [{
					img: "/static/images/my_jfdd.png",
					text: "积分订单",
					url: ""
				}, {
					img: "/static/images/my_xxfw.png",
					text: "消息服务",
					url: ""
				}, {
					img: "/static/images/my_fxtg.png",
					text: "分销推广",
					url: ""
				}],
				systemMenu: [{
					img: "/static/images/my_wdpl.png",
					text: "我的评论",
					url: ""
				}, {
					img: "/static/images/my_shdz.png",
					text: "收货地址",
					url: ""
				}, {
					img: "/static/images/my_lxkh.png",
					text: "联系客服",
					url: ""
				}, {
					img: "/static/images/my_wdsz.png",
					text: "我的设置",
					url: ""
				}],
				isShowCollectionRedPoint: true, //收藏小红点
				isSignIn: false, //是否签到
			};
		},
		methods: {
			getphonenumber(e) {
				console.log(e)
			},
			navigateTo(e) {

				let url = e.currentTarget.dataset.url;

				this.$common.redirect(url)
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F6F6F6;
	}

	.card {
		background-color: white;
		padding: 32rpx;
		box-sizing: border-box;

		.info {
			padding: 48rpx 0;

			display: flex;
			// justify-content: space-around;
			justify-content: space-between;

			.info_left {
				display: flex;

				.photo {
					margin-right: 24rpx;
				}

				button:after {
					border: none;
					padding: 0;
					margin: 0;
				}

				.bindPhone {
					button {
						padding: 0;
						padding-top: 8rpx;
						font-size: 24rpx;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #999999;
						line-height: 34rpx;

					}
				}

			}

			.info_right {
				display: flex;
				align-items: center;


				.signIn {


					font-size: 28rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #FFFFFF;
					width: 150rpx;
					height: 66rpx;
					background-color: $uni-text-color;
					line-height: 66rpx;
					text-align: center;
					transform: translateX(32rpx);

					position: relative;


					box-shadow: 0px 4px 8px 0px rgba(0, 33, 111, 0.05);
					border-radius: 200rpx 0px 0px 200rpx;


				}

				.signInCss {


					font-size: 28rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #999999;



					background: #EEEEEE;
					box-shadow: 0px 4px 8px 0px rgba(0, 33, 111, 0.05);
					border-radius: 200px 0px 0px 200px;

				}
			}

			.name {

				font-size: 40rpx;
				font-family: PingFangSC-Semibold, PingFang SC;
				font-weight: 600;
				color: #333333;
				line-height: 56rpx;
			}

			.photo {
				width: 128rpx;
				height: 128rpx;
				border-radius: 50%;
			}
		}

		.datas {
			display: flex;

			.item {
				flex: 1;
				display: flex;
				flex-direction: column;
				align-items: center;

				.num {
					font-weight: 500;
					font-size: 36rpx;
					font-family: DIN-BlackItalic, DIN;
					// font-weight: normal;
					color: #373737;
					line-height: 38rpx;
					position: relative;
				}
				.redPoint {
					position: absolute;
					top: -10rpx;
					right: -15rpx;
					width: 16rpx;
					height: 16rpx;
					border-radius: 50%;
					background-color: $uni-text-color;
				}

				.remark {
					padding-top: 12rpx;
					box-sizing: border-box;
					font-size: 24rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #373737;
					line-height: 34rpx;


				}
			}
		}

	}

	.module {
		margin: 24rpx 32rpx;
		background-color: white;
		padding: 32rpx 24rpx;

		.title {
			font-size: 32rpx;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;
			color: #333333;
			line-height: 44rpx;
			padding-bottom: 32rpx;

			.more {

				font-size: 24rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #999999;
				line-height: 34rpx;
				position: relative;
				padding-right: 20rpx;

			}

		}

		.menus {
			display: flex;
			flex-wrap: wrap;

			.menu {
				flex: 1;
				display: flex;
				flex-direction: column;
				align-items: center;

				image {
					width: 64rpx;
					height: 64rpx;
				}

				.name {
					padding-top: 16rpx;
					font-size: 24rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #666666;
					line-height: 34rpx;


				}
			}

		}

		.system {
			image {
				width: 48rpx;
				height: 48rpx;
			}

		}
	}


	.access:after {
		content: " ";
		display: inline-block;
		height: 15rpx;
		width: 15rpx;
		border-width: 2px 2px 0 0;
		border-color: #bbb;
		border-style: solid;
		-webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
		transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
		top: -2px;
		position: absolute;
		top: 50%;
		margin-top: -4px;
		right: 2px;
	}
</style>
