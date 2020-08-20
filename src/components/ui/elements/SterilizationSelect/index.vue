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
      :variant="getVariantBtn(variants.no)"
      @click="selected(variants.no)"
      size="sm"
      class="w-100 ml-1 mr-1"
    >
      {{ getLabel(variants.no) }}
    </b-button>
    <b-button
      :variant="getVariantBtn(variants.yes)"
      @click="selected(variants.yes)"
      size="sm"
      class="w-100"
    >
      {{ getLabel(variants.yes) }}
    </b-button>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />