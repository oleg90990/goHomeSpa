import { ActionTree } from 'vuex'
import { RootState } from '@/store/types'
import { SET_USER, SET_TOKEN, UNSET_USER, UNSET_TOKEN } from './mutationTypes'
import { userApi as API } from '@/api'
import { IStateUserResponse, IUserUpdateData } from 'friendshome-api'
import { LoginPayload, RegisterPayload } from './types'
import { getToken } from '@/utils/auth'

export const actions: ActionTree<IStateUserResponse, RootState> = {
  async login({ commit }, { mobile, password }: LoginPayload): Promise<any> {
    return new Promise((resolve, reject) => {
      API.login(mobile, password)
        .then(({ data: { user, access_token }}) => {
          commit(SET_USER, user)
          commit(SET_TOKEN, access_token)
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
        .then(({ data: { user, access_token }}) => {
          commit(SET_USER, user)
          commit(SET_TOKEN, access_token)
          resolve()
        })
        .catch(() => {
          reject()
        })
    })
  },

  async update({ commit }, payload: IUserUpdateData): Promise<any> {
    return new Promise((resolve, reject) => {
      API.update(payload)
        .then(({ data }) => {
          commit(SET_USER, data)
          resolve()
        })
        .catch(() => {
          reject()
        })
    })
  },

  async restore({ commit }): Promise<any> {
    return new Promise((resolve, reject) => {
      API.me()
        .then(({ data }) => {
          commit(SET_USER, data)
          commit(SET_TOKEN, getToken())
          resolve()
        })
        .finally(() => {
          reject()
        })
    })
  },

  async logOut({ commit }) {
    commit(UNSET_USER)
    commit(UNSET_TOKEN)
  },
}
