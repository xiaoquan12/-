import QQMapWX from './qqmap-wx-jssdk.js'

// 腾讯位置服务的密钥
const WX_KEY = 'CQLBZ-XBV3D-6PM42-PA4BQ-DTVHZ-NVFJJ'
const wxMap = new QQMapWX({ key: WX_KEY })

export default {
  /**
   * 根据经纬度获取地址
   * @author 空心科技-王效玉
   * @date 2020-06-22
   * @param 纬度 latitude
   * @param 经度 longitude
   * @returns {地理位置信息}
   */
  getLocation(latitude, longitude) {
    return new Promise((resolve, reject) => {
      wxMap.reverseGeocoder({
        location: {
          latitude: latitude,
          longitude: longitude
        },
        success: res => {
          var adInfo = res.result.ad_info
          var town = res.result.address_reference && res.result.address_reference.town
          resolve({
            cityCode: adInfo.city_code.replace(adInfo.nation_code, ''),
            countyCode: adInfo.adcode,
            province: adInfo.province,
            city: adInfo.city,
            county: adInfo.district,
            townCode: town ? town.id : '',
            townName: town ? town.title : ''
          })
        },
        fail: res => {
          reject(res)
        },
        complete: res => {
          console.log(res)
        }
      })
    })
  }
}
