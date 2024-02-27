<script setup lang="ts">
const props = defineProps<{
  title: string
  corePath: string
}>()

const { data } = await useFetch<{ html: string, originalContent: string }>('/api/highlight', {
  query: {
    path: props.corePath,
  },
})
</script>

<template>
  <div>
    <PageHeader :title="title" />
    <slot />
    <CodeSnippet :snippet="data" />
  </div>
</template>
