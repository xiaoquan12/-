<template>
	<view>
		<view class="tip flex flexbetween">
			<view class="">
				共{{totalCount}}条，最多为您保存30条
			</view>
			<view @click="topEditTap">
				{{isEdit?'编辑':'完成'}}
			</view>

		</view>

		<view class="list flex-column-center">
			<checkbox-group @change="checkBoxChange">
				<view class="item_wrap" v-for="(item,index) in list" :key="index">
					<view class="date flex">
						<radio :value="index" color="#000000" v-if="showDelete" @click="clickDate(index)">
						</radio>
						<view class="month">
							{{item.month}}
						</view>
						<view class="day">
							/{{item.day}}
						</view>
					</view>
					<view class="goods_list">
						<view v-for="(item,ii) in item.list" :key="ii" class="goods_wrap" :class="{'showDelete':showDelete}">
							<!-- <radio :value="index + '-'+ii" color="#000000" v-if="showDelete" :checked="item.checked">
							</radio> -->
							<label>
								<checkbox :value="index + '-'+ii" class="checkbox" v-if="showDelete" :checked="selectList.includes(index + '-'+ii)" />
							</label>
							<GoodsShow></GoodsShow>

						</view>
					</view>
				</view>
			</checkbox-group>
		</view>
		<view class="nomore">
			没有更多了~
		</view>

		<view class="bottom_delete" v-if="showDelete">
			<view class="left">
				<label class="radio">
					<radio-group name="1" @change="allSelectClick">
						<radio :checked="false" color="#000000" /><text>全选</text>
					</radio-group>
				</label>

			</view>
			<view class="right" :class="{'deleteDisabled':selectList.length==0}">
				删除已选（{{selectList.length}}）
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

				list: [],
				showDelete: false,
				selectList: [],
				isEdit: true
			};
		},
		mounted() {

			this.getList()
		},
		computed: {

		},
		methods: {

			topEditTap() {

				this.isEdit = !this.isEdit
				this.showDelete = !this.showDelete

				this.selectList = []


			},
			clickDate(index) {


				let list = this.list[Number(index)].list || []



				let selectList = list.map((item, ii) => `${index}-${ii}`)

				this.selectList = this.selectList.concat(selectList)

			},
			// 获取浏览历史数据
			async getList() {



				let list = new Array(4).fill({
					createTime: 1606528874354,
					checked: false
				})

				list = list.concat(new Array(3).fill({
					createTime: Date.now(),
					checked: false
				}))


				this.totalCount = list.length

				this.list = this.groupByListByTime(list)
			},
			// 根据时间分组
			groupByListByTime(list = []) {

				let groups = {}

				list.forEach(item => {

					let time = this.$common.formatDate(item.createTime, 'yyyy-M-dd')

					groups[time] = groups[time] || []

					groups[time].push(item)

				})

				let result = []

				for (let i in groups) {
					result.push({
						time: i,
						month: i.substring(5, 7),
						day: i.substring(8, i.length),
						list: groups[i]
					})
				}




				return result


			},
			checkBoxChange(e) {



				this.selectList = e.detail.value || []
			},
			allSelectClick(e) {

				let list = this.list;


				let selectList = []

				list.forEach((item, index) => {
					item.list.forEach((i, ii) => {

						selectList.push(index + "-" + ii)
					})
				})

				this.selectList = selectList


			}
		}
	}
</script>

<style scoped lang="scss">
	.tip {
		height: 68rpx;
		background: #F5F5F5;
		padding: 16rpx 32rpx;
		box-sizing: border-box;
		font-size: 22rpx;
		font-family: PingFangSC;
		color: #666666;


		view:nth-child(2) {
			font-size: 28rpx;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;
			color: #2B2C3E;
			cursor: pointer;
		}


	}

	checkbox,
	radio {

		transform: scale(0.7);
	}

	.item_wrap {
		border-bottom: 10rpx solid #F6F6F6;
	}

	.date {
		padding: 24rpx 34rpx 0 34rpx;
		box-sizing: border-box;
		display: flex;
		align-items: flex-end;

		.month {

			font-size: 52rpx;
			font-family: DIN-BlackItalic, DIN;
			color: #333333;
			line-height: 62rpx;
			font-weight: 600;

		}

		.day {
			font-size: 32rpx;
			color: #999999;
			line-height: 38rpx;
			font-weight: 500;


		}
	}

	.showDelete {
		box-sizing: border-box;
		padding-left: 32rpx;
		overflow: hidden;
		display: flex;



	}

	.goods_wrap {
		display: flex;
		align-items: center;
		width: 100%;
		box-sizing: border-box;







	}



	.nomore {

		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #666666;
		line-height: 36rpx;
		padding-top: 24rpx;
		padding-bottom: 38rpx;
		text-align: center;
	}

	.bottom_delete {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 98rpx;
		background-color: white;
		display: flex;
		align-items: center;

		.left {
			flex: 1;
			padding: 0 32rpx;
			box-sizing: border-box;

			color: #333333;
			font-size: 28rpx;

			radio {
				transform: scale(0.7);
			}
		}

		.right {
			width: 250rpx;
			background: #2B2C3E;
			font-size: 32rpx;
			font-weight: 600;
			color: white;
			height: 100%;
			align-items: center;
			justify-content: center;
			display: flex;
		}


		.deleteDisabled {
			background: #2B2C3E;
			opacity: 0.2024;
		}
	}
</style>
