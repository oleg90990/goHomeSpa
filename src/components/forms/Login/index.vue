<template>
  <div class="login-form pt-3 pb-3">
    <loader :loading="loading" class="loader">
      <b-form @submit="onSubmit">
        <b-form-group label="Номер телефона">
          <phone-input v-model="data.mobile" required/>
        </b-form-group>
        <b-form-group label="Пароль">
          <b-form-input
            type="password"
            v-model="data.password"
            required
          ></b-form-input>
        </b-form-group>
        <div class="d-flex align-items-center mt-4">
          <div class="w-50">
            <b-button type="submit" variant="primary" block>
              Вход
            </b-button>
          </div>
        </div>
      </b-form>
    </loader>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />