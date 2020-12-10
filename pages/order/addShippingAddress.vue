<template>
	<view class=" ">

		<view class="b1 p32 bgWhite">
			<view class="item ">
				<view class="title">
					收件人
				</view>
				<view class="content">
					<input type="text" value="" placeholder="输入姓名" placeholder-class="placeholder_class" />
				</view>
			</view>

			<view class="item ">
				<view class="title">
					手机号
				</view>
				<view class="content">
					<input type="text" value="" placeholder="输入手机号" placeholder-class="placeholder_class" />
				</view>
			</view>
			<view class="item ">
				<view class="title">
					地址
				</view>
				<view class="content flexbetween">
					<!-- <input type="text" value="" placeholder="省/市/区" placeholder-class="placeholder_class" /> -->
					<picker mode="region"  @change="regionChange">
						<view style="color: #AAAAAA;">{{"省/市/区"}}</view>
						<!-- <view>{{"省/市/区"}}</view> -->
					</picker>
					
					<image src="../../static/images/access_right.png" mode="aspectFill" class="access"></image>
				</view>
			</view>
			<view class="item ">
				<view class="title">
					详情地址
				</view>
				<view class="content">
					<input type="text" value="" placeholder="输入详细地址" placeholder-class="placeholder_class" />
				</view>
			</view>
		</view>
		<view class="default bgWhite">
			<label class="radio">
				<radio value="" color="#000000" /><text>设置为默认地址</text>
			</label>

		</view>
		<view class="save">
			保存并使用
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods:{
			regionChange(e){
				console.log(e)
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: $uni-bg-color-grey;
	}

	.item {
		border-bottom: 1rpx solid #EEEEEE;

		display: flex;
		align-items: center;
		padding: 46rpx 0;

		.title {

			font-size: 28rpx;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;
			color: #333333;
			width: 120rpx;

		}

		.content {
			padding-left: 48rpx;
			position: relative;
			flex: 1;
			
		}

		.placeholder_class {

			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #AAAAAA;

		}
	}

	.item:last-child {
		border: none;
	}

	.default {
		margin-top: 10rpx;
		color: #999999;
		font-size: 28rpx;
		padding: 32rpx;

		radio {
			transform: scale(0.7);
		}


	}


	.save {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 98rpx;
		background: #2B2C3E;

		font-size: 32rpx;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: #FFFFFF;
		line-height: 98rpx;
		text-align: center;
		cursor: pointer;
	}
</style>
