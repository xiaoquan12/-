<template>
	<view class="sreachView flex-verCenter relative" :style="{'width':styles.width+'rpx','height':styles.height+'rpx'}">
		<input type="text" class='inputTexts font28' :value="inputValue" @input='inputValue=$event.detail.value'  placeholder="请输入搜索内容" placeholder-class="inputText"/>
		  <image src="/static/images/sreachIcon.png"  @click='turnSreach(inputValue)' class='sreachIcon' mode="widthFix"></image>
	</view>
</template>

<script>
	export default {
	  props: {
         styles:{
			 type:Object,
			 default:""
		 }
	  },
	  data() {
	    return {
	      inputValue:""
	    }
	  },
	  mounted() {
	    
	  },
	  methods: {
	    turnSreach(text){
	    	if(text!=''){
	    		this.$common.redirect('/pages/index/sreachResult?keyword='+text)
	    	}else{
	    		this.$ui.showToast("请输入搜索内容")
	    	}
	    },
	  }
	}
</script>

<style>
	.sreachIcon{
		position: absolute;
		top: 20rpx;
		right: 32rpx;
		width: 42rpx;
		height: 42rpx;
	}
	.inputText{
		/* margin-left: 16rpx; */
		font-size: 28rpx;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color: #999999;
		/* background-color: red; */
	}
	.inputTexts{
		margin-left: 26rpx;
	}
	.sreachView{
		/* position: absolute;
		top: 454rpx;
		left: 40rpx;
		width: 670rpx;
		height: 80rpx; */
		background: #FFFFFF;
		box-shadow: 0rpx 6rpx 12rpx rgba(0, 0, 0, 0.05);
		opacity: 1;
		z-index: 10;
	}
</style>
