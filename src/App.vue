<template>
  <div id="app">
    <loader>
      <container>
        <router-view/>
      </container>
    </loader>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Container from '@/components/layout/Default/index.vue';
import Loader from '@/components/Loader.vue';

@Component({
  components: {
    Container,
    Loader,
  },
})
export default class App extends Vue {
  // private selectedPolicy: any = false;

  private created() {
    // console.log(this.loading)
  }
}
</script>