<!-- 搜索组件 -->
<template>
	<div class="relative flexbetween">
		<div class="search-box flex-verCenter" :class="{'index':isIndex}">
			<image class="inlineBlock search-img1" src="/static/images/search-gray.png" />
			<input v-if="isInput" type="text" confirm-type="search" @confirm='input' :value='inputValue' @input="inputValue=$event.detail.value"
			 class="inlineBlock search-input" :placeholder="text" />
			<view v-else class="inlineBlock search-label" @click="turnSearch">{{text}}</view>
			<image v-if="isScan" @click="scan" class="inlin deBlock search-img2" :src="isIndex?'/static/images/scan.png':'/static/images/scan-gray.png'" />
		</div>
		<view class="search-cancel flex-shrink0" v-if="isInput" @click='back'>取消</view>
	</div>
</template>

<script>
	export default {
		props: {
			channelid: {
				type: String,
				default: ""
			},
			text: {
				type: String,
				default: "搜索相关酒类"
			},
			isStore: {
				type: Boolean,
				default: false
			},
			isIndex: {
				type: Boolean,
				default: false
			},
			isScan: {
				type: Boolean,
				default: true
			},
			isInput: {
				type: Boolean,
				default: false
			},
			placeholder: {
				type: String,
				default: '搜索相关景点/目的地/店铺'
			}
		},
		data() {
			return {
				inputValue: ""
			}
		},
		watch:{
			// text(value){
			// 	console.log("text",value);
			// }
		},
		created() {},
		methods: {
			back() {
				uni.navigateBack()
			},
			turnSearch() {
				// console.log("12");
				if(this.isStore){
				this.$common.redirect('/pages/home/search?channelid=' + this.channelid + "&text=" + this.text + "&isStore=" + this.isStore);
				}else{
					this.$common.redirect('/pages/home/search?channelid=' + this.channelid + "&text=" + this.text);
				}
			},
			input(event) {
				this.$emit("input", event.detail.value)
			},
			/**
			 * 扫码
			 * @author 空心科技-王效玉
			 * @date 2020-06-22
			 * @returns 无
			 */
			scan() {
				uni.scanCode({
					success(res) {
						console.log(res)
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.search-box {
		height: 80rpx;
		// line-height: 80rpx;
		border-radius: 4rpx;
		background-color: #f5f5f5;
		color: #999;
		z-index: 100;
	}

	.search-box.index {
		background-color: rgba(255, 255, 255, 0.3);
		color: #fff;
	}

	.search-box .search-input,
	.search-box .search-label {
		width: 480rpx;
		// height: 80rpx;
		// line-height: 80rpx;
		font-size: 24rpx;
	}

	.search-box .search-input {
		color: #333;
	}

	.search-box.index .search-input {
		font-size: 28rpx;
		color: #fff;
	}

	.search-box .search-img1 {
		margin-left: 24rpx;
		margin-right: 24rpx;
		// float: left;
		width: 39rpx;
		height: 39rpx;
		// margin: 20rpx 24rpx;
	}

	.search-box .search-img2 {
		float: right;
		width: 44rpx;
		height: 44rpx;
		margin: 20rpx 24rpx;
	}

	.search-cancel {
		margin-right: 40rpx;
		font-size: 24rpx;
		color: #666;
	}
</style>
