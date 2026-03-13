'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function HomeSeoText() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="max-w-5xl mx-auto text-gray-700 text-sm md:text-base leading-relaxed">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center sm:text-left mb-3">
        Professioneller Kundendienst für Haushaltsgeräte in Österreich
      </h2>

      <p className="mb-3">
        Ein defektes Haushaltsgerät kann den Alltag schnell durcheinanderbringen. Wenn die Waschmaschine
        plötzlich stehen bleibt, der Geschirrspüler nicht mehr richtig reinigt oder der Kühlschrank nicht
        mehr kühlt, ist schnelle Hilfe gefragt. Unser Kundendienst für Haushaltsgeräte in Österreich bietet
        Ihnen einen zuverlässigen und professionellen Reparaturservice für viele verschiedene Geräte im
        Haushalt. Unser Ziel ist es, defekte Geräte schnell zu analysieren und effizient zu reparieren,
        damit Sie Ihren Alltag wieder ohne Probleme fortsetzen können.
      </p>

      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="inline-flex items-center text-solar-primary font-semibold text-sm mb-4 hover:underline"
        aria-expanded={expanded}
      >
        {expanded ? 'Weniger anzeigen' : 'Mehr anzeigen'}
      </button>

      {expanded && (
        <div className="space-y-4">
          <p>
            Unsere Techniker verfügen über langjährige Erfahrung im Bereich Haushaltsgeräte Reparatur und
            helfen Ihnen bei zahlreichen technischen Problemen. Egal ob{' '}
            <Link href="/waschmaschinen-reparatur" className="text-solar-primary font-semibold hover:underline">
              Waschmaschinen Reparatur
            </Link>
            ,{' '}
            <Link href="/geschirrspueler-reparatur" className="text-solar-primary font-semibold hover:underline">
              Geschirrspüler Reparatur
            </Link>
            ,{' '}
            <Link href="/kuehlschrank-reparatur" className="text-solar-primary font-semibold hover:underline">
              Kühlschrank Reparatur
            </Link>{' '}
            oder{' '}
            <Link href="/backofen-reparatur" className="text-solar-primary font-semibold hover:underline">
              Backofen Reparatur
            </Link>
            , unser Service deckt viele wichtige Haushaltsgeräte ab. Durch moderne Diagnosemethoden können
            unsere Techniker Fehler schnell erkennen und gezielt beheben. Dabei setzen wir auf hochwertige
            Ersatzteile und professionelle Werkzeuge, um eine zuverlässige und langfristige Lösung zu
            gewährleisten.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
            Reparaturservice für Waschmaschinen, Geschirrspüler und Kühlschränke
          </h3>
          <p>
            Haushaltsgeräte sind täglich im Einsatz und leisten wichtige Arbeit im Haushalt. Wenn eines
            dieser Geräte ausfällt, kann das schnell zu großen Unannehmlichkeiten führen. Unser
            Haushaltsgeräte Service bietet schnelle Unterstützung bei verschiedenen Defekten. Wir reparieren
            zahlreiche Gerätearten und helfen Ihnen dabei, Ihr Gerät wieder in einen funktionierenden Zustand
            zu bringen.
          </p>
          <p>Zu unseren häufigsten Reparaturleistungen gehören:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <Link href="/waschmaschinen-reparatur" className="text-solar-primary font-semibold hover:underline">
                Waschmaschinen Reparatur
              </Link>{' '}
              bei Schleuderproblemen oder Wasserfehlern
            </li>
            <li>
              <Link href="/geschirrspueler-reparatur" className="text-solar-primary font-semibold hover:underline">
                Geschirrspüler Reparatur
              </Link>
              , wenn das Geschirr nicht mehr sauber wird
            </li>
            <li>
              <Link href="/kuehlschrank-reparatur" className="text-solar-primary font-semibold hover:underline">
                Kühlschrank Reparatur
              </Link>
              , wenn die Kühlung nicht mehr funktioniert
            </li>
            <li>
              <Link href="/backofen-reparatur" className="text-solar-primary font-semibold hover:underline">
                Backofen Reparatur
              </Link>{' '}
              bei Temperaturproblemen oder Ausfällen
            </li>
            <li>
              <Link href="/elektroherd-reparatur" className="text-solar-primary font-semibold hover:underline">
                Elektroherd Reparatur
              </Link>{' '}
              bei defekten Kochfeldern
            </li>
            <li>
              <Link href="/trockner-reparatur" className="text-solar-primary font-semibold hover:underline">
                Trockner Reparatur
              </Link>
              , wenn das Gerät nicht mehr richtig trocknet
            </li>
            <li>
              <Link href="/mikrowellen-reparatur" className="text-solar-primary font-semibold hover:underline">
                Mikrowellen Reparatur
              </Link>{' '}
              bei technischen Störungen
            </li>
          </ul>
          <p>
            Unsere Techniker prüfen Ihr Gerät sorgfältig und erklären Ihnen transparent, welche Reparatur
            notwendig ist. In vielen Fällen kann ein Gerät durch eine professionelle Reparatur wieder
            vollständig genutzt werden, ohne dass ein teurer Neukauf notwendig ist.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
            Schnelle Hilfe durch erfahrene Techniker
          </h3>
          <p>
            Ein wichtiger Vorteil unseres Kundendienstes für Haushaltsgeräte ist die schnelle Terminvergabe.
            Wir wissen, dass ein defektes Gerät oft sofortige Hilfe erfordert. Deshalb bemühen wir uns,
            Termine möglichst kurzfristig anzubieten. Unsere Techniker arbeiten strukturiert und effizient,
            damit Reparaturen schnell durchgeführt werden können.
          </p>
          <p>
            Dank unserer Erfahrung können viele Probleme bereits beim ersten Termin erkannt und behoben
            werden. Unser Team arbeitet kundenorientiert und freundlich und erklärt Ihnen genau, welche
            Schritte durchgeführt werden. Transparente Preise und eine klare Kommunikation sind uns besonders
            wichtig, damit Sie sich jederzeit gut informiert fühlen.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
            Warum unseren Haushaltsgeräte Kundendienst wählen?
          </h3>
          <p>
            Viele Kunden entscheiden sich für unseren Service, weil wir Wert auf Qualität, Zuverlässigkeit
            und professionelle Arbeit legen. Unser Reparaturservice ist darauf ausgelegt, Ihnen eine schnelle
            und sichere Lösung für defekte Haushaltsgeräte zu bieten.
          </p>
          <p>Unsere Vorteile im Überblick:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Schnelle Terminvereinbarung</li>
            <li>Reparatur vieler bekannter Marken</li>
            <li>Erfahrene und qualifizierte Techniker</li>
            <li>Transparente Preise ohne versteckte Kosten</li>
            <li>Zuverlässiger Kundendienst in Österreich</li>
            <li>Professionelle Diagnose und Reparatur</li>
          </ul>
          <p>
            Durch unseren Reparaturservice für Haushaltsgeräte erhalten Sie kompetente Unterstützung bei
            technischen Problemen und können sich darauf verlassen, dass Ihr Gerät fachgerecht geprüft und
            repariert wird.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
            Jetzt Kundendienst für Haushaltsgeräte kontaktieren
          </h3>
          <p>
            Wenn eines Ihrer Haushaltsgeräte nicht mehr richtig funktioniert, müssen Sie nicht lange warten.
            Unser Kundendienst für Haushaltsgeräte steht Ihnen jederzeit zur Verfügung. Egal ob Waschmaschine,
            Geschirrspüler, Kühlschrank oder Backofen – wir helfen Ihnen dabei, Ihr Gerät schnell wieder
            einsatzbereit zu machen.
          </p>
          <p>
            Kontaktieren Sie unser Team und vereinbaren Sie einen Termin für eine professionelle
            Haushaltsgeräte Reparatur.{' '}
            <Link href="/kontakt" className="text-solar-primary font-semibold hover:underline">
              Jetzt Kontakt aufnehmen
            </Link>
            .
          </p>
        </div>
      )}
    </div>
  )
}

