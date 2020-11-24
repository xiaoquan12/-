<!-- 城市选择组件 -->
<template>
	<view class="area-picker">
		<view @click="hide" class="mask" :class="{ show: open }" @touchmove.stop.prevent catchtouchmove="true"></view>
		<view class="wrap" :class="{ show: open }">
			<view class="picker-header" @touchmove.stop.prevent catchtouchmove="true">
				<view class="btn-picker cancel" :style="{ color: color }" @click="open = false">取消</view>
				<view>城市选择</view>
				<view class="btn-picker submit" :style="{ backgroundColor: color }" @click="_onSubmit">确定</view>
			</view>
			<view class="picker-body">
				<picker-view :value="value" @change="_onChange">
					<picker-view-column>
						<view :key="item.name" class="column-item" v-for="item in provinces">{{ item.name }}</view>
					</picker-view-column>
					<picker-view-column>
						<view :key="item.name" class="column-item" v-for="item in cities">{{ item.name }}</view>
					</picker-view-column>
					<picker-view-column>
						<view :key="item.name" class="column-item" v-for="item in counties">{{ item.name }}</view>
					</picker-view-column>
				</picker-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'area-picker',
		props: {
			startYear: {
				type: Number,
				default: 2000
			},
			endYear: {
				type: Number,
				default: 2030
			},
			color: {
				type: String,
				default: ''
			},
			mode: {
				type: String,
				default: 'date'
			},
			defaultValue: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				open: false,
				provinces: [],
				cities: [],
				counties: [],

				province: '',
				provinceVal: '',
				city: '',
				cityVal: '',
				county: '',
				countyVal: '',

				value: [0, 0, 0]
			}
		},

		mounted() {
			console.log("mounted");
			this.init()
		},

		// watch: {
		//   province() {
		//     let p =  this.cities[v[1]].find(e => e.name == this.province);
		//     this.cities = p.children;
		//     this.counties = this.cities[0].children;
		//     this.city = this.cities[0].name;
		//     this.county = this.counties[0].name;
		//   },
		//   city() {
		//     let c = this.cities.find(e => e.name == this.city);
		//     this.counties = c.children;
		//     this.county = this.counties[0].name;
		//   }
		// },

		methods: {
			/**
			 * 加载城市数据
			 * @author 空心科技-王效玉
			 * @date 2020-06-22
			 * @returns {城市数据}
			 */
			init() {
				this.$ui.showLoading()
				uni.request({
					url: 'https://server.ify.cn/upload/js/country.json',
					success: res1 => {
						console.log(" res1.data", res1.data);
						this.$ui.hideLoading()
						var res = res1.data
						if (res.status === 1) {
							res.list.forEach(e => {
								var k = e.name.split('|')
								e.name = k[0]
								e.value = k[1]
							})
							this.provinces = res.list;
							// console.log(this.provinces);
							res.list[0].list.forEach(e => {
								var k = e.name.split('|')
								e.name = k[0]
								e.value = k[1]
							})
							this.cities = res.list[0].list
							res.list[0].list[0].list.forEach(e => {
								var k = e.name.split('|')
								e.name = k[0]
								e.value = k[1]
							})
							this.counties = res.list[0].list[0].list
							//       console.log(this.provinces);
							// console.log(this.cities);
							// console.log(this.counties);
							this.province = this.provinces[0].name;
							this.provinceVal = this.provinces[0].value;
							this.city = this.cities[0].name
							this.cityVal = this.cities[0].value;
							this.county = this.counties[0].name;
							this.countyVal = this.counties[0].value;
						}
					},
					fail: res => {
						this.$ui.showToast('请求失败')
					}
				})
			},
			/**
			 * 展示城市选择
			 * @author 空心科技-王效玉
			 * @date 2020-06-22
		
			 * @returns {城市数据}
			 */
			show() {
				this.open = true
				// if (this.defaultValue && this.defaultValue.length >= 3) {
				//   let i1 = this.provinces.findIndex(e => e.name === this.defaultValue[0])
				//   if (i1 > -1) {
				//     this.provinces[i1].list.forEach(e => {
				//       var k = e.name.split('|')
				//       e.name = k[0]
				//       e.value = k[1]
				//     })
				//     this.cities = this.provinces[i1].list
				//   }

				//   let i2 = this.cities.findIndex(e => e.name === this.defaultValue[1])
				//   if (i2 > -1) {
				//     this.cities[i2].list.forEach(e => {
				//       var k = e.name.split('|')
				//       e.name = k[0]
				//       e.value = k[1]
				//     })
				//     this.counties = this.cities[i2].list
				//   }

				//   let i3 = this.counties.findIndex(e => e.name === this.defaultValue[2])

				//   if (i1 > -1 && i2 > -1 && i3 > -1) {
				//     setTimeout(() => {
				//       this.province = this.defaultValue[0]
				//       this.city = this.defaultValue[1]
				//       this.county = this.defaultValue[2]
				//       this.value = [i1, i2, i3]
				//     }, 100)
				//   }
				// }
			},
			/**
			 * 隐藏城市选择
			 * @author 空心科技-王效玉
			 * @date 2020-06-22
			 * @returns 无
			 */
			hide() {
				this.open = false
			},
			/**
			 * 选择城市
			 * @author 空心科技-王效玉
			 * @date 2020-06-22
			 * @returns 无
			 */
			_onChange(e) {
				const v = e.detail.value;


				this.provinces[v[0]].list.forEach(e => {
					if (e.name.indexOf("|") > -1) {
						var k = e.name.split('|')
						e.name = k[0]
						e.value = k[1]
					}
				})
				this.cities = this.provinces[v[0]].list
				if (v[1] >= this.cities.length) {
					v[1] = 0
					v[2] = 0
				}

				this.cities[v[1]].list.forEach(e => {
					if (e.name.indexOf("|") > -1) {
						var k = e.name.split('|')
						e.name = k[0]
						e.value = k[1]
					}
				})
				this.counties = this.cities[v[1]].list
				if (v[2] >= this.counties.length) {
					v[2] = 0
				}


				this.province = this.provinces[v[0]].name
				this.provinceVal = this.provinces[v[0]].value
				this.city = this.cities[v[1]].name
				this.cityVal = this.cities[v[1]].value
				this.county = this.counties[v[2]].name
				this.countyVal = this.counties[v[2]].value
				this.value = v
				// console.log("this.provinces", this.provinces);
				// console.log("this.provinceVal", this.provinceVal);
				// console.log("this.city", this.city);
				// console.log("this.cityVal", this.cityVal);
				// console.log("this.county", this.county);
				// console.log("this.countyVal", this.countyVal);
			},
			/**
			 * 确定选择
			 * @author 空心科技-王效玉
			 * @date 2020-06-22
			 * @returns 无
			 */
			_onSubmit() {
				const result = {
					province: this.province,
					city: this.city,
					county: this.county,
					provinceVal: this.provinceVal,
					cityVal: this.cityVal,
					countyVal: this.countyVal
				}
				console.log("result", result);
				this.$emit('submit', result)
				this.hide()
			}
		}
	}
</script>

<style lang="scss">
	$transition: all 0.3s ease;

	.area-picker {
		position: relative;
		z-index: 99999;

		picker-view {
			height: 100%;
		}

		.mask {
			position: fixed;
			z-index: 100000;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-color: rgba(0, 0, 0, 0.6);
			visibility: hidden;
			opacity: 0;
			transition: $transition;

			&.show {
				visibility: visible;
				opacity: 1;
			}
		}

		.wrap {
			z-index: 100001;
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			transition: $transition;
			transform: translateY(100%);

			&.show {
				transform: translateY(0);
			}
		}

		.picker-header {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			height: 92rpx;
			background-color: darken(#f5f5f5, 2%);
			background-color: #f5f5f5;
			font-size: 32rpx;
			color: #333;
		}

		.picker-body {
			width: 100%;
			height: 620rpx;
			overflow: hidden;
			background-color: #fff;
		}

		.column-item {
			text-overflow: ellipsis;
			white-space: nowrap;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.btn-picker {
			position: relative;
			display: inline-block;
			padding: 0 40rpx;
			box-sizing: border-box;
			text-align: center;
			text-decoration: none;
			-webkit-tap-highlight-color: transparent;
			overflow: hidden;
			color: #999;
		}

		.btn-picker.submit {
			color: #5ebbff;
		}
	}
</style>
