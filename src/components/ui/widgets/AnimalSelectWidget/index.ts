import { Vue, Component } from 'vue-property-decorator'
import AnimalSelect from '@/components/ui/elements/AnimalSelect/index.vue'

@Component({
  components: {
      AnimalSelect
  },
})
export default class AnimalSelectWidget extends Vue {
}