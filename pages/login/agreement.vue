<!-- 用户协议agreement -->
<template>
	<view class="p32">
		<view class="title">
			用户协议
		</view>
		
		<view class="list">
			<view v-for="(item,index) in list" :key="index">
				<view class="list_title">
					{{item.title}}
				</view>
				<view v-for="(iitem,ii) in item.list" :key="ii" class="list_txt">
					{{iitem}}
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {	
				
				list:[{
					title:"一·本站用户协议的生效与变更",
					list:[
						'才产维她我传阶气号真识当分比具心并类利光图我想那住例象果装口高什处强型日今易省图该真包交特外。百速置党住受力至流求斗持集思了八新头同照指月们容重采千人性形五知电认即向有火准识法面则件风每例即种消认团例史元能今今证技上除张经厂难组。'
					]
				},{
					title:"二·文字占位",
					list:[
						'才产维她我传阶气号真识当分比具心并类利光图我想那住例象果装口高什处强型日今易省图该真包交特外。'
					]
				},{
					title:"三·文字占位",
					list:[
						'记忆点源于与众不同，专业感源于整齐划一'
					]
				},{
					title:"四·文字占位",
					list:[
						'联风格收合难酸已电场结号历参风为运火关关用机界区求直关发七这全来力证极群文活导号听定称此给认离厂解格我北多中公年节空连门此相。速放个级不北且机计整来所求员青江需争增何那战者开去何些调马它京委信门治能你于管总现解断场想起。断即京为更权易千象知百包南重必局教方一知太小青们广论角高立验同下整两快南保战只新。切三性别规八须张般先基院特往实声关律打干亲风我深影多包米低百参时情这什业路温很采写权题儿转物大重细领根选划务政话十务万展同你北安构又资就九明样音它候压。'
					]
				}]

			};
		}
	}
</script>

<style lang="scss">
	page {
		background-color: white;
	}

	

	.title {
		margin: 80rpx 0;
		margin-bottom: 20rpx;
		font-size: 48rpx;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: #000000;
		text-align: center;
	}
	
	.list_title{
	
		font-size: 32rpx;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: #393C41;
		padding-bottom: 22rpx;
		padding-top: 64rpx;

	}
	
	.list_txt{
		
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #676C72;

	}
</style>
