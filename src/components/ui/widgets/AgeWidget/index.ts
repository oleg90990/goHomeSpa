import { Vue, Component, Prop, Watch, Emit } from 'vue-property-decorator'
import AgeSelect from '@/components/ui/elements/AgeSelect/index.vue'
import { AgeState } from 'friendshome-api'

@Component({
  components: {
    AgeSelect,
  },
})
export default class AgeWidget extends Vue {
  @Prop(Object) private value!: AgeState
  @Prop(Number) private animalId!: number

  private input?: AgeState = this.value

  @Watch('input')
  @Emit('input')
  private onChangeInput() {
    return this.input
  }

  @Watch('value')
  private onChangeValue(value: AgeState) {
    this.input = value
  }
}
