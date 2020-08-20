import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import { Gender, IDictionaryAnimalType } from 'friendshome-api'
import { namespace } from 'vuex-class';

const dictionaries = namespace('dictionaries')

@Component
export default class GenderSelect extends Vue {
  @Prop(String) private value!: Gender
  @Prop(Number) private animalId!: number

  @dictionaries.Getter private getAnimalById!: (animalId: number) => IDictionaryAnimalType | undefined

  private variants = Gender;

  private getLabel(gender: Gender): string {
    const animal = this.getAnimalById(this.animalId)

    if (animal) {
      return animal[gender]
    }

    return 'Ошибка'
  }

  private getVariantBtn(value: Gender): string {
    return value === this.value ? 'primary' : 'outline-primary'
  }

  @Emit('input')
  private selected(value: Gender) {
    return value;
  }
}
