<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <div class="text-2xl text-white leading-snug tracking-wide">
    <div
      v-motion :initial="{ opacity: 0 }" :enter="{
        opacity: 1,
        transition: {
          delay: 1 * 200,
          duration: 20,
        },
      }"
    >
      <span
        v-for="txt, idx of text.split(' ')" :key="txt + idx" v-motion :initial="{ opacity: 0 }" :enter="{
          opacity: 1,
          transition: {
            delay: idx * 200,
            duration: 2000,
          },
        }" class="c-white"
      >{{ txt }}{{ ' ' }}</span>
    </div>
  </div>
</template>
