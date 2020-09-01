<template>
  <div>
    <vue-bootstrap-typeahead
      :required="required"
      ref="typeahead"
      v-model="query"
      :data="options"
      :serializer="s => s.name"
      @hit="input"
    />
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />