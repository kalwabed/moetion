<script setup lang="ts">
import Meteors from "../components/meteors.vue"
</script>

<template>
  <div class="relative bg-gray-900 min-h-screen wfull flex justify-center items-center">
    <div class="relative h-3/4 w-3/4 max-w-sm md:h-1/2">
      <div
        class="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
      <div
        class="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
        <div class="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="h-2 w-2 text-gray-300">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
          </svg>
        </div>

        <h1 class="relative z-50 mb-4 text-xl font-bold text-white">
          Meteors because they&apos;re cool
        </h1>

        <p class="relative z-50 mb-4 text-base font-normal text-slate-500">
          Make something awesome with this super cool meteor effect. It will make people happy when
          they see it. It might even make their day. Just try it eh.
        </p>

        <button class="rounded-lg border border-gray-500 px-4 py-1 text-gray-300"> Explore </button>

        <Meteors :qty="20" />
      </div>
    </div>
  </div>
</template>
