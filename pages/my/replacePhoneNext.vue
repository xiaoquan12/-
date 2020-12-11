<!-- 更换手机号下一步 -->
<template>
	<view class="">
		<view class="remark flex">
			<view class="tip">
				更换后，下次可用新手机号登录：
			</view>
			<!-- <view class="phone">
				150****8080
			</view> -->
		</view>
		<view class="flex flexbetween p32 bgWhite">
			<view class="title">
				+86
			</view>
			<view class="content">
				<input type="text" :value="phone" @input="phoneInput" maxlength="11" placeholder="输入手机号" placeholder-class="placeholder" />
			</view>

		</view>
		<view class="flex flexbetween p32 bgWhite">
			<view class="title">
				验证码
			</view>
			<view class="content">
				<input type="text" :value="code" @input="codeInput" maxlength="6" placeholder="输入验证码" placeholder-class="placeholder" />
			</view>
			<view class="getCode">
				获取验证码
			</view>
		</view>

		<view class="p32">
			<view class="submit" :class="{next:code.length==6 && phone.length==11}">
				完成
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				code: "",
				phone: ""
			};
		},
		methods: {
			codeInput(e) {
				let val = e.detail.value;

				this.code = val
			},
			phoneInput(e) {
				let val = e.detail.value;
				this.phone = val
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: $uni-bg-color-grey;
	}

	.remark {
		padding: 48rpx 32rpx 24rpx;
		align-items: center;
	}

	.tip {

		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #666666;

	}

	.phone {
		font-size: 28rpx;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: #333333;

	}

	.content {
		flex: 1;
		padding-left: 48rpx;
		box-sizing: border-box;
	}

	.title {
		width: 100rpx;
		font-size: 28rpx;
		font-family: PingFangSC;
		color: #333333;
	}

	.getCode {

		color: #3990FF;
		font-size: 24rpx;
		cursor: pointer;
	}

	.placeholder {

		font-size: 28rpx;
		font-family: PingFangSC;
		color: #BBBBBB;

	}

	.submit {
		margin-top: 80rpx;
		height: 98rpx;
		background: #2B2C3E;
		opacity: 0.2;
		line-height: 98rpx;
		font-size: 32rpx;
		text-align: center;
		color: white;

	}

	.next {
		opacity: 1;
	}
</style>
