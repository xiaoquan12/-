<!-- 换货 -->
<template>
	<view>
		<AfterSaleGoods :isShowSelectNum="true" :goods="{}" @sub="subNum" @add="addNum"></AfterSaleGoods>
	</view>
</template>

<script>
	import AfterSaleGoods from '../../components/afterSaleGoods.vue'
	export default {
		components: {
			AfterSaleGoods
		},
		data() {
			return {

			};
		},
		mounted() {
			
		},
		methods: {
			subNum(e) {
				console.log(e)
			},
			addNum(e) {
				console.log(e)
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F6F6F6;
	}
</style>
