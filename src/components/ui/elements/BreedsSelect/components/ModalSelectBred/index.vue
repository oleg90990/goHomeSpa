<template>
  <div>
    <b-button size="sm" variant="primary" @click="showModal">
      Добавить породу
    </b-button>
    <b-modal ref="breedsModal" hide-footer title="Выбор породы" centered>
      <b-form-input v-model="filter" placeholder="Поиск..." class="mb-3" />
      <div class="breeds">
        <div 
          v-for="(breed, key) in breeds"
          :key="key"
          @click="selected(breed)"
          class="d-flex align-items-center border-bottom pt-2 pb-2 breed"
        >
          <img :src="breed.img" :alt="breed.name" width="50" class="mr-3 rounded">
          <div>
            {{ breed.name }}
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />