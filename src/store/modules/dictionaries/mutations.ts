import { MutationTree } from 'vuex'
import { SET_DICTIONARIES } from './mutationTypes'
import { IStateDictionaries } from 'friendshome-api'

export const mutations: MutationTree<IStateDictionaries> = {
  [SET_DICTIONARIES](state, payload: IStateDictionaries) {
      state = payload
  },
}
