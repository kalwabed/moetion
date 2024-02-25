<script setup lang="ts">
import ComponentCard from '@/components/component-card.vue';
import PageHeader from '@/components/page-header.vue'

const components = [
  {
    title: "Meteors",
    href: "meteors",
    desc: "A group of beams in the background of a container, sort of like meteors."
  }
]
</script>

<template>
  <div class="flex flex-col wfull">
    <PageHeader />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-8 mt-12">
      <ComponentCard v-for="comp of components" :key="comp.href" :href="comp.href" :title="comp.title"
        :desc="comp.desc" />
    </div>
  </div>
</template>
