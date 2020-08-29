import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class';
import AuthModal from '@/components/modals/Auth/index.vue'

const user = namespace('user')

@Component({
  components: {
    AuthModal,
  },
})
export default class Navbar extends Vue {
  @user.Action private logOut!: () => void
  @user.Getter private isAuth!: boolean

  get modal() {
    return this.$refs['auth-modal'] as Vue & {
      show: () => void;
      hide: () => void;
    }
  }

  private authShow() {
    this.modal.show();
  }

  private toLogOut() {
    this.logOut()
    this.toHome()
  }

  private toHome() {
    this.$router.push({
      name: 'Home',
    }).catch(() => true)
  }

  private toProfile() {
    this.$router.push({
      name: 'Profile',
    }).catch(() => true)
  }

  private toCreatePost() {
    this.$router.push({
      name: 'CreatePost',
    }).catch(() => true)
  }
}
