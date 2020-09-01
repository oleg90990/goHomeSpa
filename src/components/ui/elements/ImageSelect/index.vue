<template>
  <div class="d-flex">
    <div v-for="(src, key) in images" :key="key">
      <img :src="src">
    </div>

    <div class="border border-primary rounded image pointer d-flex align-items-center justify-content-center text-primary font-weight-bold" @click="openFileDiealog()">
      <BIconPlus />
    </div>

    <input type="file" ref="file" @change="previewFiles" class="d-none">
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />