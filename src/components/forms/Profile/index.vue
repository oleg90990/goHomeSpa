<template>
  <div class="register-form">
    <loader :loading="loading" class="loader">
      <b-form @submit="onSubmit" v-if="user.id">
        <b-form-group label="Город">
          <city-select v-model="city" :cities="true"/>
        </b-form-group>
        <b-form-group label="Имя">
          <b-form-input
            set autocomplete="off"
            type="text"
            v-model="data.name"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Телефон">
          <phone-input v-model="user.mobile" required disabled/>
        </b-form-group>
        <b-form-group label="E-mail">
          <b-form-input
            set autocomplete="off"
            type="text"
            v-model="data.email"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Пароль">
          <b-form-input
            set autocomplete="off"
            type="password"
            v-model="data.password"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Повторите пароль">
          <b-form-input
            set autocomplete="off"
            type="password"
            v-model="data.c_password"
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