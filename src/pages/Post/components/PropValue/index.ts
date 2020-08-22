import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

@Component
export default class PropValue extends Vue {
  @Prop(String) private label!: string
}
