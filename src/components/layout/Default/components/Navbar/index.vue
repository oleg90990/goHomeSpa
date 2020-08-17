<template>
  <b-navbar toggleable="lg" variant="primary">
    <b-navbar-brand href="#">
      <img src="@/assets/logo.png" height="50" alt="ДрузьяДома">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">
          Логин
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts" src="./index.ts" />