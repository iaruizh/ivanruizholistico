import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ivanruizholistico.com'
  const lastModified = new Date()

  const routes = ['', '/sobre-mi', '/zanatte', '/ruah', '/contacto']

  const esPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
    alternates: {
      languages: {
        es: `${baseUrl}${route}`,
        en: `${baseUrl}/en${route}`,
      },
    },
  }))

  const enPages = routes.map((route) => ({
    url: `${baseUrl}/en${route}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 0.9 : 0.7,
  }))

  return [...esPages, ...enPages]
}
