import { company } from '@/lib/company'
import type { Metadata } from 'next'

/**
 * Basis-URL der Website (ohne trailing slash)
 */
export const baseUrl = company.websiteUrl

/**
 * Standard-OG-Bild (absolut)
 */
export const defaultOgImage = `${baseUrl}/Kundendiensthaushaltsgeraete.png`

/**
 * Erzeugt Open-Graph- und Twitter-Metadaten für eine Seite
 */
export function buildPageMetadata({
  title,
  description,
  path = '',
  image = defaultOgImage,
  noIndex = false,
}: {
  title: string
  description: string
  path?: string
  image?: string
  noIndex?: boolean
}): Metadata {
  const url = path ? `${baseUrl}${path.startsWith('/') ? path : `/${path}`}` : baseUrl
  const fullTitle = title.includes(company.name) ? title : `${title} | ${company.name}`

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'de_AT',
      url,
      siteName: company.name,
      title: fullTitle,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: company.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  }
}
