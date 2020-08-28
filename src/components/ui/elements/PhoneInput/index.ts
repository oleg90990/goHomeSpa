import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator'
import { formatNumber } from "libphonenumber-js";

@Component
export default class PhoneInput extends Vue {
  @Prop({ default: '' }) private value!: string
  @Prop({ default: false }) private required!: boolean

  private input = this.toFormat(this.value);

  private toFormat(input: string) {
    return formatNumber(`+7${input.replace(/^\+7/, "")}`, "International")
  }

  private onBlur() {
    this.input = this.toFormat(this.input)
  }

  @Watch('input')
  @Emit('input')
  private onChangeInput() {
    return this.input.replace(/\+/g, '').replace(/ /g, '')
  }

  @Watch('value')
  private onChangeValue() {
    this.input = this.toFormat(this.value)
  }
}
