<script>
import 'static/css/main.scss'
import 'static/css/total.scss'
export default {
  globalData: {
	  userInfo:{
		  
	  },
	  systemInfo:{
	     
	  },
	  locate:{
		  city:"九江市",
		  lng: "",
		  lat:"",
		  cityData:""
	  }
  },
  onLaunch: function(res) {
	  console.log("res");
	  uni.getLocation({
	  	success(res) {
	  		console.log("getLocation",res);
	  	},
	  });
	  const systemInfo=uni.getSystemInfoSync();
	  console.log("systemInfo",systemInfo);
	  systemInfo.radio=systemInfo.windowWidth/750;
	  this.globalData.systemInfo=systemInfo;
  },
  onShow: function() {
	  
  },
  onHide: function() {
	  
  }
}
</script>

<style>
	/*每个页面公共css */
</style>
