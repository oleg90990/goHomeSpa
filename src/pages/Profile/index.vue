<template>
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
          <b-button :to="{ name: 'CreatePost' }" variant="primary">
            Создать пост
          </b-button>

          <div v-for="(post, key) in posts" :key="key">
            {{ post.title }}
          </div>
        </b-card-text>
      </b-tab>
    </b-tabs>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />