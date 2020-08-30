<template>
    <b-tabs pills card vertical nav-wrapper-class="w-25">
      <b-tab title="Профиль" active>
        <b-row>
          <b-col lg="6" md="12"> 
            <profile-form />
          </b-col>
        </b-row>
      </b-tab>
      <b-tab title="Мои объявления">
        <b-card-text>
          Tab contents 2
        </b-card-text>
      </b-tab>
    </b-tabs>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />