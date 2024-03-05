// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@unocss/reset/tailwind.css'],
  modules: [
    '@unocss/nuxt',
    '@vueuse/motion/nuxt',
    'nuxt-module-eslint-config',
    '@vueuse/nuxt',
    '@nuxt/content',
  ],
  typescript: {
    strict: false,
  },
  components: {
    dirs: [
      {
        path: '~/components/core',
        global: true,
      },
      '~/components',
    ],
  },
  features: {
    // for UnoCSS
    inlineStyles: false,
  },
  experimental: {
    asyncEntry: true,
    viewTransition: true,
    typedPages: true,
  },
  eslintConfig: {
    setup: false,
  },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },
  content: {
    highlight: {
      theme: 'vitesse-dark',
    },
  },
})
