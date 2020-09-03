import { Vue, Component, Watch} from 'vue-property-decorator'
import { RegisterPayload } from '@/store/modules/user/types'
import Loader from '@/components/Loader.vue'
import CitySelect from '@/components/ui/elements/CitySelect/index.vue'
import { namespace } from 'vuex-class';
import { ICityItem } from 'friendshome-api'
import PhoneInput from '@/components/ui/elements/PhoneInput/index.vue'
import { BvEvent } from 'bootstrap-vue'

const user = namespace('user')

@Component({
  components: {
     Loader,
     CitySelect,
     PhoneInput,
  },
})
export default class Register extends Vue {
  @user.Action private register!: (data: RegisterPayload) => Promise<any>

  private city?: ICityItem | null = null

  private data: RegisterPayload = {
    mobile: '',
    name: '',
    password: '',
    c_password: '',
    city_id: 0,
  }

  private loading: boolean = false

  private onSubmit(evt: BvEvent) {
    evt.preventDefault()
    this.showLoading()
    this.register(this.data)
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

  @Watch('city')
  private onChangeCity(city: ICityItem) {
    this.data.city_id = city.id;
  }

  private showLoading() {
    this.loading = true
  }

  private hideLoading() {
    this.loading = false
  }
}
