import { Vue, Component } from 'vue-property-decorator'
import RegisterForm from '@/components/forms/Register/index.vue'

@Component({
  components: {
     RegisterForm,
  },
})
export default class Register extends Vue {
  private onRegisterSuccess() {
    this.$router.push({
      name: 'Home',
    })
  }
}
