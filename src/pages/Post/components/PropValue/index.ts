import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class PropValue extends Vue {
  @Prop(String) private label!: string
}
