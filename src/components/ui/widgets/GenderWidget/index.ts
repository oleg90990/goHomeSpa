import { Vue, Component, Prop, Watch, Emit } from 'vue-property-decorator'
import GenderSelect from '@/components/ui/elements/GenderSelect/index.vue'
import { Gender } from 'friendshome-api'

@Component({
  components: {
    GenderSelect,
  },
})
export default class GenderWidget extends Vue {
  @Prop(String) private value!: Gender
  @Prop(Number) private animalId!: number

  private input?: Gender = this.value

  @Watch('input')
  @Emit('input')
  private onChangeInput() {
    return this.input
  }

  @Watch('value')
  private onChangeValue(value: Gender) {
    this.input = value
  }
}
