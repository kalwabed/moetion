// uno.config.ts
import { defineConfig, presetIcons, presetUno, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      cdn: 'https://esm.sh/',
      scale: 1.2,
      autoInstall: true,
      warn: true,
      // collections: {
      //   tabler: () => import('@iconify-json/tabler/icons.json').then(i => i.default),
      // },
    }),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
})
