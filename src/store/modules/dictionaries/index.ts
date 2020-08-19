import { Module } from 'vuex'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'
import { IStateDictionaries } from 'friendshome-api'
import { RootState } from '@/store/types'

export const state: IStateDictionaries = {
    animals: [],
    colors: [],
}

const namespaced = true

export const dictionaries: Module<IStateDictionaries, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
}
