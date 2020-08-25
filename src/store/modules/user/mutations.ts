import { setToken, removeToken } from '@/utils/auth'
import { MutationTree } from 'vuex'
import { SET_USER, UNSET_USER } from './mutationTypes'
import { IStateUserResponse } from 'friendshome-api'

export const mutations: MutationTree<IStateUserResponse> = {
  [SET_USER](state, { access_token, user }: IStateUserResponse) {
    setToken(access_token)
    state.access_token = access_token
    state.user = user
  },
  [UNSET_USER](state) {
    removeToken()
    state.access_token = ''
    state.user = {
      id: 0,
      name: '',
      email: '',
      mobile: '',
      vk: false,
      vkGroups: [],
    }
  },
}
