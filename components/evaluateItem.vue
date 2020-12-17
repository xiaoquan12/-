<template>
	<view>
		<view class="evaluate_item">
			<view class="header alic">
				<view class="user flex alic">
					<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606227337468&di=dd6fb5de0f05a0e111c69e2ca2afea99&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg"
					 mode="aspectFill" class="photo"></image>
					<view class="name">
						傅小小
					</view>
					<view class="star">
						<image src="../static/images/icon_onexing@2x.png" mode="widthFix" v-for="(item,index) in [1,2,3,4,5]" :key="index"></image>
					</view>
				</view>
				<view class="time">
					下午06:00
				</view>
			</view>
			<view class="content">
				<view class="description">
					语雀是一款优雅高效的在线文档编辑与协同工具， 让每个企业轻松拥有文档中心阿里巴巴集团内部使用多年，众多中小企业。
				</view>
				<view class="imgs">

					<image src="../static/images/jiu.png" mode="aspectFill" v-for="(item,index) in [1,2,3,4,5]" :key="index"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.evaluate_item {
		display: flex;
		flex-direction: column;
		padding: 32rpx 0;
		

		.header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-bottom: 24rpx;

			.user {
				display: flex;
				align-items: center;

				.photo {
					width: 48rpx;
					height: 48rpx;
					border-radius: 50%;

				}

				.name {
					font-size: 24rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #333333;
					padding-left: 16rpx;
				}

				.star {
					padding-left: 8rpx;

					image {

						width: 24rpx;
						height: 24rpx;
						margin-right: 4rpx;
					}
				}
			}

			.time {

				font-size: 22rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #999999;

			}
		}

		.content {
			.description {

				font-size: 24rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #666666;

			}

			.imgs {
				display: flex;
				// overflow-x: auto;
				flex-wrap: wrap;
				margin-top: 16rpx;
				image {
					display: flex;
					width: 160rpx;
					height: 160rpx;

				}
			}
		}
	}
</style>
