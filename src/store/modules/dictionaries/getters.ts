import { GetterTree } from 'vuex'
import { RootState } from '@/store/types'
import { IStateDictionaries, IDictionaryAnimalType, IDictionaryItem } from 'friendshome-api'

export const getters: GetterTree<IStateDictionaries, RootState> = {
  animals(state): IDictionaryAnimalType[] {
    return state.animals
  },
  getBredbyId: state => (bredId: number): IDictionaryItem | undefined => {
    for (const animal of state.animals) {
      const bred = animal.breeds.find(({ id }) => id === bredId)

      if (bred) {
        return bred;
      }
    }
  },
}