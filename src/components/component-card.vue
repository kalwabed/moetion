
<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineProps<{
  href: string;
  title: string;
  desc: string;
  icon: string;
}>()
</script>

<template>
  <RouterLink :to="href"
    class="wfull flex items-center p2 rd opacity-60 hover:(bg-gray-800 bg-opacity-40 opacity-100) transition duration-200 ease-out">
    <div class="pt2 pr5">
      <div :class="`${icon} text-3xl c-gray-300`"></div>
    </div>
    <div class="flex-auto">
      <h2 class="font-semibold text-lg leading-relaxed c-gray-300">{{ title }}</h2>
      <small class="c-gray-400">{{ desc }}</small>
    </div>
  </RouterLink>
</template>
