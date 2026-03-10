import { buildPageMetadata } from '@/lib/seo'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata = buildPageMetadata({
  title: 'Mikrowellen Reparatur – schnelle Hilfe',
  description:
    'Mikrowelle defekt? Wir reparieren Mikrowellen-Geräte in Österreich schnell und zuverlässig, wenn eine Reparatur sinnvoll ist.',
  path: '/mikrowellen-reparatur',
})

export default function MikrowellenReparaturPage() {
  return (
    <ServicePageLayout
      title="Mikrowellen-Reparatur in Österreich"
      tagline="Mikrowelle heizt nicht mehr?"
      intro="Der Drehteller bleibt stehen, das Gerät heizt nicht oder es riecht verschmort? Wir prüfen Ihre Mikrowelle sorgfältig."
      details="Wir beurteilen, ob eine Reparatur aus Sicherheits- und Kostensicht sinnvoll ist und beraten Sie ehrlich zu den nächsten Schritten."
      bulletPoints={[
        'Sichere Prüfung von Hochspannungskomponenten',
        'Behebung typischer Defekte an Türkontakten',
        'Transparente Empfehlung Reparatur vs. Ersatz',
        'Service für frei stehende und Einbau-Mikrowellen',
      ]}
      imageSrc="/services/Mikrowelle-reparatur.jpg"
      imageAlt="Techniker prüft eine Mikrowelle"
    />
  )
}

