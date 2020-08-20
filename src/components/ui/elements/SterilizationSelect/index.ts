import { Vue, Component, Prop } from 'vue-property-decorator'
import { YesNo, Gender } from 'friendshome-api'

@Component({
  components: {
  },
})
export default class SterilizationSelect extends Vue {
  @Prop(String) private value!: YesNo
  @Prop(String) private gender!: Gender
}
