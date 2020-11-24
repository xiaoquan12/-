export default class Router {
  constructor(arg) {
    this.callBack = () => {}
  }

  /**
   * 路由跳转之前执行的方法
   * @author 空心科技-王效玉
   * @date 2020-06-22
   * @param function callBack
   */
  beforeEach(callBack) {
    if (callBack instanceof Function) this.callBack = callBack
  }

  /**
   * 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面
   * @author 空心科技-王效玉
   * @date 2020-06-22
   * @param "页面地址" path
   * @param {携带参数} params
   */
  navigateTo(path, params) {
    this.callBack('navigateTo', path, params)
  }
  /**
   * 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面
   * @author 空心科技-王效玉
   * @date 2020-06-22
   * @param "页面地址" path
   * @param {携带参数} params
   */
  redirectTo(path, params) {
    this.callBack('redirectTo', path, params)
  }
  /**
   * 关闭所有页面，打开到应用内的某个页面
   * @author 空心科技-王效玉
   * @date 2020-06-22
   * @param "页面地址" path
   * @param {携带参数} params
   */
  reLaunch(path, params) {
    this.callBack('reLaunch', path, params)
  }
  /**
   * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
   * @author 空心科技-王效玉
   * @date 2020-06-22
   * @param "页面地址" path
   * @param {携带参数} params
   */
  switchTab(path, params) {
    this.callBack('switchTab', path, params)
  }
  /**
   * 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages 获取当前的页面栈，决定需要返回几层
   * @author 空心科技-王效玉
   * @date 2020-06-22
   * @param "返回的页面数，如果 delta 大于现有页面数，则返回到首页" delta
   */
  navigateBack(delta) {
    uni.navigateBack({
      delta
    })
  }
}
