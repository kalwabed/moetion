<script setup lang="ts">
const components = [
  {
    title: 'Meteors',
    href: 'meteors',
    desc: 'A group of beams in the background of a container.',
    icon: 'i-tabler:meteor',
  },
  {
    title: 'Spotlight',
    href: 'spotlight',
    desc: 'Drawing attention to a particular element on the page.',
    icon: 'i-tabler:background',
  },
  {
    title: 'Text Generate Effect',
    href: 'text-gen',
    desc: 'Drawing attention to a particular element on the page.',
    icon: 'i-tabler:text-scan-2',
  },
]
</script>

<template>
  <div class="wfull flex flex-col">
    <PageHeader />
    <div class="grid grid-cols-1 gap-4 px-4 lg:grid-cols-3 md:grid-cols-2 md:px-8">
      <ComponentCard
        v-for="comp of components" :key="comp.href" :href="comp.href" :title="comp.title" :desc="comp.desc"
        :icon="comp.icon"
      />
    </div>
  </div>
</template>
