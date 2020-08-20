import { Vue, Component, Prop } from 'vue-property-decorator'
import { AgeState } from 'friendshome-api'

@Component({
  components: {
  },
})
export default class AgeSelect extends Vue {
  @Prop(Object) private value!: AgeState
  @Prop(Number) private animalId!: number
}
