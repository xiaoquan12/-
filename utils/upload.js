import config from '@/config'
import store from '@/store'
import qs from './qs'
import ui from './ui'
import md5 from './md5.js'

/**
 * 公用上传请求
 * @author 空心科技-王效玉
 * @date 2020-06-22
 * @param 请求接口地址 url
 * @param 上传的文件 filePath
 * @param {请求的参数} params}
 * @returns {接口返回的数据}
 */

export default function upload({ url, filePath, params }) {
  params = params || {}
  params.companyid = 1460
  var timestamp = Date.parse(new Date())
  timestamp = timestamp / 1000
  params.timestamp = timestamp
  var token = '8B67D7DA4D46F22C0EF2B8DE918CBAAF'
  var code = md5(token + timestamp)
  params.code = code
  url = qs.merge(url, params)
  let loading = params.loading != false

  return new Promise((resolve, reject) => {
    if (loading) {
      ui.showLoading()
    }
    uni.uploadFile({
      header: {
        'content-type': 'multipart/form-data',
        cookie: store.getters.userToken
      },
      url: config.apiBaseUrl + url,
      filePath: filePath,
      name: 'file',
      success: res => {
        if (loading) {
          ui.hideLoading()
        }

        resolve(JSON.parse(res.data) || {})
      },
      fail: res => {
        if (loading) {
          ui.hideLoading()
        }

        reject(JSON.parse(res) || {})
      }
    })
  })
}
