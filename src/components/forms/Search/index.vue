<template>
  <div>
    <animal-select-widget class="mb-3" v-model="data.animal" />
    <breeds-select-widget class="mb-3" v-model="data.breeds" :animal-id="data.animal" v-if="data.animal" />
  </div>
</template>

<script lang="ts" src="./index.ts" />