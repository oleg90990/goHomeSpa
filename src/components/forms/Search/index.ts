import { Vue, Component, Watch } from 'vue-property-decorator'
import CityWidget from '@/components/ui/widgets/CityWidget/index.vue'
import AnimalWidget from '@/components/ui/widgets/AnimalWidget/index.vue'
import BreedsWidget from '@/components/ui/widgets/BreedsWidget/index.vue'
import GenderWidget from '@/components/ui/widgets/GenderWidget/index.vue'
import SterilizationWidget from '@/components/ui/widgets/SterilizationWidget/index.vue'
import AgeWidget from '@/components/ui/widgets/AgeWidget/index.vue'
import ColorWidget from '@/components/ui/widgets/ColorWidget/index.vue'
import { IStateSearchBody, Gender, YesNo } from 'friendshome-api'

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
  private data: IStateSearchBody = {
    animal: 0,
    ages: {
      from: 0,
      to: 5,
    },
    colors: [],
    breeds: [],
    gender: Gender.none,
    sterilization: YesNo.none,
    city: undefined,
  }

  @Watch('data.animal')
  private onChangeAnimal() {
    this.data.breeds = []
  }
}
