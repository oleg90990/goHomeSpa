import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {
  },
})
export default class ColorSelect extends Vue {
  @Prop(Array) private value!: number[]
  @Prop(Number) private animalId!: number
}
