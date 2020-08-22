import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import ModalSelectBred from './components/ModalSelectBred/index.vue'
import { IDictionaryItem } from 'friendshome-api'
import { namespace } from 'vuex-class';

const dictionaries = namespace('dictionaries')

@Component({
  components: {
    ModalSelectBred,
  },
})
export default class BreedsSelect extends Vue {
  @Prop({ default: [] }) private value!: number[]
  @Prop(Number) private animalId!: number

  @dictionaries.Getter private getBreedById!: (bredId: number) => IDictionaryItem | undefined

  get isEmty(): boolean {
    return this.value ? this.value.length === 0 : false
  }

  private getName(bredId: number): string {
    const bred = this.getBreedById(bredId)

    if (bred) {
      return bred.name
    }

    return 'Неизвестно'
  }

  @Emit('input')
  private selected(bredId: number): any {
    const isExist = this
      .value
      .includes(bredId)

    if (!isExist) {
      this.value.push(bredId)
    }

    return this.value
  }

  @Emit('input')
  private removeItem(bredId: number): any {
    const index =  this.value.indexOf(bredId)
    this.value.splice(index, 1)
    return this.value
  }
}
