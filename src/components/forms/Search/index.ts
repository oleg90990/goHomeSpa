import { Vue, Component } from 'vue-property-decorator'
import AnimalSelectWidget from '@/components/ui/widgets/AnimalSelectWidget/index.vue'


@Component({
  components: {
     AnimalSelectWidget
  },
})
export default class Search extends Vue {
}