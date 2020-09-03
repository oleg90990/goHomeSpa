<template>
  <div class="create-post-form">
    <loader :loading="loading" class="loader">
      <b-form @submit="onSubmit">
        <b-row>
          <b-col md="12" lg="6">
            <b-form-group label="Город">
              <city-select v-model="city" :cities="true" required/>
            </b-form-group>
            <b-form-group label="Заголовок">
              <b-form-input type="text" v-model="data.title" required></b-form-input>
            </b-form-group>
            <b-form-group label="Животное">
              <b-form-select v-model="data.animal_id" :options="animalOptions" required>
              </b-form-select>
            </b-form-group>
            <b-form-group label="Порода">
              <b-form-select v-model="data.breed_id" :options="breedOptions" required>
              </b-form-select>
            </b-form-group>
            <b-form-group label="Пол">
              <gender-select v-model="data.gender" :animalId="data.animal_id" required />
            </b-form-group>
            <b-form-group :label="getLabelSterilization(data.gender)">
              <sterilization-select v-model="data.sterilization" :gender="data.gender" required />
            </b-form-group>
            <b-form-group label="Цвет">
              <color-select v-model="data.colors" required />
            </b-form-group>
            <b-form-group label="Возраст">
              <b-form-select v-model="data.age" :options="ageOptions" required>
              </b-form-select>
            </b-form-group>
            <div class="d-flex align-items-center mt-4">
              <b-button type="submit" variant="primary" block>
                Создать
              </b-button>
            </div>
          </b-col>
          <b-col md="12" lg="6">
            <b-form-group label="Описание">
              <b-form-textarea v-model="data.content" rows="4" max-rows="4">
              </b-form-textarea>
            </b-form-group>
            <b-form-group label="Изображения">
              <image-select v-model="data.images" />
            </b-form-group>
          </b-col>
        </b-row>
      </b-form>
    </loader>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />