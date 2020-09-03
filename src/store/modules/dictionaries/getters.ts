import { GetterTree } from 'vuex'
import { RootState } from '@/store/types'
import { IStateDictionaries, IDictionaryAnimalType, IDictionaryItem, IDictionaryColorItem } from 'friendshome-api'

export const getters: GetterTree<IStateDictionaries, RootState> = {
  animals(state): IDictionaryAnimalType[] {
    return state.animals
  },
  getBreedsByAnimal: state => (animlaId: number): IDictionaryItem[] => {
    const animal = state.animals.find(({ id }) => id === animlaId)

    if (!animal) {
      return []
    }

    return animal.breeds
  },
  getBreedById: state => (bredId: number): IDictionaryItem | undefined => {
    for (const animal of state.animals) {
      const bred = animal.breeds.find(({ id }) => id === bredId)

      if (bred) {
        return bred;
      }
    }
  },
  getAnimalById: state => (animalId: number): IDictionaryAnimalType | undefined => {
    return state.animals.find(({ id }) => id === animalId)
  },
  getColorById: state => (colorId: number): IDictionaryColorItem | undefined => {
    return state.colors.find(({ id }) => id === colorId)
  },
  getColors: state => {
    return state.colors
  },
}
