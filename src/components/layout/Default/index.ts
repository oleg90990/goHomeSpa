import { Vue, Component } from 'vue-property-decorator'
import NavbarDefault from './components/Navbar/index.vue'
import FooterDefault from './components/Footer/index.vue'

@Component({
  components: {
    NavbarDefault,
    FooterDefault,
  },
})
export default class Default extends Vue {
}
