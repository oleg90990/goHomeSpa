<template>
  <div class="login-form">
    <loader :loading="loading" class="loader">
      <b-form @submit="onSubmit">
        <b-form-group label="Номер телефона">
          <b-form-input
            v-model="data.mobile"
            type="text"
            required
            placeholder="+7 (xxx) xxx-xx-xx"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Пароль">
          <b-form-input
            type="password"
            v-model="data.password"
            required
          ></b-form-input>
        </b-form-group>
        <div class="d-flex align-items-center">
          <div class="w-50">
            <b-button type="submit" variant="primary" block>
              Вход
            </b-button>
          </div>
          <div class="w-50 text-center">
            <b-link :to="{ name: 'Register' }">
              Регистрация
            </b-link>
          </div>
        </div>
      </b-form>
    </loader>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />