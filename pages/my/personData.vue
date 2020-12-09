<template>
	<view>
		<view class="bgWhite">
			<view class="item flexbetween" @click="changePhoto">
				<view class="title">
					头像
				</view>
				<view class="content">
					<image src="../../static/images/jiu.png" mode="aspectFill" class="photo"></image>
					<image src="../../static/images/access_right.png" mode="aspectFill" class="access"></image>
				</view>
			</view>
			<view class="item flexbetween">
				<view class="title">
					姓名
				</view>
				<view class="content">
					<view class="">
						<input type="text" value="胡哈哈" class="input" />
					</view>
					<image src="../../static/images/access_right.png" mode="aspectFill" class="access"></image>
				</view>
			</view>
			<view class="item flexbetween">
				<view class="title">
					性别
				</view>
				<view class="content">
					<picker mode="selector" :range="sexList" range-key="title" :value="sexValue" @change="sexChange">
						<view v-if="sexValue==-1">{{"请选择"}}</view>
						<view v-else>{{sexList[sexValue].title}}</view>
					</picker>
					<image src="../../static/images/access_right.png" mode="aspectFill" class="access"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sexValue: -1,
				sexList:[{
					id:1,
					title:"男"
				},{
					id:2,
					title:"女"
				}]
			};
		},
		methods: {
			sexChange(e) {
				
				
				this.sexValue=e.detail.value
			},
			changePhoto(){
				// un.showActionSheet({
				// 	itemList:['']
				// })
				uni.chooseImage({
					count:1,
					success:res=>{
						console.log(res)
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: $uni-bg-color-grey;
	}

	.item {
		padding: 48rpx 32rpx;
		align-items: center;

		.title {
			color: #999999;
			font-size: 32rpx;
		}

		.content {
			display: flex;
			align-items: center;
			
			.photo {
				width: 64rpx;
				height: 64rpx;
				border-radius: 50%;
			}
			
			.input{
				text-align: right;
			}
		}

		.access {
			width: 32rpx;
			height: 32rpx;
		}
	}


	.item:first-child {
		margin-top: 10rpx;
	}

	.item:not(:last-child) {
		border-bottom: 1rpx solid #EEEEEE;
	}
</style>
