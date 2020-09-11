<template>
  <div class="content d-flex flex-column">
    <navbar-default />
    <b-container class="flex-grow-1 mt-5 mb-5">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </b-container> 
    <footer-default />
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />