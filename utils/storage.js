const postfix = '_deadtime'

/**
 * 公用保存本地存储
 * @author 空心科技-王效玉
 * @date 2020-06-22
 * @param 本地存储key k
 * @param {本地存储值} v
 * @param 要保存的时间秒 t
 */
export function put(k, v, t) {
  console.log(k)
  uni.setStorageSync(k, v)
  if (t) {
    var seconds = parseInt(t)
    if (seconds > 0) {
      var timestamp = Date.parse(new Date())
      timestamp = timestamp / 1000 + seconds
      // console.log(timestamp)
      uni.setStorageSync(k + postfix, timestamp + '')
    } else {
      uni.removeStorageSync(k + postfix)
    }
  }
}

/**
 * 公用获取本地存储
 * @author 空心科技-王效玉
 * @date 2020-06-22
 * @param 本地存储key k
 * @param {默认值} def
 */
export function get(k, def) {
  var deadtime = parseInt(uni.getStorageSync(k + postfix))
  if (deadtime) {
    if (parseInt(deadtime) < Date.parse(new Date()) / 1000) {
      if (def) {
        return def
      } else {
        return
      }
    }
  }
  var res = uni.getStorageSync(k)
  if (res) {
    return res
  } else {
    return def
  }
}

/**
 * 公用移除本地存储
 * @author 空心科技-王效玉
 * @date 2020-06-22
 * @param 本地存储key k
 */
export function remove(k) {
  uni.removeStorageSync(k)
  uni.removeStorageSync(k + postfix)
}
/**
 * 公用清空本地存储
 * @author 空心科技-王效玉
 * @date 2020-06-22
 */
export function clear() {
  uni.removeStorageSync()
}

export default {
  put,
  get,
  remove,
  clear
}

/*
wCache

微信小程序缓存框架，支持数组、json、字符串……支持设置缓存时间、支持缓存读取失败默认值。

一、公共方法

put(k, v, t)

k为key，v为具体内容（支持字符串、json、数组、boolean等等），t为可选参数表示过期时间（单位：秒）
如存储k为123过期时间1秒，则调用put('k', '123', 1)方法；若永久存储调用put('k', '123')
永久保存json：put('k', {"a":"1"})，数组、boolean等同理。

get(k, def)

k为key，def为可选参数，表示无缓存数据时返回值（支持字符串、json、数组、boolean等等）
如读取k缓存，则调用get('k')；若想要无缓存时，返回默认值则get('k','默认值')，支持各个数据类型。

remove(k)

移除某个key

clear()

清空所有key

other

使用wx原生的即可。
如何使用

二、如何使用

下载src文件夹内wCache.js文件
需要使用的js文件头加入var wc = require('../../src/wcache.js')。
var s=wc.get('k', '你好')、wc.put('k', 'string你好啊')等
 */
