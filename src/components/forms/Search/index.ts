import { Vue, Component, Watch } from 'vue-property-decorator'
import AnimalSelectWidget from '@/components/ui/widgets/AnimalSelectWidget/index.vue'
import BreedsSelectWidget from '@/components/ui/widgets/BreedsSelectWidget/index.vue'
import { IStateSearchBody, Gender, YesNo } from 'friendshome-api'

@Component({
  components: {
     AnimalSelectWidget,
     BreedsSelectWidget,
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
  }

  @Watch('data.animal')
  private onChangeAnimal() {
    this.data.breeds = []
  }
}
