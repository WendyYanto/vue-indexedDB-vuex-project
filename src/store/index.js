import Vue from 'vue'
import Vuex from 'vuex'

import about from './modules/about'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    about
  }
})

export default store