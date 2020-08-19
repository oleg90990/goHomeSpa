import { GetterTree } from 'vuex'
import { RootState } from '@/store/types'
import { IStateDictionaries } from 'friendshome-api'

export const getters: GetterTree<IStateDictionaries, RootState> = {
  all(state): IStateDictionaries {
    return state
  },
}
