<template>
  <div>
    <div v-if="loading">
      loading
    </div>
    <slot v-if="!loading"> 
    </slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Loader extends Vue {
  @Prop(Boolean) private loading?: boolean;
}
</script>
