import { buildPageMetadata } from '@/lib/seo'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata = buildPageMetadata({
  title: 'Trockner Reparatur – Wäschetrockner-Service',
  description:
    'Ihr Trockner wird nicht warm, bricht den Programmablauf ab oder zeigt einen Fehler? Wir reparieren Wäschetrockner in Österreich.',
  path: '/trockner-reparatur',
})

export default function TrocknerReparaturPage() {
  return (
    <ServicePageLayout
      title="Trockner-Reparatur in Österreich"
      tagline="Trockner wird nicht warm oder bricht ab?"
      intro="Ihre Wäsche bleibt feucht, der Trockner stoppt das Programm oder macht laute Geräusche? Wir helfen schnell weiter."
      details="Wir reinigen Luftwege, prüfen Heizung, Sensorik und Elektronik und beraten Sie, ob eine Reparatur wirtschaftlich sinnvoll ist."
      bulletPoints={[
        'Beseitigung von Flusen- und Luftstromproblemen',
        'Reparatur von Wärmepumpen- und Kondensationstrocknern',
        'Schonender Umgang mit Gerät und Umgebung',
        'Faire Einschätzung von Kosten und Nutzen',
      ]}
      imageSrc="/services/trockner-reparatur.jpg"
      imageAlt="Techniker repariert einen Wäschetrockner"
    />
  )
}

