<script setup lang="ts">
useHead({
  title: 'Moetion',
})
</script>

<template>
  <div class="min-hfull wfull flex flex-auto bg-gray-9">
    <main class="mx-auto hfull wfull max-w-screen-xl">
      <NuxtErrorBoundary />
      <NuxtPage />
    </main>
  </div>
</template>

<style>
html,
body,
#__nuxt {
  height: 100%;
}
</style>
