<template>
  <div class="d-flex">
    <div class="w-50">
      {{ label }}
    </div>
    <div class="w-50">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />