import Vue from 'vue'
import App from './App'
import api from './api'
import ui from './utils/ui'
import * as common from '@/utils/common'
import * as filters from '@/utils/filter'
import store from './store'
import router from './router'
import storage from '@/utils/storage'
Object.keys(filters).forEach(key=>{
    Vue.filter(key,filters[key])//插入过滤器名和对应方法
})
String.prototype.myReplace=function(f,e){//吧f替换成e
    var reg=new RegExp(f,"g"); //创建正则RegExp对象   
    return this.replace(reg,e); 
}
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$api = api
Vue.prototype.$ui = ui
Vue.prototype.$store = store
Vue.prototype.$common = common
Vue.prototype.$app = { router: router }
Vue.prototype.$storage = storage


console.log(uni)

const app = new Vue({
  ...App
})



app.$mount()
