import { Vue, Component } from 'vue-property-decorator'
import ProfileForm from '@/components/forms/Profile/index.vue'
import { IItem } from 'friendshome-api'
import { adsApi } from '@/api'

@Component({
  components: {
    ProfileForm,
  },
})
export default class Profile extends Vue {
  private posts: IItem[] = []
  private loadingPosts: boolean = false

  private created() {
    this.loadPosts();
  }

  private loadPosts() {
    this.showLoadingPosts()
    adsApi.me()
      .then(({ data }) => {
        this.setPosts(data)
      })
      .finally(() => {
        this.hideLoadingPosts()
      })
  }

  private setPosts(posts: IItem[]) {
    this.posts = posts
  }

  private showLoadingPosts() {
    this.loadingPosts = true
  }

  private hideLoadingPosts() {
    this.loadingPosts = false
  }
}
