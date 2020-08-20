import { Vue, Component, Prop } from 'vue-property-decorator'
import { Gender } from 'friendshome-api'

@Component({
  components: {
  },
})
export default class GenderSelect extends Vue {
  @Prop(String) private value!: Gender
  @Prop(Number) private animalId!: number
}
