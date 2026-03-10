import { buildPageMetadata } from '@/lib/seo'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata = buildPageMetadata({
  title: 'Altgeräte entsorgen – umweltgerechte Entsorgung',
  description:
    'Wir unterstützen Sie bei der fachgerechten Entsorgung alter Haushaltsgeräte in Österreich und kombinieren dies auf Wunsch mit Lieferung oder Montage eines Neugeräts.',
  path: '/altgeraete-entsorgen',
})

export default function AltgeraeteEntsorgenPage() {
  return (
    <ServicePageLayout
      title="Altgeräte entsorgen – fachgerecht & umweltfreundlich"
      tagline="Altes Gerät loswerden?"
      intro="Sie möchten eine alte Waschmaschine, einen Kühlschrank, Herd oder Trockner entsorgen lassen? Wir übernehmen das für Sie."
      details="Wir holen Altgeräte direkt bei Ihnen ab und kümmern uns um eine fachgerechte, umweltfreundliche Entsorgung nach geltenden Vorschriften."
      bulletPoints={[
        'Abholung direkt aus Wohnung oder Keller',
        'Umweltgerechte Entsorgung über zertifizierte Stellen',
        'Auf Wunsch kombinierbar mit Lieferung eines Neugeräts',
        'Klare Terminabstimmung und transparente Kosten',
      ]}
      imageSrc="/services/Gefrierschrank-reparatur.jpg"
      imageAlt="Techniker transportiert ein altes Kühlgerät"
    />
  )
}

