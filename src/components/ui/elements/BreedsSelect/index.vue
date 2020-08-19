<template>
  <div>
    <div class="mb-3" v-if="isEmty">
      - Выбрано все -
    </div>
    <div class="mb-3 border-top" v-if="!isEmty">
      <div v-for="(breedId, key) in value" :key="key" class="d-flex justify-content-between pb-2 pt-2 border-bottom">
        <div class="">
          {{ getName(breedId) }}
        </div>
        <div @click="removeItem(breedId)" class="pointer">
          <b-icon-trash-fill></b-icon-trash-fill>
        </div>
      </div>
    </div>

    <modal-select-bred
      @selected="selected"
      :animal-id="animalId"
    />
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />