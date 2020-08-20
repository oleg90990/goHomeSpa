import { Vue, Component, Prop, Watch, Emit } from 'vue-property-decorator'
import SterilizationSelect from '@/components/ui/elements/SterilizationSelect/index.vue'
import { YesNo, Gender } from 'friendshome-api'

@Component({
  components: {
    SterilizationSelect,
  },
})
export default class SterilizationWidget extends Vue {
  @Prop(String) private value!: YesNo
  @Prop(String) private gender!: Gender

  private input?: YesNo = this.value

  @Watch('input')
  @Emit('input')
  private onChangeInput() {
    return this.input
  }

  @Watch('value')
  private onChangeValue(value: YesNo) {
    this.input = value
  }
}
