import { buildPageMetadata } from '@/lib/seo'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata = buildPageMetadata({
  title: 'Kühlschrank Reparatur – Kühlgeräte-Service',
  description:
    'Kühlschrank kühlt nicht mehr richtig? Wir bieten fachgerechte Kühlschrank-Reparatur und Service in Österreich.',
  path: '/kuehlschrank-reparatur',
})

export default function KuehlschrankReparaturPage() {
  return (
    <ServicePageLayout
      title="Kühlschrank-Reparatur in Österreich"
      tagline="Kühlschrank kühlt nicht richtig?"
      intro="Ihr Kühlschrank wird zu warm, vereist stark oder macht ungewohnte Geräusche? Wir helfen schnell, bevor Lebensmittel verderben."
      details="Wir prüfen Kühlkreislauf, Thermostat, Lüfter und Elektronik und sagen Ihnen offen, ob sich eine Reparatur lohnt oder ein Austausch sinnvoller ist."
      bulletPoints={[
        'Schnelle Hilfe bei kompletten Ausfällen',
        'Behebung von Temperatur- und Vereisungsproblemen',
        'Service für Kühl- und Gefrierkombinationen',
        'Transparente Empfehlung Reparatur vs. Neugerät',
      ]}
      imageSrc="/services/kuehlschrank.jpg"
      imageAlt="Techniker prüft einen Kühlschrank"
    />
  )
}

