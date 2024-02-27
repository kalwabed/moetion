<script setup lang="ts">
import type { Highlight } from '~/utils/types'

defineProps<{
  title: string
  snippet: Highlight
}>()
</script>

<template>
  <div>
    <PageHeader :title="title" />
    <slot />
    <CodeSnippet :snippet="snippet" />
  </div>
</template>
