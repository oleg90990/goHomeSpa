<template>
  <b-row class="page-border">
    <b-col lg="12" class="mt-2 mt-md-0">
      <loader :loading="loading">
        <edit-post-form :item="data" />
      </loader>
    </b-col>
  </b-row>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />