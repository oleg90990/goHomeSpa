<template>
  <div class="d-flex justify-content-between">
    <b-button
      :variant="getVariant(genders.none)"
      @click="selected(genders.none)"
      size="sm"
      class="w-100 p-0"
    >
      {{ getGenderLabel(genders.none) }}
    </b-button>
    <b-button
      :variant="getVariant(genders.male)"
      @click="selected(genders.male)"
      size="sm"
      class="w-100 ml-1 mr-1"
    >
      {{ getGenderLabel(genders.male) }}
    </b-button>
    <b-button
      :variant="getVariant(genders.female)"
      @click="selected(genders.female)"
      size="sm"
      class="w-100"
    >
      {{ getGenderLabel(genders.female) }}
    </b-button>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />