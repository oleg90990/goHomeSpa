import { Vue, Component, Prop } from 'vue-property-decorator'
import { IItem, IDictionaryItem, IDictionaryAnimalType, IDictionaryColorItem, IUser } from 'friendshome-api'
import { adsApi } from '@/api'
import Loader from '@/components/Loader.vue'
import PropValue from './components/PropValue/index.vue'
import Actions from './components/Actions/index.vue'
import { namespace } from 'vuex-class'
import { getLabelAge, getLabelSterilization, getLabelYesNo } from '@/helpers/Labels'
import Notify from '@/utils/notify'

const dictionaries = namespace('dictionaries')
const user = namespace('user')

@Component({
  components: {
    Loader,
    PropValue,
    Actions,
  },
})
export default class Post extends Vue {
  @Prop(Object) private item?: IItem
  @Prop(Number) private id!: number

  @user.Getter private user!: IUser
  @dictionaries.Getter private getBreedById!: (bredId: number) => IDictionaryItem | undefined
  @dictionaries.Getter private getAnimalById!: (animalId: number) => IDictionaryAnimalType | undefined
  @dictionaries.Getter private getColorById!: (colorId: number) => IDictionaryColorItem | undefined

  private data: IItem | null = null
  private loading: boolean = false

  // Helpers functions
  private getLabelAge = getLabelAge
  private getLabelSterilization = getLabelSterilization
  private getLabelYesNo = getLabelYesNo

  get breed(): IDictionaryItem | undefined {
    if (this.data) {
      return this.getBreedById(this.data.breed_id)
    }
  }

  get animal(): IDictionaryAnimalType | undefined {
    if (this.data) {
      return this.getAnimalById(this.data.animal_id)
    }
  }

  get isActive(): boolean {
    return this.data ? this.data.active : false
  }

  private getColorStyle(id: number) {
    const color = this.getColorById(id);

    return {
      backgroundColor: color ? color.value : '#fff',
    }
  }

  private formatPhoneNumber(str: string): string {
    const cleaned = str.replace(/\D/g, '')
    const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/)

    if (match) {
      return '+7 (' + match[2] + ') ' + match[3] + '-' + match[4] + '-' + match[5]
    }

    return str
  }

  private created(): void {
    if (!this.item) {
      this.loadPost()
    } else {
      this.setData(this.item)
    }
  }

  private loadPost() {
    this.showLoading()
    adsApi.loadPost(this.id)
      .then(({ data }) => {
        this.setData(data)
      })
      .finally(() => {
        this.hideLoading()
      })
  }

  private publish() {
    this.showLoading()
    adsApi.publish(this.id, false)
      .then(({ data }) => {
        this.setData(data)
        Notify.success(`Объявление "${data.title}" успешно снято с публикации`)
      })
      .finally(() => {
        this.hideLoading()
      })
  }

  private setData(data: IItem): void {
    this.data = data
  }

  private showLoading(): void {
    this.loading = true
  }

  private hideLoading(): void {
    this.loading = false
  }
}
