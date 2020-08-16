<template>
  <div id="app">
    <container>
      <router-view/>
    </container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Container from '@/components/Container/index.vue';

@Component({
  components: {
    Container
  },
})
export default class App extends Vue {

}
</script>