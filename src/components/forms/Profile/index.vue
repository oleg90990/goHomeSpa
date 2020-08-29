<template>
  <div class="register-form pt-3 pb-3">
    <loader :loading="loading" class="loader">
      <b-form @submit="onSubmit">
        <b-form-group label="Город">
          <CitySelect />
        </b-form-group>
        <b-form-group label="Имя">
          <b-form-input
            type="text"
            v-model="data.name"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Телефон">
          <phone-input v-model="data.mobile" required disabled/>
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
        <div class="d-flex align-items-center mt-4">
          <b-button type="submit" variant="primary" block>
            Сохранить
          </b-button>
        </div>
      </b-form>
    </loader>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />