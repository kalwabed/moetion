<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="px4 md:px8">
    <PageHeader :title="title" />
    <slot />
  </div>
</template>
