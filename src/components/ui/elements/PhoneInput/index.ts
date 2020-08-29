import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import { formatNumber } from "libphonenumber-js";

@Component
export default class PhoneInput extends Vue {
  @Prop({ default: '' }) private value!: string
  @Prop({ default: false }) private required!: boolean
  @Prop({ default: false }) private disabled!: boolean

  private input = this.value;

  private toFormat() {
    this.input = formatNumber(`+7${this.input.replace(/^\+7/, "")}`, "International")
  }

  private onBlur() {
    this.toFormat()
    this.onChangeInput()
  }

  @Emit('input')
  private onChangeInput() {
    const phoneNumber = this.input;
    const tempPhone = phoneNumber.replace(/\+/g, '');
    const removeSpaces = tempPhone.replace(/ /g, '');
    return removeSpaces
  }
}
