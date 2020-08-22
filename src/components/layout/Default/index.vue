<template>
  <div>
    <navbar />
    <b-container class="mt-4 mb-4">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </b-container> 
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
