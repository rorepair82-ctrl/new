import { buildPageMetadata } from '@/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Kontakt',
  description: 'Kontaktieren Sie uns für Reparatur, Wartung oder Installation Ihrer Haushaltsgeräte. Beratung, Angebot und Terminvereinbarung – wir sind für Sie da.',
  path: '/kontakt',
})

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
