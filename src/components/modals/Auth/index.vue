<template>
  <b-modal ref="modal" hide-footer hide-header :title="title" centered>
    <b-tabs content-class="mt-3">
      <b-tab title="Вход" active>
        <login-form @success="onSuccess" />
      </b-tab>
      <b-tab title="Регистрация">
        <register-form @success="onSuccess" />
      </b-tab>
    </b-tabs>
  </b-modal>
</template>

<script lang="ts" src="./index.ts" />