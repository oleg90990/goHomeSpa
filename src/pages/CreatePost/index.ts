import { Vue, Component } from 'vue-property-decorator'
import CreatePostForm from '@/components/forms/CreatePost/index.vue'

@Component({
  components: {
    CreatePostForm,
  },
})
export default class CreatePost extends Vue {
}
