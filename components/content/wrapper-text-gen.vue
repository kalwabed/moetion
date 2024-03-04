<script setup lang="ts">
const { start, ready } = useTimeout(7000, { controls: true })

function repeat() {
  reloadNuxtApp()
}

onMounted(() => {
  start()
})
</script>

<template>
  <div>
    <slot />

    <div v-show="ready" v-motion class="mt-2" :initial="{ opacity: 0 }" :visible="{ opacity: 1 }">
      <p class="c-gray">
        - Sutan Sjahrir
      </p>
      <button
        class="mt4 inline-flex items-center gap2 rd-full p1 c-green transition hover:opacity-60" title="Repeat"
        @click="repeat"
      >
        <i class="i-tabler:reload block" /> Repeat
      </button>
    </div>
  </div>
</template>
