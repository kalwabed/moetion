---
title: 'Spotlight'
description: 'Drawing attention to a particular element on the page.'
icon: 'i-tabler:background'
---

::wrapper-spotlight
:::spotlight{ext-class="-top-40 left-0 md:left-60 md:-top-20" fill="white"}
::

```vue
<script setup lang="ts">
defineProps<{
  fill?: string
  extClass?: string
}>()

const baseClass = 'pointer-events-none absolute z-1 h-169% w-138% spotlight opacity-0 lg:w-84%'
</script>

<template>
  <svg :class="[baseClass, extClass]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3787 2842" fill="none">
    <g filter="url(#filter)">
      <ellipse
        cx="1924.71" cy="273.501" rx="1924.71" ry="273.501"
        transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)" :fill="fill ?? 'white'"
        fill-opacity="0.21"
      />
    </g>
    <defs>
      <filter
        id="filter" x="0.860352" y="0.838989" width="3785.16" height="2840.26" filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur_1065_8" />
      </filter>
    </defs>

  </svg>
</template>

<style scoped>
@keyframes spotlight {
  0% {
    opacity: 0;
    transform: translate(-72%, -62%) scale(0.5);
  }

  100% {
    opacity: 1;
    transform: translate(-50%, -40%) scale(1);
  }
}

.spotlight {
  animation: spotlight 2s ease 0.75s 1 forwards;
}
</style>
```