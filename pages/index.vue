<script setup lang="ts">
useSeoMeta({
  title: 'Moetion',
  description: 'Halo dunia',
  ogTitle: 'Moetion',
})

const { data: components } = useAsyncData('components', () => queryContent('/core').find())
</script>

<template>
  <div class="wfull flex flex-col">
    <PageHeader />
    <div class="grid grid-cols-1 gap-4 px-4 lg:grid-cols-3 md:grid-cols-2 md:px-8">
      <ComponentCard
        v-for="comp of components" :key="comp._path" :href="comp._path" :title="comp.title"
        :desc="comp.description" :icon="comp.icon"
      />
    </div>
  </div>
</template>
