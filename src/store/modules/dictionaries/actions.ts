import { ActionTree } from 'vuex'
import { RootState } from '@/store/types'
import { SET_DICTIONARIES } from './mutationTypes'
import { dictionariesApi as Api } from '@/api'
import { IStateDictionaries } from 'friendshome-api'

export const actions: ActionTree<IStateDictionaries, RootState> = {
  async getDictionaries({ commit }, callback: () => any) {
    Api.loadDictionaries()
      .then(({ data }) => {
        commit(SET_DICTIONARIES, data)
        callback()
      })
  },
}
