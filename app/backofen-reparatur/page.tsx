import { buildPageMetadata } from '@/lib/seo'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata = buildPageMetadata({
  title: 'Backofen Reparatur – Ofen & Einbaugerät',
  description:
    'Backofen heizt nicht mehr, bleibt kalt oder zeigt Fehler? Wir reparieren Backöfen und Einbaugeräte zuverlässig.',
  path: '/backofen-reparatur',
})

export default function BackofenReparaturPage() {
  return (
    <ServicePageLayout
      title="Backofen-Reparatur in Österreich"
      tagline="Backofen bleibt kalt oder heizt falsch?"
      intro="Ihr Backofen heizt nicht mehr, erreicht die gewünschte Temperatur nicht oder zeigt Fehlercodes an?"
      details="Wir prüfen Heizelemente, Temperaturfühler, Steuerung und Lüfter und bringen Ihren Backofen wieder zuverlässig zum Laufen – wenn eine Reparatur wirtschaftlich ist."
      bulletPoints={[
        'Diagnose bei Einbau- und Stand-Backöfen',
        'Reparatur von Heizung, Lüfter und Elektronik',
        'Saubere Arbeit ohne Beschädigung der Küche',
        'Flexible Termine, auch abends möglich',
      ]}
      imageSrc="/services/Backofen-reparatur.jpg"
      imageAlt="Techniker repariert einen Backofen"
    />
  )
}

