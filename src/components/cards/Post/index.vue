<template>
  <b-link :to="{ name: 'Post', params: { id: item.id, item: item }}" class="d-block text-decoration-none text-body">
    <b-card :class="{'not-active': !item.active }" bg-variant="primary" :img-src="item.thumbnail" :img-alt="item.title" img-top>
      <b-card-text class="text-white">
        {{ item.title }}
      </b-card-text>
    </b-card>
  </b-link>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />