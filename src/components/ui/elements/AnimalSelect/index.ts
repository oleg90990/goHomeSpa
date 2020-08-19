import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import { namespace } from 'vuex-class';
import { IDictionaryAnimalType } from 'friendshome-api'

const dictionaries = namespace('dictionaries')

@Component
export default class AnimalSelect extends Vue {
  @Prop(Number) private value?: number;

  @dictionaries.Getter private animals!: IDictionaryAnimalType[]

  @Emit()
  private input(animal: IDictionaryAnimalType): number {
    return animal.id
  }

  private classes(animal: IDictionaryAnimalType): Record<string, any> {
    return {
      'mr-3': true,
      'animal': true,
      'selected': (this.value === animal.id),
    }
  }
}