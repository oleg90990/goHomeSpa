<template>
  <b-form-input
    disabled
    v-model="input"
    @blur="onBlur"
    type="text"
    :required="required"
    placeholder="+7 (xxx) xxx-xx-xx"
  ></b-form-input>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />