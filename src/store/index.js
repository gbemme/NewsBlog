import Vue from 'vue'
import Vuex from 'vuex'
import readingList from './readingList'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    readingList
  }
})
