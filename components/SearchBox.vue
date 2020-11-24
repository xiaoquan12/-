<template>
  <div class="searchBox">
    <div class="header">
      <div class="close" @click="close">
        <img src="/static/images/delete02.png" alt="">
      </div>
      <div class="title">快速筛选</div>
    </div>
    <div class="contentBox">
      <div class="content">
        <div class="title">{{searchModel.classtitle}}</div>
        <ul>
          <li :class="index==classidCur?'cur':''" @click="selectClass(item,index)" v-for="(item, index) in searchModel.classData" :key="index">{{item.name}}</li>
        </ul>
      </div>
      <div class="content">
        <div class="title">{{searchModel.specialtitle}}</div>
        <ul>
          <li :class="index==specialidCur?'cur':''" @click="selectSpecial(item,index)" v-for="(item, index) in searchModel.specialData" :key="index">{{item.name}}</li>
        </ul>
      </div>
      <div class="content">
        <div class="title">{{searchModel.pricetitle}}</div>
        <ul>
          <li :class="index==priceCur?'cur':''" @click="selectPrice(item,index)" v-for="(item, index) in searchModel.priceData" :key="index">{{item.name}}</li>
        </ul>
      </div>
      <div class="content">
        <div class="title">{{searchModel.attributetitle}}</div>
        <ul>
          <li :class="index==attributeCur?'cur':''" @click="selectAttribute(item,index)" v-for="(item, index) in searchModel.attributeData" :key="index">{{item.name}}</li>
        </ul>
      </div>
    </div>
    <div class="bottonBox">
      <div class="resetbotton" @click="reset">
        重置
      </div>
      <div class="confirmbotton" @click="confirm">
        确定
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sytles: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      searchModel: {},
      list: {},
      classidCur:0,
      specialidCur:0,
      priceCur:0,
      attributeCur:0,
      search: {
        classid: null,
        specialid: null,
        price: null,
        attribute: null
      }
    }
  },
  mounted() {
    this.$api.common
      .get('api/json/content/content.ashx?action=searchselect', {
        orderstatus: '1',
        orderlist:
          '默认|default,上架|time,价格|price,销量|sales,评价|comment,点击|hits',
        classstatus: '1',
        parentclassid: '0',
        classtitle: '',
        specialstatus: '1',
        specialtitle: '',
        fieldstatus: '1',
        pricestatus: '1',
        pricelist:
          '0-100,100-500,500-2000,2000-5000,5000-10000,10000-20000,20000-50000,50000以上',
        attributestatus: '1',
        attributetitle: '',
        attributelist: '推荐|elite,热门|hot,新品|xinpin,促销|cuxiao',
        channelid: 105
      })
      .then(res => {
        this.searchModel = res
        this.list = res
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    selectClass(item,index) {
      if(index==0){
		  this.search.classid = "10016|10017|10018"
	  }else{
		  this.search.classid = item.where
	  }
       this.classidCur=index
      
    },
    selectSpecial(item,index) {
       this.specialidCur=index
      this.search.specialid = item.where
    },
    selectPrice(item,index) {
       this.priceCur=index
      this.search.price = item.where
    },
    selectAttribute(item,index) {
       this.attributeCur=index
      this.search.attribute = item.where
    },
    close() {
      this.$emit('close')
    },
    reset() {
      this.searchModel = this.list
      this.search = {
        classid: null,
        specialid: null,
        price: null,
        attribute: null
      }
      this.classidCur=0
      this.specialidCur=0
      this.priceCur=0
      this.attributeCur=0
      this.$emit('reset', this.search)
    },
    confirm() {
      this.$emit('confirm', this.search)
    }
  }
}
</script>

<style lang="scss" scoped>
.searchBox {
  background: #ffffff;
  z-index: 9999;
  position: relative;
  width: 564rpx;
  height: 100%;
  .header {
    display: flex;
    align-items: center;
    border-bottom: 1px #eeeeee solid;
    padding-top: 180rpx;
    padding-bottom: 24rpx;
    .close {
      display: inline-block;
      padding-left: 32rpx;
      img {
        width: 32rpx;
        height: 32rpx;
      }
    }
    .title {
      text-align: center;
      width: 100%;
    }
  }
  .contentBox {
    padding: 32rpx;
    .content {
      padding-bottom: 48rpx;
      .title {
        font-size: 28rpx;
        color: #333333;
        font-weight: bold;
        padding-bottom: 24rpx;
      }
      ul {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        li {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #333333;
          font-size: 28rpx;
          padding: 16rpx 32rpx; // width: 120rpx;
          // height: 72rpx;
          border-radius: 36rpx;
          border: 2rpx solid rgba(238, 238, 238, 1);
          text-align: center;
          margin-right: 16rpx;
          margin-bottom: 24rpx;
        }
        li.cur {
          color: #5ebbff;
          border: 2rpx solid #5ebbff;
        }
      }
    }
  }
  .bottonBox {
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    width: 100%;
    .resetbotton {
      background: #eeeeee;
      color: #333333;
    }
    .confirmbotton {
      background: #5ebbff;
      color: #ffffff;
    }
    .resetbotton,
    .confirmbotton {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 98rpx;
      width: 282rpx;
      font-size: 32rpx;
    }
  }
}
</style>