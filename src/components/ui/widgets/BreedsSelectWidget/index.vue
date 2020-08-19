<template>
  <b-card sub-title="Порода">
    <breeds-select v-model="input" :animal-id="animalId" class="mt-3" />
  </b-card>
</template>

<script lang="ts" src="./index.ts" />