import { Vue, Component, Prop } from 'vue-property-decorator'
import { ICityItem } from 'friendshome-api'

@Component({
  components: {
  },
})
export default class CitySelect extends Vue {
  @Prop(String) private value!: ICityItem
  @Prop(Number) private animalId!: number
}
