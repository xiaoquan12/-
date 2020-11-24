import api from '@/api'
import ui from '@/utils/ui'
//设置用户登录令牌状态
const USER_TOKEN_KEY = 'user_token'

export const SET_USER_TOKEN = 'SET_USER_TOKEN'

const auth = {
  state: {
    userToken: uni.getStorageSync(USER_TOKEN_KEY) || ''
  },
  mutations: {
    [SET_USER_TOKEN]: (state, access_token) => {
      if (access_token) {
        state.userToken = access_token
        uni.setStorageSync(USER_TOKEN_KEY, state.userToken)
      } else {
        state.userToken = ''
        uni.removeStorageSync(USER_TOKEN_KEY)
      }
    }
  },
  actions: {}
}

export default auth
