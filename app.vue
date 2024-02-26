<script setup lang="ts">
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
