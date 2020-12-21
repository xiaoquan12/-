<!-- 新用户注册 -->

<template>
	<view>
		<view class="login" style="">
			<view class="title">
				欢迎加入白棋红酒
			</view>




			<view class="flex-column-center from">
				<view class="">
					<input type="text" value="" placeholder="手机号" placeholder-class="placeholder" />
				</view>
				<view class="flex alic">
					<input type="text" value="" placeholder="请输入验证码" placeholder-class="placeholder" />
					<button type="default" size="mini" class="getCode">获取验证码</button>
				</view>
				<view class="">
					<input type="text" value="" placeholder="设置密码" placeholder-class="placeholder" />
				</view>
				<view class="login_btn">
					登陆
				</view>
				<view class="tips flex">
					注册代表你已同意
					<view class="xieyi"  @click="$common.redirect('/pages/login/agreement')">
						《用户协议》
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
				selectTabKey: "duanxin"
			};
		},
		methods: {
			navigateToRegister() {
				this.$common.redirect("/pages/login/register")
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: white;
	}

	.login {
		padding: 80rpx;
	}

	.title {

		font-size: 48rpx;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: #000000;
		text-align: center;
	}

	.selectTab {
		font-size: 32rpx;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: #393C41;

		border-bottom: 4rpx solid #393C41;
	}

	.tabs {
		// width: 128rpx;
		// height: 36rpx;
		margin-top: 92rpx;
		font-size: 32rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #9FA2AA;

		view {
			padding: 10rpx 0;
			margin-right: 72rpx;
			cursor: pointer;
		}

	}

	.from {

		// padding-top: 80rpx;

		view {
			 margin-top: 80rpx;

			input {
				padding-bottom: 10rpx;
				border-bottom: 2rpx solid #D8D8D8;
			}

			button {
				border: 2rpx solid #393C41;
				border-radius: 0;
				padding: 6rpx 20rpx;
			}

			button:after {
				border: 2rpx solid #393C41;
				padding: 14rpx 20rpx;
				border-radius: 0;
			}
		}

		.login_btn {
			padding: 0;
			background: #D8D8D8;
			height: 92rpx;
			line-height: 92rpx;
			text-align: center;
			color: white;
			font-size: 32rpx;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;

		}

		.tips {
			margin: 0;
			padding: 0;
			margin-top: 32rpx;
			font-size: 24rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #9FA2AA;

		}

		.xieyi {
			margin: 0;
			color: #393C41;
		}



	}

	.new_user_register {

		font-size: 32rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #676C72;
		position: fixed;
		bottom: 2%;
		text-align: center;
		width: 100%;
		left: 0;
		right: 0;
	}
</style>
