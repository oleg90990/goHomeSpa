<template>
  <div id="app">
    <router-view v-if="!loading" />
    <notifications group="notify" position="top right"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import smartbanner from '@/utils/smartbanner'

const dictionaries = namespace('dictionaries')

@Component
export default class App extends Vue {
  private loading: boolean = true;

  @dictionaries.Action private loadDictionaries!: (callback: () => any) => any;

  private created() {
    smartbanner()
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