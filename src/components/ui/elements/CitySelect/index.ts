import { Vue, Component, Prop, Watch, Emit } from 'vue-property-decorator'
import { ICityItem } from 'friendshome-api'
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
import { dictionariesApi as Api } from '@/api'
import _ from 'lodash';

@Component({
  components: {
    VueBootstrapTypeahead,
  },
})
export default class CitySelect extends Vue {
  @Prop(Object) private value!: ICityItem
  @Prop({ default: false }) private cities!: boolean
  @Prop(Boolean) private required!: boolean

  private query: string = ''
  private options: ICityItem[] = []

  get typeahead() {
    return this.$refs.typeahead as Vue & {
      inputValue: string;
    }
  }

  @Watch('query')
  private onChangeQuery = _.debounce(this.loadCities, 300)

  @Emit()
  private input($event: ICityItem) {
    return $event
  }

  private loadCities() {
    Api.findCity(this.query, !this.cities)
      .then(({ data }) => {
        this.options = data
      })
  }

  private mounted() {
    if (this.value) {
      this.typeahead.inputValue = this.value.name
    }
  }
}
