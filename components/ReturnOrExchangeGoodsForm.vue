<template>

	<view class="content">
		<view class="title flex  flexbetween">
			<view class="reason_title">
				申请原因
			</view>
			<view class="flex-allcenter">
				<view class="">
					<picker mode="selector" :range="reasonList" range-key="title" :value="reasonValue" @change="resonChoose">

						<view class="" v-if="reasonValue==-1">
							请选择申请原因
						</view>
						<view v-else>{{reasonList[reasonValue].title}}</view>
					</picker>
				</view>
				<image src="../static/images/access_right.png" mode="aspectFill" class="access"></image>
			</view>
		</view>
		<view class="input">
			<textarea value="" placeholder="请填写申请售后服务的具体原因～" placeholder-style="font-size:28rpx" />
			</view>
			<view class="images">
				<image src="../static/images/add_image.png" mode=""></image>
			</view>
			<view class="tips">
				为了帮您更好的解决问题，请务必上传照片凭证（最多9张）
			</view>
			
			
		</view>

</template>

<script>
	export default {
		data() {
			return {
				reasonValue:-1,
				reasonList:[{
					id:1,
					title:"质量问题"
				},{
					id:2,
					title:"商品降价"
				},{
					id:3,
					title:"发错货"
				},{
					id:4,
					title:"商品损坏"
				},{
					id:5,
					title:"商品与页面描述不相符"
				}]
			};
		}
	}
</script>

<style lang="scss">

.content {
		margin: 32rpx;
		background-color: #FFFFFF;
		border-radius: 8px;
		padding: 32rpx 24rpx;
		box-sizing: border-box;
		
		.title{
			display: flex;
			padding-bottom: 32rpx;
			box-sizing: border-box;
			color: #333333;
			font-size: 32rpx;
			font-weight: 600;
			
			.reason_title{
				color: #999999;
				font-size: 28rpx;
			}
			.access{
				width: 26rpx;
				height: 26rpx;
			}
		}
	}
	
	.input{
		width: calc(100% - 48rpx);
		textarea{
			width: 100%;
			padding: 24rpx;
			background: #F6F6F6;
			border-radius: 8rpx;
		}
	}
	
	.images{
		padding: 32rpx 0;
		image{
			width: 144rpx;
			height: 144rpx;
		}
	}
	
	.tips{
		
		color: $uni-text-color;
		font-size: 22rpx;
	}
</style>
