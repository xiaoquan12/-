<!--生活服务-->
<template>
	<div>
		<!--head-->
		<view class="headSreach flex-conDirection">
			<VSearch></VSearch>
		</view>
		<!--tab-->
		<div class="life-tab">
			<div class="life-tab-item" :class="{ c_price: sellNum == 0 && priceSort == 0 && !isSearch }" @click="sortShop(0)"><view>综合</view></div>
			<div class="life-tab-item flex-rowCenter" @click="sortShop(1)">
				<view style="padding-top: 4rpx;">销量</view>
				<div class="life-updown flexCon">
					<div class="life-up">
						<image src="../../static/images/a_upc.png" v-if="sellNum == 1" />
						<image src="../../static/images/a_up.png" v-else />
					</div>
					<div class="life-down marT5">
						<image src="../../static/images/a_downc.png" v-if="sellNum == 2" />
						<image src="../../static/images/a_down.png" v-else />
					</div>
				</div>
			</div>
			<div class="life-tab-item flex-rowCenter" @click="sortShop(2)">
				<view style="padding-top: 4rpx;">价格</view>
				<div class="life-updown flexCon">
					<div class="life-up">
						<image src="../../static/images/a_upc.png" v-if="priceSort == 1" />
						<image src="../../static/images/a_up.png" v-else />
					</div>
					<div class="life-down marT5">
						<image src="../../static/images/a_downc.png" v-if="priceSort == 2" />
						<image src="../../static/images/a_down.png" v-else />
					</div>
				</div>
			</div>
			<div class="life-tab-item" :class="{ c_price: sellNum == 0 && priceSort == 0 && isSearch }" @click="openSearch">
				<view>筛选</view>
				<div class="life-filter"><image src="../../static/images/a_search.png" /></div>
			</div>
		</div>
		<!---->
		<div class="life-list">
			<div class="spec-recommend">
				<view v-for='(item,index) in [1,1,1]' :key='index'>
					<VerticalShop :styles='styles'></VerticalShop>
				</view>
			</div>
		</div>
		<s-popup custom-class="demo-popup" position="right" v-model="searchvisible">
			<search-box :sytles="boxHeight" @close="closeSearch" @reset="resetSearch" @confirm="confirmSearch" />
		</s-popup>
	</div>
</template>
<script>
	import VerticalShop from '@/components/verticalShop';
	import VSearch from '@/components/Search';
import sPopup from '@/components/s-popup/index.vue';
import SearchBox from '@/components/SearchBox.vue';
const app=getApp();
let classid = '';



let param = {
	pagesize: 20,
	pageindex: 1
};
export default {
	components: {
		VSearch,
		sPopup,
		SearchBox,
		VerticalShop
	},
	data() {
		return {
			styles:{
				width:332
			},
			title: '',
			list: null,
			//初始化销量排序
			sellNum: 0,
			//初始化价格排序
			priceSort: 0,
			recommend: [
				{
					reimg: '../../static/images/indexStatic/goods/good01.jpg',
					retit: '巴掌柜',
					resale: '27',
					renum: '17'
				},
				{
					reimg: '../../static/images/indexStatic/goods/good01.jpg',
					retit: '吉祥馄炖吉祥馄炖吉祥馄炖吉祥馄炖吉祥馄炖吉祥馄炖',
					resale: '27',
					renum: '17'
				},
				{
					reimg: '../../static/images/indexStatic/goods/good01.jpg',
					retit: '巴掌柜',
					resale: '27',
					renum: '17'
				},
				{
					reimg: '../../static/images/indexStatic/goods/good01.jpg',
					retit: '巴掌柜',
					resale: '27',
					renum: '17'
				},
				{
					reimg: '../../static/images/indexStatic/goods/good01.jpg',
					retit: '巴掌柜',
					resale: '27',
					renum: '17'
				}
			],
			barHeight: '',
			boxHeight: '',
			searchHeight: '',
			searchvisible: false,
			search: {},
			isSearch: false
		};
	
	},
	onReady() {
		
	},
	onLoad(options) {
		
	},
	methods: {
		resetSearch(search) {
			console.log(search);
			this.search = search;
			this.isSearch = false;
			this.closeSearch();
			this.getList1();
		},
		confirmSearch(search) {
			console.log(search);
			this.sellNum = 0;
			this.priceSort = 0;
			this.isSearch = true;
			this.search = search;
			this.closeSearch();
			this.getList1();
		},
		openSearch() {
			this.searchvisible = true;
		},
		closeSearch() {
			this.searchvisible = false;
		},
		turnShop(id) {
			this.$common.redirect(`/pages/specialty/detail?id=${id}&type=2`);
		},
		sortShop(index) {
			switch (index) {
				case 0:
					this.getList(classid).then(res => {
						this.sellNum = 0;
						this.priceSort = 0;
						this.isSearch = false;
					});
					break;
				case 1:
					this.isSearch = false;
					let sellNum = this.sellNum;
					if (sellNum == 0 || sellNum == 2) this.sellNum = 1;
					if (sellNum == 1) this.sellNum = 2;
					this.priceSort = 0;
					this.getList(param.classid ? param.classid : classid, this.sellNum == 1 ? 5 : 6).then(res => {
						this.list = res.list;
					});
					break;
				case 2:
					this.isSearch = false;
					let priceSort = this.priceSort;
					if (priceSort == 0 || priceSort == 2) this.priceSort = 1;
					if (priceSort == 1) this.priceSort = 2;
					this.sellNum = 0;
					this.getList(param.classid ? param.classid : classid, this.priceSort == 1 ? 3 : 4).then(res => {
						this.list = res.list;
					});
					break;
			}
		},
		//获取内容列表
		getList(classid, order) {
			if (classid) {
				param['classid'] = classid;
			} else {
				delete param['classid'];
			}
			if (order) {
				param['order'] = order;
			} else {
				delete param['order'];
			}
			if (!param['city']) {
				param['city'] = app.globalData.locate.city == '九江市' ? app.globalData.locate.city : app.globalData.locate.cityData;
			}
			console.log('getList', param);
			return new Promise((resolve, reject) => {
				this.$api.common
					.get('/api/json/content/content.ashx?action=list', param)
					.then(res => {
						this.list = res.list;
					})
					.catch(err => {
						console.log(err);
					});
			});
		},
		//获取内容列表
		getList1() {
			var p = '';
			if (this.search.classid) {
				param.classid = this.search.classid;
				if (this.search.classid.indexOf('classid') > -1) {
					p += '&' + this.search.classid;
				} else {
					p += '&classid=' + this.search.classid;
				}
			} else {
				param.classid = '10016|10017|10018';
				p = '&classid=' + '10016|10017|10018';
			}
			if (this.search.specialid) {
				param.specialid = this.search.specialid;
				p += '&' + this.search.specialid;
			} else {
				delete param['specialid'];
			}
			if (this.search.price) {
				let pParam = this.search.price.split('&');
				pParam.forEach((item, index) => {
					pParam[index] = item.split('=');
				});
				pParam.forEach((item, index) => {
					item.forEach((keys, index1) => {
						param[keys[0]] = keys[1];
					});
				});
				p += '&' + this.search.price;
				// console.log(this.search.price);
			} else {
				delete param['price1'];
				delete param['price2'];
			}
			if (this.search.attribute) {
				param.attribute = this.search.attribute;
				p += '&' + this.search.attribute;
			} else {
				delete param['attribute'];
			}
			if (!param['city']) {
				param['city'] = app.globalData.locate.city == '九江市' ? app.globalData.locate.city : app.globalData.locate.cityData;
			}
			// let pParam=p.split("&");
			// pParam.forEach((item,index)=>{
			// 	item.split("=")
			// })
			// console.log(pParam);
			// pParam.forEach((item,index)=>{
			// 	item.forEach((keys,index1)=>{
			// 		param[keys[0]]=keys[1]
			// 	})
			// })
			console.log(param);
			this.$api.common
				.get('/api/json/content/content.ashx?action=list', param)
				.then(res => {
					this.list = res.list;
					console.log(res);
				})
				.catch(err => {
					console.log(err);
				});
		},
		/**
		 * 返回上一页
		 * @author 空心科技-王效玉
		 * @date 2020-06-22
		 */
		goback() {
			uni.navigateBack({
				delta: 1
			});
		}
	}
};
</script>
<style lang="scss" scoped>
	.life-tab{
		background-color: #ffffff;
	}
	.headSreach{
		width: 100%;
	}
.life-tab-item {
	height: 100%;
}
.flexCon {
	display: flex !important;
	flex-direction: column !important;
	justify-content: center !important;
	top: 0 !important;
}
.marT5 {
	margin-top: 5rpx;
}
/* 严选商城 */
.spec-header {
  background: #55a1ff;
  height: 320rpx;
  padding: 0 40rpx;
}
.spec-head {
  display: flex;
  margin-bottom: 45rpx;
  //   padding-top: 180rpx;
  text-align: center;
  image {
    width: 40rpx;
    height: 40rpx;
  }
  .spec-return {
    width: 60rpx;
  }
  .spec-tit {
    color: #fff;
    font-size: 40rpx;
    font-weight: 600;
    flex: 1;
  }
  .spec-scan {
    width: 60rpx;
    text-align: right;
  }
}
.spec-label {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 48rpx 0 64rpx;
  background: #fff;
  border-radius: 8rpx;
  height: 68rpx;
  line-height: 68rpx;
  padding: 0 20rpx;
  .spec-label-icon {
    width: 30rpx;
    margin-right: 20rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    image {
      width: 30rpx;
      height: 30rpx;
    }
  }
  .spec-label-input {
    flex: 1;
    input {
      height: 68rpx;
      line-height: 68rpx;
      font-size: 28rpx;
    }
  }
}

.spec-banner {
  height: 270rpx;
  margin: 0 40rpx;
  .spec-banner-img {
    margin-top: -40rpx;
    border-radius: 8rpx;
    image {
      width: 100%;
      height: 270rpx;
      border-radius: 8rpx;
    }
  }
}
.spec-select {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80rpx;
  padding-bottom: 50rpx;
  .spec-select-item {
    flex: 1;
    text-align: center;
    font-size: 24rpx;
    color: #666;
    image {
      padding-bottom: 20rpx;
      width: 88rpx;
      height: 88rpx;
      border-radius: 100%;
    }
  }
}
.spec-title {
  font-size: 36rpx;
  font-weight: 600;
  padding: 0 40rpx 40rpx;
}
.spec-honest {
  height: 270rpx;
  padding: 0 40rpx;
  margin-bottom: 60rpx;
  .swiper {
    width: 100%;
    height: 270rpx;
    margin-bottom: 60rpx;
    .swiper {
      width: 100%;
      height: 270rpx;
    }
    image {
      width: 100%;
      height: 270rpx;
      border-radius: 8rpx;
    }
  }
}

.spec-recommend {
  padding: 0 40rpx;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .spec-recommend-item {
    width: 320rpx;
    padding-bottom: 40rpx;
    image {
      width: 320rpx;
      height: 320rpx;
    }
    .spec-recommend-tit {
      font-size: 28rpx;
      color: #666;
      padding: 30rpx 0 10rpx;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .spec-recommend-item:nth-child(2n-1) {
    margin-right: 30rpx;
  }
  .spec-recommend-price {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28rpx;
    .spec-recommend-sale {
      color: #dc5858;
      flex: 1;
    }
    .spec-recommend-look {
      width: 200rpx;
      text-align: right;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      color: #999;
      font-size: 22rpx;
      image {
        width: 32rpx;
        height: 32rpx;
      }
      view{
        display: inline-block;
        padding-right: 10rpx;
      }
    }
  }
}
</style>
