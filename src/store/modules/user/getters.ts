import { GetterTree } from 'vuex'
import { RootState } from '@/store/types'
import { IStateUserResponse, IUser } from 'friendshome-api'

export const getters: GetterTree<IStateUserResponse, RootState> = {
  isAuth(state): boolean {
    return state.user.id !== 0
  },
  user(state): IUser {
    return state.user
  },
}
