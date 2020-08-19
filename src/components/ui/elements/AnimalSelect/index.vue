<template>
  <div class="d-flex">
    <div v-for="(animal, key) in animals" :key="key" :class="classes(animal)" @click="input(animal)">
      <img :src="animal.img" :alt="animal.name" height="50">
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />