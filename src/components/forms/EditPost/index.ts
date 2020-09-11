import { Vue, Component, Watch, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class';
import { ICityItem, IItem, IDictionaryAnimalType, IDictionaryItem } from 'friendshome-api'
import { BvEvent } from 'bootstrap-vue'
import { ISelectOption } from '@/store/types'
import { getLabelSterilization } from '@/helpers/Labels'
import { adsApi } from '@/api/'
import Notify from '@/utils/notify'

import Loader from '@/components/Loader.vue'
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
export default class EditPost extends Vue {
  @Prop(Object) private item!: IItem

  @dictionaries.Getter private animals!: IDictionaryAnimalType[]
  @dictionaries.Getter private getBreedsByAnimal!: (animalId: number) => IDictionaryItem[]

  private data = this.item
  private city: ICityItem | null = null
  private loading = false;
  private getLabelSterilization = getLabelSterilization

  private created() {
    this.city = this.data.city
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

  @Watch('city')
  private onChangeCity(city: ICityItem) {
    this.data.city_id = city.id
  }

  private onSubmit(evt: BvEvent) {
    this.showLoading()
    adsApi.update(this.data)
      .then(({ data }) => {
        const item: any = data
        const id: string = data.id.toString()

        this.$router.push({
          name: 'Post',
          params: { id, item },
        })

        Notify.success(`Объявление "${data.title}" успешно обновлено`)
      })
      .finally(() => {
        this.hideLoading()
      })

    evt.preventDefault()
  }

  private showLoading() {
    this.loading = true
  }

  private hideLoading() {
    this.loading = false
  }
}
