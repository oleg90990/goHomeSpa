<template>
  <div class="d-flex justify-content-between">
    <b-button
      :variant="getVariantBtn(variants.none)"
      @click="selected(variants.none)"
      size="sm"
      class="w-100 p-0"
    >
      {{ getLabel(variants.none) }}
    </b-button>
    <b-button
      :variant="getVariantBtn(variants.male)"
      @click="selected(variants.male)"
      size="sm"
      class="w-100 ml-1 mr-1"
    >
      {{ getLabel(variants.male) }}
    </b-button>
    <b-button
      :variant="getVariantBtn(variants.female)"
      @click="selected(variants.female)"
      size="sm"
      class="w-100"
    >
      {{ getLabel(variants.female) }}
    </b-button>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />