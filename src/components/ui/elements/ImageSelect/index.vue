<template>
  <div class="d-flex flex-wrap">
    <div v-for="(src, key) in images" :key="key">
      <div class="input-image border border-primary rounded image mr-2 mb-2 position-relative" :style="{ backgroundImage: `url(${src})` }" >
        <div class="bg-primary trash" @click="removeItem(key)">
          <BIconTrash />
        </div>
      </div>
    </div>

    <div class="border border-primary rounded image pointer d-flex align-items-center justify-content-center text-primary font-weight-bold" @click="openFileDiealog()">
      <BIconPlus />
    </div>

    <input type="file" ref="file" @change="previewFiles" class="d-none" accept="image/x-png,image/jpeg" >
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />