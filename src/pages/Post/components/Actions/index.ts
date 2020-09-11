import { Vue, Component, Prop } from 'vue-property-decorator'
import { IItem } from 'friendshome-api'

interface Action {
  title: string;
  click: () => void;
}

@Component
export default class Actions extends Vue {
  @Prop(Object) private data!: IItem

  get isActive(): boolean {
    return this.data ? this.data.active : false
  }

  get actions(): Action[] {
    const actions: Action[] = []

    if (this.isActive) {
      actions.push({
        title: 'Редактировать',
        click: () => {
          const id: any = this.data.id
          const item: any = this.data
          this.$router.push({
            name: 'EditPost',
            params: { id, item },
          })
        },
      })

      actions.push({
        title: 'Снять с публикации',
        click: () => {
          this.$emit('publish')
        },
      })
    }

    return actions
  }
}
