import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator'
import { AgeState } from 'friendshome-api'

@Component
export default class AgeSelect extends Vue {
  @Prop(Object) private value!: AgeState
  @Prop(Number) private animalId!: number

  private get getFromOtions(): number[] {
    const options = []

    for (let i = 0; i < this.value.to; ++i) {
      options.push(i)
    }

    return options
  }

  private get getToOtions(): number[] {
    const options = []

    for (let i = this.value.from; i <= 20; ++i) {
      options.push(i)
    }

    return options
  }

  @Watch('value.from')
  @Watch('value.to')
  @Emit()
  private input(): AgeState {
    return this.value;
  }
}
