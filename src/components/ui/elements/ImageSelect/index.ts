import { Vue, Component, Prop, Emit, Watch} from 'vue-property-decorator'
import { BIconPlus } from 'bootstrap-vue'
import scaleImg from '@/utils/scaleImg'

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

  private previewFiles(event: Event) {
    const element = event.target as HTMLInputElement
    if (element.files) {
      for (const file of element.files) {
        this.toBase64(file)
          .then(result => {
            this.images.push(result)
          })
      }
    }
  }

  private toBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          scaleImg(reader.result)
            .then(resolve)
            .catch(reject)
        }
      }
      reader.onerror = error => reject(error)
    })
  }

  private removeItem(index: string) {
    this.$delete(this.images, index)
  }

  @Watch('images')
  @Emit()
  private input() {
    return this.images
  }
}
