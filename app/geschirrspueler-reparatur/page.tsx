import { buildPageMetadata } from '@/lib/seo'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata = buildPageMetadata({
  title: 'Geschirrspüler Reparatur – Geschirrspüler-Service',
  description:
    'Reparatur von Geschirrspülern in Österreich. Wir beheben Störungen, Dichtigkeitsprobleme und Fehlercodes zuverlässig.',
  path: '/geschirrspueler-reparatur',
})

export default function GeschirrspuelerReparaturPage() {
  return (
    <ServicePageLayout
      title="Geschirrspüler-Reparatur in Österreich"
      tagline="Geschirrspüler läuft nicht mehr?"
      intro="Ihr Geschirrspüler bricht das Programm ab, hinterlässt Wasser im Gerät oder reinigt das Geschirr nicht mehr richtig?"
      details="Wir prüfen Elektronik, Pumpe und Wasserzulauf und reparieren nur, wenn es wirtschaftlich sinnvoll ist – mit klarer Kosteneinschätzung vorab."
      bulletPoints={[
        'Fehlercodes und Störungen professionell auslesen',
        'Behebung von Dichtigkeits- und Abpumpproblemen',
        'Reparatur von Einbau- und Standgeräten',
        'Terminabstimmung nach Ihren Wunschzeiten',
      ]}
      imageSrc="/services/geschirrspueler.jpg"
      imageAlt="Techniker repariert einen Geschirrspüler"
    />
  )
}

