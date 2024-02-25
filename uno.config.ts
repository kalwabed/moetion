// uno.config.ts
import { defineConfig, transformerVariantGroup, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      cdn: "https://esm.sh/",
      scale: 1.2,
      autoInstall: true,
    })
  ],
  transformers: [
    transformerVariantGroup()
  ]
})
