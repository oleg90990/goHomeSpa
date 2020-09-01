import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import { namespace } from 'vuex-class';
import { IDictionaryItem, IDictionaryAnimalType } from 'friendshome-api'

const dictionaries = namespace('dictionaries')

@Component
export default class ModalSelectBred extends Vue {
  @Prop(Number) private animalId!: number

  @dictionaries.Getter private getBreedsByAnimal!: (animalId: number) => IDictionaryItem[]

  private filter: string = ''

  get breeds(): IDictionaryItem[] {
    return this.getBreedsByAnimal(this.animalId).filter(({ name }) => {
      return name.toLowerCase().includes(this.filter.toLowerCase());
    });
  }

  private showModal(): any {
    const modal: any = this.$refs.breedsModal;
    modal.show()
  }

  private hideModal(): any {
    const modal: any = this.$refs.breedsModal;
    modal.hide()
  }

  @Emit()
  private selected(breed: IDictionaryItem) {
    this.hideModal()
    return breed.id
  }
}
