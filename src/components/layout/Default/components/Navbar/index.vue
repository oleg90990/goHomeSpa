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

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        

        <b-nav-item href="#" class="mr-3" :to="{ name: 'Login' }" v-if="!isAuth">
          Вход
        </b-nav-item>
        <b-nav-item href="#" class="mr-3" v-if="isAuth" @click="onLogOut">
          Выход
        </b-nav-item>
        <b-navbar-nav>
          <b-button variant="light" :to="{ name: 'CreatePost' }">
            Создать объявление
          </b-button>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts" src="./index.ts" />