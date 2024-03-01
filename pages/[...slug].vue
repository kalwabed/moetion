<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, queryContent(route.path).findOne)
</script>

<template>
  <CoreWrapper :title="page.title">
    <ContentDoc />
  </CoreWrapper>
</template>
