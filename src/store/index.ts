import Vue from 'vue'
import Vuex from 'vuex'
import { RootState } from './types'
import { dictionaries } from './modules/dictionaries'
import { user } from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store<RootState>({
  modules: {
    dictionaries,
    user,
  },
})

export default store
