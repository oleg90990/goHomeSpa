import { Module } from 'vuex'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'
import { IStateUserResponse } from 'friendshome-api'
import { RootState } from '@/store/types'

export const state: IStateUserResponse = {
  access_token: '',
  user: {
    id: 0,
    name: '',
    email: '',
    mobile: '',
    vk: false,
    vkGroups: [],
  },
}

const namespaced = true

export const user: Module<IStateUserResponse, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
}
