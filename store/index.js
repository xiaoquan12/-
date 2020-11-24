import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import app from './modules/app'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    auth,
    app
  },	
  strict: process.env.NODE_ENV !== 'production'
})
