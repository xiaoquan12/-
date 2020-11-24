const getters = {
  //用户登陆令牌
  userToken: state => state.auth.userToken,
  //是否登陆
  isLogin: state => state.auth.userToken !== ''
}

export default getters
