<template>
  <b-card :sub-title="getTitle()">
    <sterilization-select v-model="input" :gender="gender" class="mt-3" />
  </b-card>
</template>

<script lang="ts" src="./index.ts" />