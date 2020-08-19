import { Vue, Component, Prop, Watch, Emit } from 'vue-property-decorator'
import BreedsSelect from '@/components/ui/elements/BreedsSelect/index.vue'

@Component({
  components: {
    BreedsSelect,
  },
})
export default class BreedsSelectWidget extends Vue {
  @Prop(Array) private value!: number[]
  @Prop(Number) private animalId!: number

  private input?: number[] = this.value

  @Watch('input')
  @Emit('input')
  private onChangeInput() {
    return this.input
  }

  @Watch('value')
  private onChangeValue(value: number[]) {
    this.input = value
  }
}
