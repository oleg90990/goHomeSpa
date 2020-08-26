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
const user = namespace('user')

@Component
export default class App extends Vue {
  private loading: boolean = true;

  @dictionaries.Action private loadDictionaries!: () => Promise<any>
  @user.Action private restore!: () => Promise<any>

  private created() {
    smartbanner();
    Promise.all([
      this.loadDictionaries(),
      this.restore(),
    ]).finally(() => {
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