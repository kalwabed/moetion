<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex hfull wfull flex-col bg-gray-900 overflow-x-hidden">
    <main class="hfull flex flex-col px-4 md:px-0">
      <RouterView />
    </main>
  </div>
</template>

<style>
html,
body,
#app {
  height: 100%;
}
</style>
