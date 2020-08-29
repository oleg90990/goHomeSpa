import { Vue, Component, Watch} from 'vue-property-decorator'
import Loader from '@/components/Loader.vue'
import CitySelect from '@/components/ui/elements/CitySelect/index.vue'
import PhoneInput from '@/components/ui/elements/PhoneInput/index.vue'
import { namespace } from 'vuex-class';
import { ICityItem } from 'friendshome-api'

const user = namespace('user')

@Component({
  components: {
    Loader,
    CitySelect,
    PhoneInput,
  },
})
export default class Profile extends Vue {
  private data = {}
  private loading = false

  private onSubmit() {
    return true
  }
}
