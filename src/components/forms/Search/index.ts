import { Vue, Component, Watch, Prop } from 'vue-property-decorator'
import CityWidget from '@/components/ui/widgets/CityWidget/index.vue'
import AnimalWidget from '@/components/ui/widgets/AnimalWidget/index.vue'
import BreedsWidget from '@/components/ui/widgets/BreedsWidget/index.vue'
import GenderWidget from '@/components/ui/widgets/GenderWidget/index.vue'
import SterilizationWidget from '@/components/ui/widgets/SterilizationWidget/index.vue'
import AgeWidget from '@/components/ui/widgets/AgeWidget/index.vue'
import ColorWidget from '@/components/ui/widgets/ColorWidget/index.vue'
import { IStateSearchBody} from 'friendshome-api'

@Component({
  components: {
     CityWidget,
     AnimalWidget,
     BreedsWidget,
     GenderWidget,
     SterilizationWidget,
     AgeWidget,
     ColorWidget,
  },
})
export default class Search extends Vue {
  @Prop(Object) private data!: IStateSearchBody

  @Watch('data.animal')
  private onChangeAnimal() {
    this.data.breeds = []
  }
}
