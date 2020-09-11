import { Vue, Component, Prop } from 'vue-property-decorator'
import EditPostForm from '@/components/forms/EditPost/index.vue'
import { IItem } from 'friendshome-api'
import { adsApi } from '@/api'
import Loader from '@/components/Loader.vue'

@Component({
  components: {
    EditPostForm,
    Loader,
  },
})
export default class CreatePost extends Vue {
  @Prop(Object) private item!: IItem
  @Prop(Number) private id!: number

  private loading: boolean = false
  private data: IItem | null = null

  private created(): void {
    if (!this.item) {
      this.loadPost()
    } else {
      this.setData(this.item)
    }
  }

  private loadPost() {
    this.showLoading()
    adsApi.loadPost(this.id)
      .then(({ data }) => {
        this.setData(data)
      })
      .finally(() => {
        this.hideLoading()
      })
  }

  private setData(data: IItem): void {
    this.data = data
  }

  private showLoading(): void {
    this.loading = true
  }

  private hideLoading(): void {
    this.loading = false
  }
}
