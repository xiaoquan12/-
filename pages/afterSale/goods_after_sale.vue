<!-- 商品售后 -->
<template>
	<view>
		<view class="nav">
			<view :class="{'select':isShowTabContent(0)}" @tap="navIndex=0">
				全部
			</view>
			<view :class="{'select':isShowTabContent(1)}" @tap="navIndex=1">
				待审核
			</view>
			<view :class="{'select':isShowTabContent(2)}" @tap="navIndex=2">
				已驳回
			</view>
			<view :class="{'select':isShowTabContent(3)}" @tap="navIndex=3">
				处理中
			</view>
			<view :class="{'select':isShowTabContent(4)}" @tap="navIndex=4">
				已退款
			</view>
		</view>
		<view class="list">
			<view class="" v-if="isShowTabContent(0)">
				<view v-for="(item,index) in [1,2,3]" :key="index" class="bgWhite">
					<Item :order="{status:1}"></Item>
				</view>
			</view>
			<view class="" v-if="isShowTabContent(1)">
				
				<view v-for="(item,index) in [1,2,3]" :key="index" class="bgWhite">
					<Item :order="{status:1}"></Item>
				</view>
			</view>
			<view class="" v-if="isShowTabContent(2)">
				
				<view v-for="(item,index) in [1,2,3]" :key="index" class="bgWhite">
					<Item :order="{status:2}"></Item>
				</view>
			</view>
			<view class="" v-if="isShowTabContent(3)">
				
				<view v-for="(item,index) in [1,2,3]" :key="index" class="bgWhite">
					<Item :order="{status:3}"></Item>
				</view>
			</view>
			<view class="" v-if="isShowTabContent(4)">
				
				<view v-for="(item,index) in [1,2,3]" :key="index" class="bgWhite">
					<Item :order="{status:4}"></Item>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import Item from './goods_after_sale_item.vue';
	
	export default {
		components: {
			Item
		},
		data() {
			return {
				navIndex: 0
			}
		},
		computed: {
			getSelectTabCss() {
				return function(index) {

					return this.navIndex == index ? "select" : ""

				}
			},
			isShowTabContent() {
				return function(index) {
					return this.navIndex == index
				}
			},
			formatStatus() {
				return function(status) {

					switch (status) {
						case 1:
							return "待审核"
							break;
						case 2:
							return "已驳回"
							break;
						case 3:
							return "处理中"
							break;
						case 4:
							return "已退款"
							break;
						default:
							return ""
							break;
					}

				}
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.nav {
		position: fixed;
		top: var(--window-top);
		left: 0;
		right: 0;
		display: flex;
		border-bottom: 2rpx solid #F5F5F5;
		background: white;
		z-index: 1;

	}

	.nav>view {
		flex: 1;
		text-align: center;
		padding: 18rpx 0;
		font-size: 28rpx;
		font-weight: 500;
		color: #000000;
		cursor: pointer;
		background-color: #FFFFFF;
		position: relative;

	}

	.select:after {
		content: " ";
		position: absolute;
		height: 4rpx;
		background: #000000;
		bottom: 0;
		left: 42%;
		right: 42%;
	}

	.list {
		margin-top: 75rpx;
	}




	.item {
		padding-top: 32rpx;
		border-bottom: 10rpx solid #F6F6F6;
	}

	.order_info {
		padding: 0 32rpx;

		.code {

			font-size: 24rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #666666;

		}

		.type {

			font-size: 24rpx;

			font-weight: 400;
			color: $uni-text-color;



		}
	}
</style>
