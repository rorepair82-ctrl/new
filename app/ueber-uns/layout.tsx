import { buildPageMetadata } from '@/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Über Uns',
  description: 'Ihr Partner für Reparatur, Wartung und Installation von Haushaltsgeräten in Österreich. Erfahren Sie mehr über unser Team und unsere Leistungen.',
  path: '/ueber-uns',
})

export default function UberUnsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
