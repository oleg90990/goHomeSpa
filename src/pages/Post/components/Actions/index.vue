<template>
  <div>
    <b-button
      v-for="(action, key) in actions"
      :key="key"
      size="sm"
      variant="warning"
      class="ml-2"
      @click="action.click"
      >
      {{ action.title }}
    </b-button>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />