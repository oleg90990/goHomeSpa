import { Vue, Component, Watch } from 'vue-property-decorator'
import Loader from '@/components/Loader.vue'
import CitySelect from '@/components/ui/elements/CitySelect/index.vue'
import PhoneInput from '@/components/ui/elements/PhoneInput/index.vue'
import { namespace } from 'vuex-class';
import { ICityItem, IUserUpdateData, IUser } from 'friendshome-api'
import Notify from '@/utils/notify'
import { BvEvent } from 'bootstrap-vue'

const user = namespace('user')

@Component({
  components: {
    Loader,
    CitySelect,
    PhoneInput,
  },
})
export default class Profile extends Vue {
  @user.Getter private user!: IUser
  @user.Action private update!: (data: IUserUpdateData) => Promise<void>

  private city: ICityItem | null = null

  private data: IUserUpdateData = {
    email: '',
    name: '',
    city_id: 1,
  }

  private loading = false

  private created() {
    if (this.user.city) {
      this.city = this.user.city
    }

    this.data = {
      email: this.user.email,
      name: this.user.name,
      city_id: 0,
    }
  }

  @Watch('city')
  private onChangeCity(city: ICityItem) {
    this.data.city_id = city.id
  }

  private onSubmit(evt: BvEvent) {
    evt.preventDefault()

    if (this.data.password === "") {
      this.$delete(this.data, 'password');
    }

    if (this.data.c_password === "") {
      this.$delete(this.data, 'c_password');
    }

    this.showLoading()
    this.update(this.data)
      .then(() => {
        Notify.success('Успешно обновлено', '')
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
