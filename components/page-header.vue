<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="my-14 wfull flex flex-col px4 c-white md:px8">
    <NuxtLink to="/" :class="title ? 'c-gray' : 'text-2xl font-bold'">
      Moetion
    </NuxtLink>
    <h1 v-if="title" class="text-4xl font-bold">
      {{ title }}
    </h1>
  </div>
</template>
