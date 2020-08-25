import { Vue, Component } from 'vue-property-decorator'
import { LoginPayload } from '@/store/modules/user/types'
import Loader from '@/components/Loader.vue'
import { namespace } from 'vuex-class';

const user = namespace('user')

@Component({
  components: {
     Loader,
  },
})
export default class Login extends Vue {
  @user.Action private login!: (data: LoginPayload) => Promise<any>

  private data: LoginPayload = {
    mobile: '',
    password: '',
  }

  private loading: boolean = false

  private onSubmit(evt: any) {
    evt.preventDefault()
    this.showLoading()
    this.login(this.data)
      .then(() => {
        this.hideLoading()
        this.$emit('success')
      })
      .catch(() => {
        this.hideLoading()
        this.$emit('failure')
      })
      .finally(() => {
        this.hideLoading()
      })
  }

  private showLoading() {
    this.loading = true
  }

  private hideLoading() {
    this.loading = false
  }
}
