import qs from '@/utils/qs'
import store from '@/store'
import config from '@/config'
import api from '@/api'
import Router from './router'

let router = new Router()
/**
 * 跳转路由之前
 * @author 空心科技-王效玉
 * @date 2020-06-22
 */
router.beforeEach((navType, path, params) => {
  let url = qs.merge(path, params)
  if (config.requireAuthPaths.indexOf(path) > -1) {
    if (!store.getters.isLogin) {
      // #ifdef MP-WEIXIN
      uni.switchTab({ url: '/pages/home/my' })
      // #endif
    } else {
      uni[navType]({ url: url })
    }
  } else {
    uni[navType]({ url: url })
  }
})

export default router
