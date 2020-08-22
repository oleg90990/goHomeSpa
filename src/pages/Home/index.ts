import { Vue, Component, Watch } from 'vue-property-decorator'
import SearchForm from '@/components/forms/Search/index.vue'
import { IStateSearchBody, Gender, YesNo, Sortby, IItem } from 'friendshome-api'
import { adsApi as AdsApi } from '@/api'
import CardPost from '@/components/cards/Post/index.vue'
import Loader from '@/components/Loader.vue'
import _ from 'lodash';

@Component({
  components: {
    SearchForm,
    CardPost,
    Loader,
  },
})
export default class Home extends Vue {
  private items: IItem[] = [];

  private loading: boolean = true

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

  @Watch('data', { immediate: true, deep: true })
  private onChangeData = _.debounce(this.getAds, 500)

  private getAds() {
    this.showLoading()
    AdsApi.find(this.data, Sortby.date, 0)
      .then(({ data }) => {
        this.items = data.items
        this.hideLoading();
      })
  }

  private showLoading() {
    this.loading = true
  }

  private hideLoading() {
    this.loading = false
  }
}
