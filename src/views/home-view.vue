<script setup lang="ts">
import ComponentCard from '@/components/component-card.vue';
import PageHeader from '@/components/page-header.vue'

const components = [
  {
    title: "Meteors",
    href: "meteors",
    desc: "A group of beams in the background of a container.",
    icon: "i-tabler:meteor"
  },
  {
    title: "Spotlight",
    href: "spotlight",
    desc: "Good for drawing attention to a particular element on the page.",
    icon: "i-tabler:background"
  },
]
</script>

<template>
  <div class="flex flex-col wfull">
    <PageHeader />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-8">
      <ComponentCard v-for="comp of components" :key="comp.href" :href="comp.href" :title="comp.title" :desc="comp.desc"
        :icon="comp.icon" />
    </div>
  </div>
</template>
