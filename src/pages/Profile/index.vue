<template>
    <b-tabs pills card vertical>
      <b-tab title="Профиль" active>
        <profile-form />
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