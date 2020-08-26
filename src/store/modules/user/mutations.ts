import { setToken, removeToken } from '@/utils/auth'
import { MutationTree } from 'vuex'
import { SET_USER, SET_TOKEN, UNSET_USER, UNSET_TOKEN } from './mutationTypes'
import { IUser, IStateUserResponse } from 'friendshome-api'

export const mutations: MutationTree<IStateUserResponse> = {
  [SET_USER](state, user: IUser) {
    state.user = user
  },
  [UNSET_USER](state) {
    state.user = {
      id: 0,
      name: '',
      email: '',
      mobile: '',
      vk: false,
      vkGroups: [],
    }
  },
  [SET_TOKEN](state, token: string) {
    setToken(token)
    state.access_token = token
  },
  [UNSET_TOKEN](state) {
    removeToken()
    state.access_token = ''
  },
}
