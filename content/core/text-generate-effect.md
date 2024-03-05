---
title: 'Text Generate Effect'
description: 'A cool text effect that fades in text on page load.'
icon: 'i-tabler-background'
text: '"Tiap persatuan hanya akan bersifat taktis, temporer dan karna itu insidental. Usaha-usaha untuk menyatukan secara paksa hanya akan menghasilkan anak banci, persatuan semacam itu akan terasa sakit, tersesat dan merusak pergerakan."'
---

::wrapper-text-gen
:::text-generate-effect{:text="text"}
::

```vue
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
```
