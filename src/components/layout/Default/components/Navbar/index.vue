<template>
  <b-navbar toggleable="lg" variant="primary">
    <b-navbar-brand :to="{ name: 'Home' }">
      <div class="d-flex align-items-center">
        <img src="@/assets/logo.png" height="50" alt="ДрузьяДома">
        <div class="text-white ml-2 text-decoration-none">
          #ДрузьяДома
        </div>
      </div>
    </b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-item @click="toProfile" class="mr-3" v-if="isAuth">
        Профиль
      </b-nav-item>
      <b-nav-item @click="modalShow" class="mr-3" v-if="!isAuth">
        Вход
      </b-nav-item>
      <b-nav-item @click="toLogOut" class="mr-3" v-if="isAuth">
        Выход
      </b-nav-item>
      <b-navbar-nav class="d-none d-md-block" v-if="false">
        <b-button @click="toCreatePost" variant="light">
          Создать объявление
        </b-button>
      </b-navbar-nav>
    </b-navbar-nav>
    <auth-modal ref="auth-modal" />
  </b-navbar>
</template>

<script lang="ts" src="./index.ts" />