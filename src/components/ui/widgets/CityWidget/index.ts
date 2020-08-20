import { Vue, Component, Prop, Watch, Emit } from 'vue-property-decorator'
import CitySelect from '@/components/ui/elements/CitySelect/index.vue'
import { ICityItem } from 'friendshome-api'

@Component({
  components: {
    CitySelect,
  },
})
export default class CityWidget extends Vue {
  @Prop(Object) private value?: ICityItem
  @Prop(Number) private animalId!: number

  private input: ICityItem | null = this.value ? this.value : null

  @Watch('input')
  @Emit('input')
  private onChangeInput() {
    return this.input
  }

  @Watch('value')
  private onChangeValue(value: ICityItem) {
    this.input = value
  }
}
