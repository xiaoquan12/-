<template>
	<view>
		<view class="header bb10 bgWhite">
			<view v-for="(item,index) in headerData" :key="index" @click="selectindex=index" :class="{select:selectindex==index}">
				{{item.text + "" +item.count}}
			</view>
		</view>

		<view class="list flex-column-center p32 bgWhite">
			<view class="item_wrap" v-for="(item,index) in [1,2,3,4,5]" :key="index">
				<EvaluateItem :imgsStyle="imgsStyle"></EvaluateItem>
			</view>
		</view>
		
		<BottomBuy></BottomBuy>
	</view>
</template>

<script>
	// import EvaluateItem from '../../components/evaluateItem.vue';
	// import BottomBuy from '../../components/bottomBuy.vue'
	export default {
		components: {
			EvaluateItem:()=> import('../../components/evaluateItem.vue'),
			BottomBuy:()=> import('../../components/bottomBuy.vue')
		},
		data() {
			return {
				selectindex: 0,
				headerData: [{
					text: '全部',
					count: "1000+"
				}, {
					text: '最新',
					count: ""
				}, {
					text: '好评',
					count: "1000+"
				}, {
					text: '有图评论',
					count: "40+"
				}],

				imgsStyle: {
					"flex-wrap": "wrap",
					// "justify-content": "space-between",
					image: {
						"margin": "4rpx",
						height: "220rpx",
						width: "220rpx",
						"min-width": "220rpx",
						"border-radius": 0
					}
				}
			};
		}
	}
</script>

<style lang="scss">
	page {
		background-color: $uni-bg-color-grey;
	}

	.header {
		padding: 16rpx 32rpx;
		display: flex;
		flex-wrap: wrap;

		view {
			background-color: rgba(255, 127, 127, 0.4);
			margin: 16rpx;
			font-size: 28rpx;
			color: #333333;
			padding: 16rpx 32rpx;
			border-radius: 8rpx;
			cursor: pointer;

		}


		.select {
			color: white;

		}
	}

	.item_wrap {
		border-bottom: 1rpx solid #F6F6F6;
	}
</style>
