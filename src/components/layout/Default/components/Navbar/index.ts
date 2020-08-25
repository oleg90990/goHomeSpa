import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class';

const user = namespace('user')

@Component
export default class Navbar extends Vue {
  @user.Action private logOut!: () => void
  @user.Getter private isAuth!: boolean

  private toLogOut() {
    this.logOut()
    this.toHome()
  }

  private toHome() {
    this.$router.push({
      name: 'Home',
    })
  }

  private toProfile() {
    this.$router.push({
      name: 'Profile',
    })
  }

  private toLogin() {
    this.$router.push({
      name: 'Login',
    })
  }

  private toCreatePost() {
    this.$router.push({
      name: 'CreatePost',
    })
  }
}
