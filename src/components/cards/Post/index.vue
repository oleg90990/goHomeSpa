<template>
    <b-card :img-src="item.thumbnail" :img-alt="item.title" img-top>
      <b-card-text>
        {{ item.title }}
      </b-card-text>
    </b-card>
</template>

<script lang="ts" src="./index.ts" />