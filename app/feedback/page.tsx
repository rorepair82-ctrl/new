import Link from 'next/link'
import { company } from '@/lib/company'
import FeedbackForm from '@/components/FeedbackForm'
import { buildPageMetadata } from '@/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Feedback – Kundendienst Haushaltsgeräte',
  description:
    'Geben Sie Ihr Feedback zu unserem Haushaltsgeräte-Kundendienst in Österreich ab. Teilen Sie Ihre Erfahrungen, Servicebewertung oder Verbesserungsvorschläge über unser Feedback-Formular.',
  path: '/feedback',
})

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-solar-primary/10 via-white to-solar-dark/10 border border-slate-100 shadow-sm">
            <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-solar-primary/10 to-transparent pointer-events-none" />
            <div className="relative z-10 px-6 sm:px-8 lg:px-10 py-10 sm:py-12 min-h-[40vh] flex items-center">
              <div className="max-w-2xl space-y-4 sm:space-y-5">
                <p className="text-sm font-semibold text-solar-primary uppercase tracking-[0.18em]">
                  Feedback
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                  Ihre Meinung ist uns wichtig
                </h1>
                <p className="text-sm sm:text-base text-slate-700">
                  Wir möchten unseren Service ständig verbessern. Teilen Sie uns Ihre Erfahrungen, Ihr
                  Feedback oder mögliche Verbesserungsvorschläge mit.
                </p>
                <p className="text-sm sm:text-base text-slate-600">
                  Ihr Feedback hilft uns, unseren Haushaltsgeräte-Kundendienst in Österreich noch besser
                  zu machen.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href="#feedback-form"
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-solar-primary px-7 py-3 text-sm font-semibold text-white shadow-md hover:bg-solar-dark transition"
                  >
                    Feedback senden
                  </a>
                  <Link
                    href="/kontakt"
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl border border-solar-primary/70 bg-white px-7 py-3 text-sm font-semibold text-solar-primary hover:bg-solar-primary/5 transition"
                  >
                    Kontakt aufnehmen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warum Feedback wichtig ist */}
      <section className="px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12 lg:pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Warum Ihr Feedback wichtig ist
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Mit Ihrem Feedback helfen Sie uns, unseren Service transparent, zuverlässig und
              kundenorientiert weiterzuentwickeln.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-3">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-solar-primary/10 text-solar-primary text-lg">
                ✓
              </div>
              <h3 className="font-semibold text-slate-900 mb-1.5">Service verbessern</h3>
              <p className="text-sm text-slate-600">
                Ihr Feedback hilft uns, unseren Reparaturservice kontinuierlich zu verbessern.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-solar-primary/10 text-solar-primary text-lg">
                ✓
              </div>
              <h3 className="font-semibold text-slate-900 mb-1.5">Schnelle Klärung</h3>
              <p className="text-sm text-slate-600">
                Falls einmal etwas nicht perfekt gelaufen ist, kümmern wir uns schnell darum.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-solar-primary/10 text-solar-primary text-lg">
                ✓
              </div>
              <h3 className="font-semibold text-slate-900 mb-1.5">Kundenzufriedenheit</h3>
              <p className="text-sm text-slate-600">
                Unsere Kunden stehen im Mittelpunkt unseres Services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Formular */}
      <section id="feedback-form" className="px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12 lg:pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Feedback senden</h2>
            <p className="text-sm sm:text-base text-slate-600">
              Teilen Sie uns mit, wie zufrieden Sie mit unserem Service sind oder was wir noch besser
              machen können.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8 max-w-3xl">
            <FeedbackForm />
          </div>
        </div>
      </section>

      {/* Vertrauen / Unser Versprechen */}
      <section className="px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12 lg:pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Unser Versprechen</h2>
                <p className="text-sm sm:text-base text-slate-600">
                  Jedes Feedback wird von unserem Team geprüft. Falls notwendig, melden wir uns
                  schnellstmöglich bei Ihnen.
                </p>
                <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-500">✓</span>
                    <span>Persönliche Bearbeitung durch unser Serviceteam</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-500">✓</span>
                    <span>Transparente und faire Lösungen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-500">✓</span>
                    <span>Schutz Ihrer Daten und vertrauliche Behandlung</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 flex justify-center md:justify-end">
                <div className="rounded-2xl bg-slate-50 border border-slate-100 px-6 py-5 w-full max-w-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-full bg-solar-primary/10 flex items-center justify-center text-solar-primary">
                      ✓
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Feedback-Team</p>
                      <p className="text-xs text-slate-500">Kundendienst Haushaltsgeräte</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Wir lesen jede Rückmeldung sorgfältig und nutzen sie, um unseren Service Tag für Tag
                    zu verbessern.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-solar-primary to-solar-dark rounded-3xl shadow-md px-6 sm:px-8 lg:px-10 py-8 sm:py-9 flex flex-col md:flex-row md:items-center md:justify-between gap-5 text-white">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-1">
                Haben Sie Fragen zu unserem Service?
              </h2>
              <p className="text-sm sm:text-base text-slate-100">
                Unser Team steht Ihnen jederzeit zur Verfügung.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <a
                href={`tel:${company.phoneRaw}`}
                className="inline-flex items-center justify-center rounded-xl bg-white text-solar-primary px-6 py-2.5 text-sm font-semibold shadow-sm hover:bg-slate-100 transition"
              >
                Jetzt anrufen
              </a>
              <p className="text-sm sm:text-base font-medium text-slate-100">
                {company.phone}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

