<template>
  <div class="page-border p-0">
    <b-tabs pills card vertical nav-wrapper-class="w-25" class="tabs-profile">
      <b-tab title="Профиль" active>
        <b-row>
          <b-col lg="6" md="12"> 
            <profile-form />
          </b-col>
        </b-row>
      </b-tab>
      <b-tab title="Мои объявления">
        <b-card-text>
          <b-button :to="{ name: 'CreatePost' }" variant="primary" class="mb-4">
            Создать пост
          </b-button>

          <b-row>
            <b-col lg="4" md="6" v-for="(item, key) in posts" :key="key">
              <card-post class="mb-3 mb-lg-4" :item="item" />
            </b-col>
          </b-row>
        </b-card-text>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />