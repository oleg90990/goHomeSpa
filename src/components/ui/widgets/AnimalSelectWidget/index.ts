import { Vue, Component, Prop, Watch, Emit } from 'vue-property-decorator'
import AnimalSelect from '@/components/ui/elements/AnimalSelect/index.vue'

@Component({
  components: {
    AnimalSelect,
  },
})
export default class AnimalSelectWidget extends Vue {
  @Prop(Number) private value?: number;

  private input?: number = this.value;

  @Watch('input')
  @Emit('input')
  private onChangeInput() {
    return this.input
  }

  @Watch('value')
  private onChangeValue(value: number) {
    this.input = value
  }
}
