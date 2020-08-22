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
  @Prop(Number) private animalId!: number

  private query: string = ''
  private options: ICityItem[] = []


  @Watch('query')
  private onChangeQuery = _.debounce(this.loadCities, 300)

  @Emit()
  private input($event: ICityItem) {
    return $event
  }

  private loadCities() {
    Api.findCity(this.query, true)
      .then(({ data }) => {
        this.options = data
      })
  }

  private created() {
    if (this.value) {
      this.query = this.value.name
    }
  }

  // private get options(): string[] {
  //   return ['Canada', 'USA', 'Mexico']
  // }
}
