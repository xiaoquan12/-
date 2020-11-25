<!-- 我的积分 -->
<template>
	<view class="list flex-column-center">

		<view v-for="(item,index) in list" :key="index" class="item flex flexbetween">
			<view class="left">
				<view class="type">
					{{item.type}}
				</view>
				<view class="time">
					{{formatterTime(item.createTime)}}
				</view>
			</view>
			<view class="right num">
				{{(item.num>0 ? "+":"-")+  item.num}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: []
			};
		},
		onShow() {
			this.getList()
		},
		computed: {
			formatterTime() {
				return function(time) {

					return this.$common.formatDate(time, 'yyyy-M-d hh:mm:ss')
				}
			}
		},
		methods: {
			async getList() {

				let list = new Array(10).fill({
					type: "每日签到",
					num: 100,
					createTime: Date.now()
				})

				this.list = list;
			}
		}
	}
</script>

<style lang="scss">
		
		
		
	.item{
		padding: 32rpx;
		box-sizing: border-box;
		border-bottom: 2rpx solid #F5F5F5;
	}
	
	.type{
		
		font-size: 32rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		line-height: 44prx;
	

	}
	
	.time{
		padding-top: 8rpx;
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
		line-height: 34rpx;
	}
	
	.num{
	
		font-size: 32rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FF7F7F;
		line-height: 44rpx;
	}
</style>
