<template>
  <div class="h-100">
     <transition name="fade" mode="out-in">
        <div key=1 v-if="loading" class="animation">
          <img src="@/assets/logo.png" height="50" alt="Загрузка">
        </div>
        <div key=2 v-else>
          <slot />
        </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Loader extends Vue {
  @Prop(Boolean) private loading?: boolean;
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .3s
}

.fade-enter,
.fade-leave-to {
    opacity: 0
}

.animation {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  img {
    animation: pulse 0.5s linear infinite;
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
}
</style>