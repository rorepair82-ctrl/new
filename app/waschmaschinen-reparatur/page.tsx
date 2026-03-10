import { buildPageMetadata } from '@/lib/seo'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata = buildPageMetadata({
  title: 'Waschmaschinen Reparatur – schnell & zuverlässig',
  description:
    'Professionelle Waschmaschinen-Reparatur in Österreich. Schnelle Hilfe bei Defekten, faire Preise und zuverlässiger Service.',
  path: '/waschmaschinen-reparatur',
})

export default function WaschmaschinenReparaturPage() {
  return (
    <ServicePageLayout
      title="Waschmaschinen-Reparatur in Österreich"
      tagline="Defekte Waschmaschine? Wir helfen."
      intro="Ihre Waschmaschine pumpt nicht mehr ab, bleibt stehen oder zeigt einen Fehlercode? Wir kümmern uns um Diagnose und Reparatur."
      details="Unser Techniker prüft das Gerät direkt bei Ihnen vor Ort und entscheidet gemeinsam mit Ihnen, ob sich eine Reparatur lohnt – transparent und ohne versteckte Kosten."
      bulletPoints={[
        'Fehlerdiagnose bei allen gängigen Marken',
        'Tausch von Pumpe, Heizung, Elektronik & Co.',
        'Reparatur oft günstiger als Neukauf',
        'Schnelle Termine in ganz Österreich',
      ]}
      imageSrc="/services/washing%20machine%20repair.jpg"
      imageAlt="Techniker repariert eine Waschmaschine"
    />
  )
}

