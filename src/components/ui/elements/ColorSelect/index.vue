<template>
  <div class="d-flex flex-wrap">
    <div
      v-for="(color, key) in colors"
      :key="key"
      @click="input(color.id)"
      :class="['color', 'mr-2', 'mb-2', isSelected(color.id) ? 'selected' : null]"
      :style="{ backgroundColor: color.value}"
    />
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />