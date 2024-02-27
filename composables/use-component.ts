import type { UseFetchOptions } from '#app'

export async function useComponent(path: string) {
  const defaults: UseFetchOptions<Highlight> = {
    key: path,
    query: { path },
  }

  return await useFetch('/api/highlight', defaults)
}
