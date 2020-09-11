<template>
  <div class="page-border transparent">
    <loader :loading="loading">
      <b-row v-if="data">
        <b-col lg="6">
          <b-carousel id="images" controls :interval="0">
            <b-carousel-slide v-for="(src, key) in data.images" :key="key" class="carousel-slide">
              <template v-slot:img>
                <div class="background" :style="{ backgroundImage: `url(${src})` }" />
                <img :src="src" />
              </template>
            </b-carousel-slide>
          </b-carousel>
        </b-col>
        <b-col lg="6" class="mt-3 mt-md-0">
          <div v-if="data.user_id == user.id" class="d-flex justify-content-end">
            <Actions :data="data" @publish="publish" />
          </div>
          <h1>{{ data.title }}</h1>
          <div class="p-2 pl-0 border-bottom">
            <prop-value label="Город">
              {{ data.city.name }}
            </prop-value>
          </div>
          <div class="p-2 pl-0 border-bottom">
            <prop-value label="Порода">
              {{ breed ? breed.name : 'Неизвестно' }}
            </prop-value>
          </div>
          <div class="p-2 pl-0 border-bottom">
            <prop-value label="Возраст">
              {{ data.age }} {{ getLabelAge(data.age) }}
            </prop-value>
          </div>
          <div class="p-2 pl-0 border-bottom">
            <prop-value label="Пол">
              {{ animal ? animal[data.gender] : 'Неизвестно' }}
            </prop-value>
          </div>
          <div class="p-2 pl-0 border-bottom">
            <prop-value :label="getLabelSterilization(data.sterilization)">
              {{ getLabelYesNo(data.sterilization) }}
            </prop-value>
          </div>
          <div class="p-2 pl-0 border-bottom">
            <prop-value label="Цвет">
              <div class="d-flex flex-wrap">
                <div
                  v-for="(id, key) in data.colors"
                  :key="key"
                  :style="getColorStyle(id)"
                  class="color mr-2"
                />
              </div>
            </prop-value>
          </div>
          <div class="mb-3 mt-3">
            {{ data.content }}
          </div>
          <div v-if="isActive" class="mb-3">
            <b-button v-b-modal.modal-1 block size="lg" variant="primary">
              Показать номер
            </b-button>

            <b-modal id="modal-1" title="Не забудьте сказать что вы нашли объявление на сайте Друзья Дома" hide-footer centered>
              <a :href="'tel:' + data.phone" class="phone text-decoration-none text-center text-dark d-block">
                {{ formatPhoneNumber(data.phone) }}
              </a>
            </b-modal>
          </div>
        </b-col>
      </b-row>
    </loader>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />