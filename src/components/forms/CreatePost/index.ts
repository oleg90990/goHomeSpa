import { Vue, Component, Watch } from 'vue-property-decorator'
import Loader from '@/components/Loader.vue'
import { namespace } from 'vuex-class';
import { ICityItem, IPostCreatedBody, Gender, YesNo, IDictionaryAnimalType, IDictionaryItem } from 'friendshome-api'
import { BvEvent } from 'bootstrap-vue'
import { ISelectOption } from '@/store/types'
import { getLabelSterilization } from '@/helpers/Labels'

import ColorSelect from '@/components/ui/elements/ColorSelect/index.vue'
import CitySelect from '@/components/ui/elements/CitySelect/index.vue'
import GenderSelect from '@/components/ui/elements/GenderSelect/index.vue'
import SterilizationSelect from '@/components/ui/elements/SterilizationSelect/index.vue'
import ImageSelect from '@/components/ui/elements/ImageSelect/index.vue'

const dictionaries = namespace('dictionaries')

@Component({
  components: {
    Loader,
    CitySelect,
    GenderSelect,
    SterilizationSelect,
    ColorSelect,
    ImageSelect,
  },
})
export default class CreatePost extends Vue {
  @dictionaries.Getter private animals!: IDictionaryAnimalType[]
  @dictionaries.Getter private getBreedsByAnimal!: (animalId: number) => IDictionaryItem[]

  private city: ICityItem | null = null
  private loading = false;
  private data: IPostCreatedBody = {
    title: '',
    images: [],
    content: '',
    age: 0,
    colors: [],
    animal_id: 1,
    breed_id: 0,
    gender: Gender.none,
    sterilization: YesNo.none,
    city_id: 0,
    socials: [],
  }

  get animalOptions(): ISelectOption[] {
    return this.animals.map(({ id, name }) => {
      return {
        value: id,
        text: name,
      }
    })
  }

  get breedOptions(): ISelectOption[] {
    return this.getBreedsByAnimal(this.data.animal_id)
      .map(({ id, name}) => {
        return {
          value: id,
          text: name,
        }
      })
  }

  get ageOptions(): ISelectOption[] {
    const options: ISelectOption[] = []

    for (let i = 0; i <= 20; ++i) {
      options.push({
        value: i,
        text: i.toString(),
      })
    }

    return options
  }

  private getLabelSterilization = getLabelSterilization

  @Watch('city')
  private onChangeCity(city: ICityItem) {
    this.data.city_id = city.id
  }

  private onSubmit(evt: BvEvent) {
    evt.preventDefault()
    // console.log(this.data)
  }
}
