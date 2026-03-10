import { buildPageMetadata } from '@/lib/seo'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata = buildPageMetadata({
  title: 'Elektroherd Reparatur – Kochfelder & Herd',
  description:
    'Reparatur von Elektroherden und Kochfeldern in Österreich. Wir beheben typische Defekte schnell und zuverlässig.',
  path: '/elektroherd-reparatur',
})

export default function ElektroherdReparaturPage() {
  return (
    <ServicePageLayout
      title="Elektroherd- & Kochfeld-Reparatur"
      tagline="Herd oder Kochfeld defekt?"
      intro="Kochfelder heizen ungleichmäßig, einzelne Platten fallen aus oder die Sicherung fliegt immer wieder?"
      details="Wir prüfen Anschlüsse, Steuerung und Heizelemente Ihres Elektroherds oder Induktionskochfelds und reparieren fachgerecht nach Herstellervorgaben."
      bulletPoints={[
        'Reparatur von Ceran- und Induktionskochfeldern',
        'Beseitigung von Kurzschlüssen und Ausfällen',
        'Ersatz defekter Regler und Bedienelemente',
        'Sichere Prüfung aller Elektroanschlüsse',
      ]}
      imageSrc="/services/Dunstabzugshaube-reparatur.jpg"
      imageAlt="Techniker arbeitet an einem Kochfeld"
    />
  )
}

