<!-- 物流详情 -->
<template>
	<view>
		<view class="header">
			查看物流
		</view>
		<view class="order_wrap flex-column-center">
			<view class="order flex flexbetween">
				<view class="">
					中通快递：202005081325283003
				</view>
				<view class="copy">
					复制
				</view>
			</view>
			<view class="createTime">
				创建时间：2020-07-01 16:25:56
			</view>
		</view>
		
		<view class="" style="padding-top: 80rpx;">
			<view class="processMain flex-verCenter" :class='{marT20:index!=0,curr:index==0}' :key="index" v-for="(item, index) in logisticsList">
				<view class="mainLeft timeLine marL40 marR50" :class='{colors:index!=0,curr:index==0}'></view>
				<view class="mainRight flex1 relative">
					<view class="tuiState" :class='{colorsText:index!=0,curr:index==0}'>{{ item.status }}</view>
					<view class="tuiDate" :class="{curr:index==0}">{{item.remark}}</view>
					<view class="tuiDate" :class="{curr:index==0}"> 2020-12-09 12:00:99</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				logisticsList: [{
					time: "",
					status: "已签收",
					remark: "感谢使用顺丰，期待再次为您服务"
				}, {
					time: "",
					status: "运输中",
					remark: "快件已到达天津河东富民路"
				}, {
					time: "",
					status: "",
					remark: "快件已到达天津中转站"
				}, {
					time: "",
					status: "已揽收",
					remark: "快递员张某揽收"
				}]
			};
		}
	}
</script>

<style lang="scss">
	.header {
		width: 100%;
		height: 200rpx;
		background: #2B2C3E;
		padding: 32rpx;
		box-sizing: border-box;
		font-size: 40rpx;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: #FFFFFF;
		display: flex;
		align-items: center;

	}

	.order_wrap {
		padding: 32rpx;

		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #666666;
		border-bottom: 2rpx solid #EEEEEE;

		.createTime {
			padding-top: 24rpx;
		}

		.copy {
			color: #000000;
		}
	}


	.processMain {
		width: 100%;
		height: 90rpx;
		// margin-top: 48rpx;
		margin-bottom: 80rpx;
		box-sizing: border-box;

		position: relative;
	}

	.process {
		font-size: 40rpx;
		color: rgba(51, 51, 51, 1);
		padding: 50rpx 0;
	}

	.marT20 {
		margin-top: 0rpx;
		// background:#c1c1c1;
	}

	.colors {
		// background: #c1c1c1;
		// z-index: 1;
	}




	.colorsText {
		color: #c1c1c1;

	}

	.tuiDate {
		margin-top: 16rpx;
		font-size: 24rpx;
		color: #999999;
	}

	.tuiState {

		font-size: 28rpx;
	}

	.mainRight {
		// width: 100%;

	}

	.curr {
		color: $uni-text-color !important;
	}

	.mainLeft {
		width: 18rpx;
		height: 100%;
		display: flex;
		position: relative;

	}

	.mainLeft:before {
		content: " ";
		display: block;
		position: absolute;
		width: 18rpx;
		height: 18rpx;
		background-color: #EEEEEE;
		border-radius: 50%;
		left: 0rpx;
		top: 36rpx;

	}

	.mainLeft::after {
		content: "";
		display: block;
		position: absolute;
		width: 2rpx;
		height: calc(90rpx + 80rpx);
		background-color: #EEEEEE;
		left: 9rpx;
		top: 54rpx;
	}


	.processMain:last-child .mainLeft::after {
		display: none;
		content: "";
	}
	
		
	.processMain:first-child .mainLeft::before{
		background-color: $uni-text-color !important;
	}
	
	
	.marR50 {
		margin-right: 50rpx;
	}
</style>
