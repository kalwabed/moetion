<script setup lang="ts">
defineProps<{
  href: string
  title: string
  desc: string
  icon: string
}>()
</script>

<template>
  <NuxtLink
    :to="href"
    class="wfull flex items-center rd p2 opacity-60 transition duration-200 ease-out hover:(bg-gray-800 bg-opacity-40 opacity-100)"
  >
    <div class="pr5 pt2">
      <div :class="`${icon} text-3xl c-gray-300`" />
    </div>
    <div class="flex-auto">
      <h2 class="text-lg c-gray-300 font-semibold leading-relaxed">
        {{ title }}
      </h2>
      <small class="c-gray-400">{{ desc }}</small>
    </div>
  </NuxtLink>
</template>
