import request from '@/utils/request'
import upload from '@/utils/upload'

/**
 * 公共POST请求
 * @author 空心科技-王效玉
 * @date 2020-06-22
 * @param "请求接口地址" url
 * @param {请求参数} data
 * @returns {返回接口数据}
 */
export function post(url, data) {
  return request({
    url: url,
    method: 'post',
    data: data
  })
}
/**
 * 公共GET请求
 * @author 空心科技-王效玉
 * @date 2020-06-22
 * @param "请求接口地址" url
 * @param {请求参数} data
 * @returns {返回接口数据}
 */
export function get(url, params) {
  return request({
    url: url,
    method: 'get',
    params: params
  })
}

/**
 * 公共上传文件请求
 * @author 空心科技-王效玉
 * @date 2020-06-22
 * @param "请求接口地址" url
 * @param {上传文件} filePath
 * @param {请求参数} params
 * @returns {返回接口数据}
 */
export function uploadFile(url, filePath, params) {
  return upload({
    url: url,
    filePath: filePath,
    params: params
  })
}
