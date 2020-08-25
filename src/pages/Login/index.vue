<template>
  <b-row class="h-100">
    <b-col lg="8">
    </b-col>
    <b-col lg="4">
      <login-form @success="onLoginSuccess" />
    </b-col>
  </b-row>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />