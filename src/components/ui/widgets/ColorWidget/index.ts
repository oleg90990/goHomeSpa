import { Vue, Component, Prop, Watch, Emit } from 'vue-property-decorator'
import ColorSelect from '@/components/ui/elements/ColorSelect/index.vue'

@Component({
  components: {
    ColorSelect,
  },
})
export default class ColorWidget extends Vue {
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
