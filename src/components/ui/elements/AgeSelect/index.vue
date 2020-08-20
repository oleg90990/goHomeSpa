<template>
  <div class="d-flex justify-content-between align-items-center">
    <div class="mr-2">
      От
    </div>
    <b-form-select
      v-model="value.from"
      :options="getFromOtions"
      size="sm"
    />
    <div class="ml-2 mr-2">
      До
    </div>
    <b-form-select
      v-model="value.to"
      :options="getToOtions"
      size="sm"
    />
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />