import { Vue, Component } from 'vue-property-decorator';
import Navbar from './components/Navbar/index.vue'

@Component({
  components: {
    Navbar
  },
})
export default class Default extends Vue {
}