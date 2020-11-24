import authPaths from './auth_paths'

/**
 * npm run build （发布正式环境需要用到的）调用的接口地址配置
 * @author 空心科技-王效玉
 * @date 2020-06-22
 * @apiBaseUrl 接口地址
 * @requireAuthPaths 需要登陆的页面数组
 */
export default {
  platform: process.env.VUE_APP_PLATFORM === 'mp-weixin' ? 'WeApp' : 'H5',
  apiBaseUrl: 'https://jiujiukeji002.qkk.cn/',
  version: '0.0.0',
  requireAuthPaths: authPaths,
  
}
