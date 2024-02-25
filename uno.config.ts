// uno.config.ts
import { defineConfig, transformerVariantGroup, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      cdn: "https://esm.sh/",
      scale: 1.2,
      autoInstall: true,
      warn: true,
      collections: {
        tabler: () => import('@iconify-json/tabler/icons.json').then(i => i.default),
      }
    })
  ],
  transformers: [
    transformerVariantGroup()
  ]
})
