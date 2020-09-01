import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import { BIconPlus } from 'bootstrap-vue'

@Component({
  components: {
    BIconPlus,
  },
})
export default class ImageSelect extends Vue {
  @Prop(Array) private value!: string[]

  private images: string[] = this.value

  private openFileDiealog() {
    (this.$refs.file as Vue & {
      click: () => void;
    }).click()
  }

  private previewFiles(event: any) {
    return event
    // console.log(event.target.files)
  }

  @Emit()
  private input() {
    return this.images
  }
}
