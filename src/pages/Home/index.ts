import { Vue, Component } from 'vue-property-decorator'
import SearchForm from '@/components/forms/Search/index.vue'

@Component({
  components: {
      SearchForm
  },
})
export default class Home extends Vue {

}
