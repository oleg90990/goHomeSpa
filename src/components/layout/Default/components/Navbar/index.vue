<template>
  <b-navbar class="border-bottom bg-white" toggleable="lg">
    <b-navbar-brand :to="{ name: 'Home' }">
      <div class="d-flex align-items-center">
        <img src="@/assets/logo.png" height="50" alt="ДрузьяДома">
        <div class="text-white ml-2 text-decoration-none text-primary">
          #друзьядома
        </div>
      </div>
    </b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-item v-if="isAuth">
        <b-button @click="toProfile" variant="primary">
          Профиль
        </b-button>
      </b-nav-item>
      <b-nav-item v-if="isAuth">
        <b-button @click="toLogOut" variant="primary">
          Выход
        </b-button>
      </b-nav-item>
      <b-nav-item v-if="!isAuth">
        <b-button @click="authShow" variant="primary">
          Вход
        </b-button>
      </b-nav-item>
    </b-navbar-nav>
    <auth-modal ref="auth-modal" />
  </b-navbar>
</template>

<script lang="ts" src="./index.ts" />