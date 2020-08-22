<template>
  <div id="app">
    <div v-if="!loading">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const dictionaries = namespace('dictionaries')

@Component
export default class App extends Vue {
  private loading: boolean = true;

  @dictionaries.Action private loadDictionaries!: (callback: () => any) => any;

  private created() {
    this.loadDictionaries(() => {
      this.hideLoadng()
    })
  }

  private showLoadng() {
    this.loading = true
  }

  private hideLoadng() {
    this.loading = false
  }
}
</script>