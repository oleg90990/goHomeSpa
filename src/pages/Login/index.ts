import { Vue, Component } from 'vue-property-decorator'
import LoginForm from '@/components/forms/Login/index.vue'


@Component({
  components: {
     LoginForm,
  },
})
export default class Login extends Vue {
  private onLoginSuccess() {
    this.$router.push({
      name: 'Home',
    })
  }
}
