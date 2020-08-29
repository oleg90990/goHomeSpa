import { Vue, Component } from 'vue-property-decorator'
import ProfileForm from '@/components/forms/Profile/index.vue'

@Component({
  components: {
     ProfileForm,
  },
})
export default class Profile extends Vue {
}
