import Vue from 'vue'
import Vuex from 'vuex'
import { RootState } from './types'
import { dictionaries } from './modules/dictionaries'

Vue.use(Vuex)

const store = new Vuex.Store<RootState>({
  modules: {
    dictionaries,
  },
})

export default store
