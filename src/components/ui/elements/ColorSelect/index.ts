import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import { namespace } from 'vuex-class';
import { IDictionaryColorItem } from 'friendshome-api'
const dictionaries = namespace('dictionaries')

@Component
export default class ColorSelect extends Vue {
  @Prop(Array) private value!: number[]
  @Prop(Number) private animalId!: number

  @dictionaries.Getter('getColors') private colors!: IDictionaryColorItem[]

  private isSelected(colorId: number): boolean {
    return this.value.includes(colorId)
  }

  @Emit()
  private input(colorId: number) {
    const index = this.value.indexOf(colorId);

    if (index > -1) {
        this.value.splice(index, 1);
    } else {
        this.value.push(colorId);
    }

    return this.value
  }
}
