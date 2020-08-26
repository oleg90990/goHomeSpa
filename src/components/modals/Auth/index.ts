import { Vue, Component } from 'vue-property-decorator'
import LoginForm from '@/components/forms/Login/index.vue'
import RegisterForm from '@/components/forms/Register/index.vue'

@Component({
  components: {
    LoginForm,
    RegisterForm,
  },
})
export default class AgeWidget extends Vue {
  private title: string = 'Авторизация'

  get modal() {
    return this.$refs.modal as Vue & {
      show: () => void;
      hide: () => void;
    }
  }

  private hidden() {
    this.modal.hide()
  }

  private show() {
    this.modal.show()
  }

  private onSuccess() {
    this.hidden()
    this.$router.push({
      name: 'Home',
    }).catch(() => true)
  }
}
