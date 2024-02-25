<script setup lang="ts">
const props = defineProps<{ qty?: number; class?: string }>()

const meteors = new Array(props.qty || 20).fill(true)
</script>

<template>
  <span v-for="_, idx of meteors" :key="idx" :style="{
    top: '0px',
    left: `${Math.floor(Math.random() * (400 - -400) + -400)}px`,
    animationDelay: `${Math.random() * (0.8 - 0.2) + 0.2}s`,
    animationDuration: `${Math.floor(Math.random() * (10 - 2) + 2)}s`,
  }"
    class="absolute left-1/2 top-1/2 h-0.5 rotate-[215deg] meteor-effect rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']">
  </span>
</template>

<style scoped>
@keyframes meteor {
  0% {
    transform: rotate(215deg) translate(0);
    opacity: 1;
  }

  70% {
    opacity: 1;
  }

  100% {
    transform: rotate(215deg) translateX(-500px);
    opacity: 0;
  }
}

.meteor-effect {
  animation: meteor 5s linear infinite;
}
</style>
