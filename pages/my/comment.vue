<!--点评列表页-->
<template>
  <div>
    <nothing v-if="list.length == 0">
      <div slot="nothing">
        <p>很抱歉，暂无点评数据</p>
      </div>
    </nothing>
    <ul v-else class="comment-list">
      <li v-for="(item, index) in list" :key="index">
        <div class="comment-user flexbetween">
          <view class='flex-verCenter'>
            <image class="avatar" mode="aspectFill" :src="item.storePhoto" />
            <view class="nick">{{item.storeName}}</view>
          </view>									
          <view class="time fr">{{item.commentTime}}</view>
        </div>
        <div class="comment-star">
          <view class="star flexcenter flexleft">
            <image src="/static/images/star.png" v-if="item.commentLevel>=1" />
            <image src="/static/images/star.png" v-if="item.commentLevel>=2" />
            <image src="/static/images/star.png" v-if="item.commentLevel>=3" />
            <image src="/static/images/star.png" v-if="item.commentLevel>=4" />
            <image src="/static/images/star.png" v-if="item.commentLevel==5" />
            <view class="rate">{{item.commentLevel}}.0</view>
          </view>
        </div>
        <div class="comment-con">
          {{item.commentContent}}
        </div>
		<view class="imgView flex" v-if='item.commentImages&&item.commentImages.length>0'>
			<image class='imgCommon' @click='preview(index1,item.commentImages)' :class='{marL0:index1==0}' mode='aspectFill' :src="item1"  v-for='(item1,index1) in item.commentImages' :key='index1'></image>
		</view>
      </li>
    </ul>
  </div>
</template>
<script>
	
import Nothing from '@/components/Nothing'
export default {
  components: { Nothing },
  data() {
    return {
      list: [{
		  storePhoto:"/static/images/a_down.png",
		  storeName:"阿斯达",
		  commentTime:"2020-20-2",
		  commentLevel:5,
		  commentLevel:1,
		  commentContent:'1111',
	  }]
    }
  },
  onShow(o) {
  },
  /**
   * 下拉刷新
   * @author 空心科技-王效玉
   * @date 2020-06-22
   */
  onPullDownRefresh: function() {
  },
  filters:{
	  
  },
  /**
   * 滚动条滚动到底部时
   * @author 空心科技-王效玉
   * @date 2020-06-22
   */
  onReachBottom() {
  },
  methods: {
	  preview(index,urls){
		  this.$ui.previewImage({current:index,urls:urls})
	  },
	  
    /**
     * 加载点评数据
     * @author 空心科技-王效玉
     * @date 2020-06-22
     */
    
  }
}
</script>
<style>
	.imgView{
		margin-top: 20rpx;
		margin-left: 80rpx;
		flex-wrap: wrap;
	} 
	.imgCommon{
		position: relative;
		width: 150rpx;
		height: 150rpx;
		margin-left: 20rpx;
		border-radius: 8rpx;
	}
	.marL0{
		margin-left: 0;
	}
</style>