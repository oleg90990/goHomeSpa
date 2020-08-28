<template>
  <b-card class="border-primary" sub-title="Пол">
    <gender-select v-model="input" :animal-id="animalId" class="mt-3" />
  </b-card>
</template>

<script lang="ts" src="./index.ts" />