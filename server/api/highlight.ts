import fs from 'node:fs/promises'
import { cwd } from 'node:process'
import { getQuery, loadShiki } from '#imports'

export default defineEventHandler(async (event) => {
  const { path, lang = 'vue', theme = 'vitesse-dark' } = getQuery(event)
  const shiki = await loadShiki()

  try {
    const fileContent = await fs.readFile(`${cwd()}/components/${path}`, 'utf8')
    const code = shiki.codeToHtml(fileContent, { lang, theme })

    return {
      html: code,
      originalContent: fileContent,
    }
  }
  catch (error) {
    console.error(error)
  }
})
