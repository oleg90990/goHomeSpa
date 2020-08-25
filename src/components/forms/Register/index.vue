<template>
  <div class="register-form">
    <loader :loading="loading" class="loader">
    `<b-form @submit="onSubmit">
        <b-form-group label="Город">
          <CitySelect v-model="city"/>
        </b-form-group>
        <b-form-group label="Имя">
          <b-form-input
            type="text"
            v-model="data.name"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Телефон">
          <b-form-input
            type="text"
            v-model="data.mobile"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Пароль">
          <b-form-input
            type="password"
            v-model="data.password"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Повторите пароль">
          <b-form-input
            type="password"
            v-model="data.c_password"
            required
          ></b-form-input>
        </b-form-group>
        <div class="d-flex align-items-center">
          <div class="w-50">
            <b-button type="submit" variant="primary" block>
              Регистрация
            </b-button>
          </div>
          <div class="w-50 text-center">
            <b-link :to="{ name: 'Login' }">
              Вход
            </b-link>
          </div>
        </div>
      </b-form>
    </loader>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />