<script setup lang="ts">
import '@unocss/reset/tailwind.css'

useHead({
  title: 'Moetion',
})
</script>

<template>
  <NuxtLayout>
    <NuxtErrorBoundary />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  height: 100%;
}
</style>
