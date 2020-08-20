import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import { YesNo, Gender } from 'friendshome-api'
import { getLabelYesNo } from '@/helpers/Labels'

@Component
export default class SterilizationSelect extends Vue {
  @Prop(String) private value!: YesNo
  @Prop(String) private gender!: Gender

  private variants = YesNo;

  private getVariantBtn(value: YesNo): string {
    if (value === this.value) {
      return 'primary'
    }

    return 'outline-primary'
  }

  private getLabel(value: YesNo): string {
    return getLabelYesNo(value)
  }

  @Emit('input')
  private selected(value: YesNo) {
    return value;
  }
}
