import { Vue, Component, Prop } from 'vue-property-decorator'
import {  IItem } from 'friendshome-api'

@Component
export default class Post extends Vue {
   @Prop(Object) private item!: IItem
}
