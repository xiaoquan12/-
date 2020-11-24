export default {
  /**
   * 合并url参数
   * @author 空心科技-王效玉
   * @date 2020-06-22
   * @param 页面地址 url
   * @param 要合并的参数 params
   * @returns 合并后的url地址
   */
  merge(url, params) {
    let query = this.parse(params)
    if (query === '') {
      return url
    }

    if (url.indexOf('?') > -1 || url.indexOf('&') > -1) {
      url = `${url}&${query}`
    } else {
      url = `${url}?${query}`
    }

    return url
  },
  /**
   * 处理url参数
   * @author 空心科技-王效玉
   * @date 2020-06-22
   * @param 要处理的参数 params
   * @returns 处理后的url地址
   */
  parse(params) {
    let str = []
    for (let key in params) {
      let val = params[key]
      if (!key || (!val && val != 0)) {
        continue
      }
      str.push(key + '=' + encodeURIComponent(val))
    }

    return str.join('&')
  }
}
