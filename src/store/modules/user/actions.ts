import { ActionTree } from 'vuex'
import { RootState } from '@/store/types'
import { SET_USER, UNSET_USER } from './mutationTypes'
import { userApi as API } from '@/api'
import { IStateUserResponse } from 'friendshome-api'
import { LoginPayload, RegisterPayload } from './types'

export const actions: ActionTree<IStateUserResponse, RootState> = {
  async login({ commit }, { mobile, password }: LoginPayload): Promise<any> {
    return new Promise((resolve, reject) => {
      API.login(mobile, password)
        .then(({ data }) => {
          commit(SET_USER, data)
          resolve()
        })
        .catch(() => {
          reject()
        })
    })
  },

  async register({ commit }, payload: RegisterPayload): Promise<any> {
    return new Promise((resolve, reject) => {
      API.register(payload)
        .then(({ data }) => {
          commit(SET_USER, data)
          resolve()
        })
        .catch(() => {
          reject()
        })
    })
  },

  async logOut({ commit }) {
    commit(UNSET_USER)
  },
}
