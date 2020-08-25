<template>
  <b-row>
    <b-col lg="8">
      <loader :loading="loading">
        <b-row>
          <b-col lg="6" md="6" v-for="(item, key) in items" :key="key">
            <card-post class="mb-3 mb-lg-4" :item="item" />
          </b-col>
        </b-row>
      </loader>
    </b-col>
    <b-col lg="4">
      <search-form :data="data" />
    </b-col>
  </b-row>
</template>

<script lang="ts" src="./index.ts" />