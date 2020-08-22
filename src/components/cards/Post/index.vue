<template>
  <b-link :to="{ name: 'Post', params: { id: 123 } }" class="d-block text-decoration-none text-body">
    <b-card :img-src="item.thumbnail" :img-alt="item.title" img-top>
      <b-card-text>
        {{ item.title }}
      </b-card-text>
    </b-card>
  </b-link>
</template>

<script lang="ts" src="./index.ts" />