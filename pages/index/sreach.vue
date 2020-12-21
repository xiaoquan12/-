<!--搜索页面-->
<template>
	<div>
		<div class="search-head">
			<v-search :isScan="false" @input='input($event)' :isInput="true" :text="text" />
		</div>
		<div class="search-body">
			<div class="body-head flexbetween">
				<h3>历史搜索</h3>
				<view class="delete" @click='clearHistroy'>
					<image src="/static/images/delete.png" @click='clearHistroy' /></view>
			</div>
			<ul class="body-con flexbetween flexleft flex-wrap" v-if='histroyList&&histroyList.length>0'>
				<li v-for='(item,index) in histroyList' @click='input(item)' :key='index'>{{item}}</li>
			</ul>
			<div class="body-head">
				<h3>搜索发现</h3>
			</div>
			<ul class="body-con flexbetween flexleft flex-wrap" v-if='hotList&&hotList.length>0'>
				<li v-for='(item,index) in hotList' @click='input(item.TagName)' :key='index'>{{item.TagName}}</li>
			</ul>
			<!-- <ul class="body-result" v-if='list&&list.length>0'>
				<li v-for="(item, index) in list" :key="index">
					<div class="cover">
						<image :src="isStore?item.GsPic:item.images" mode="aspectFill">
					</div>
					<div class="contents">
						<div class="title">{{isStore?item.GsName:item.title}}</div>
						<div class="subTitle">
							{{isStore?item.GsLabel:item.channelName+'-'+item.className}}
						</div>
					</div>
				</li>
			</ul> -->
		</div>
	</div>
</template>
<script>
	import VSearch from '@/components/Search'
	const app = getApp()
	export default {
		components: {
			VSearch
		},
		props: {

		},
		data() {
			return {
				channelid: null,
				pageIndex: 1,
				hotList: [{TagName:"11"},{TagName:"22"}],
				histroyList: ["11","222"],
				isStore: false,
				placeholder: "搜索相关酒类",
				list: [],
				loaded: false,
				keyword: null,
				text: ""
			}
		},
		onShow(){
		},
		onLoad(options) {
		},
		methods: {
			input(event) {
				console.log("input", event);
				const keyword = event;
				this.keyword=keyword;
				if (keyword) {
					this.$common.redirect("/pages/index/searchResult?keyword=" + keyword);
				}
			},
			clearHistroy() {
				this.histroyList = "";
			},
			
		}
	}
</script>
<style >
	/* #ifdef MP-ALIPAY */
	    .search-body{
	    	padding: 250rpx 40rpx 40rpx !important;
	    }
	/* #endif */
	
</style>
