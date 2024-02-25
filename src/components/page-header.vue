<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="flex flex-col wfull px-4 md:px-8 my-14 c-white">
    <RouterLink to="/" :class="title ? 'c-gray' : 'text-2xl font-bold'">Moetion</RouterLink>
    <h1 v-if="title" class="text-4xl font-bold">
      {{ title }}
    </h1>
  </div>
</template>
