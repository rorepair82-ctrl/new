import { baseUrl } from '@/lib/seo'

const staticRoutes = [
  '',
  '/waschmaschinen-reparatur',
  '/geschirrspueler-reparatur',
  '/kuehlschrank-reparatur',
  '/backofen-reparatur',
  '/elektroherd-reparatur',
  '/mikrowellen-reparatur',
  '/trockner-reparatur',
  '/altgeraete-entsorgen',
  '/ueber-uns',
  '/kontakt',
]

export default function sitemap() {
  const staticEntries = staticRoutes.map((path) => ({
    url: `${baseUrl}${path || '/'}`,
    lastModified: new Date(),
    changeFrequency:
      path === '' || path === '/kontakt' ? ('weekly' as const) : ('monthly' as const),
    priority: path === '' || path === '/kontakt' ? 0.9 : 0.8,
  }))

  const englishEntries = staticRoutes.map((path) => {
    const translatedPath = path ? `/en${path}` : '/en'
    return {
      url: `${baseUrl}${translatedPath}`,
      lastModified: new Date(),
      changeFrequency:
        path === '' || path === '/kontakt' ? ('weekly' as const) : ('monthly' as const),
      priority: path === '' || path === '/kontakt' ? 0.9 : 0.8,
    }
  })

  return [...staticEntries, ...englishEntries]
}
