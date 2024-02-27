<script setup lang="ts">
const props = defineProps<{
  snippet: { html: string, originalContent: string }
}>()

const { copy, copied } = useClipboard({ source: props.snippet.originalContent })
</script>

<template>
  <div class="relative b b-coolgray-8 rd rd-lg bg-[#121212] p4 text-wrap">
    <button
      class="disable:pointer-events-none absolute right-3 top-3 rd-full p2 c-gray5 transition hover:c-gray3"
      title="Copy" :disabled="copied" @click="copy(snippet.originalContent)"
    >
      <i
        v-if="!copied" v-motion :initial="{ opacity: 0 }" :visible="{ opacity: 1 }"
        class="i-tabler:copy block text-lg"
      />
      <span v-else v-motion :initial="{ opacity: 0 }" :visible="{ opacity: 1 }">Copied!</span>
    </button>
    <div v-html="snippet.html" />
  </div>
</template>

<style>
pre {
  overflow-x: auto;
  white-space: pre;
  word-break: normal;
  word-wrap: normal;
  hyphens: none;
  padding: 0 1rem 1rem 0;
}
</style>
