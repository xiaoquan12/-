<!-- 积分订单 -->
<template>
	<view>
		<view class="nav">
			<view :class="[navKey=='wfh'?'select':'']" @click="navKey='wfh'">
				未发货
			</view>
			<view :class="[navKey=='yhf'?'select':'']" @click="navKey='yhf'">
				已发货
			</view>
				<view :class="[navKey=='yqs'?'select':'']" @click="navKey='yqs'">
				已签收
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navKey: "wfh"
			};
		}
	}
</script>

<style lang="scss">
	.nav {
		display: flex;
		border-bottom: 2rpx solid #F5F5F5;
		position: relative;

	}

	.nav>view {
		flex: 1;
		text-align: center;
		padding: 18rpx 0;
		font-size: 28rpx;
		font-weight: 500;
		color: #000000;
		cursor: pointer;
		position: relative;
	}

	.select:after {
		content: " ";
		position: absolute;
		height: 4rpx;
		background: #000000;
		bottom: 0;
		left: 45%;
		right: 45%;
	}
</style>
