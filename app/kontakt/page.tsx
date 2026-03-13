import { company } from '@/lib/company'
import ContactFormCard from '@/components/ContactFormCard'
import { buildPageMetadata } from '@/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Kontakt – Haushaltsgeräte Kundendienst in Österreich',
  description:
    'Kontaktieren Sie unseren Kundendienst für Haushaltsgeräte in Österreich per Telefon, E-Mail oder Kontaktformular. Schnelle Hilfe bei defekten Waschmaschinen, Geschirrspülern, Kühlschränken und mehr.',
  path: '/kontakt',
})

export default function Kontakt() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-24 w-80 h-80 bg-solar-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-24 w-96 h-96 bg-solar-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-solar-primary/10 text-solar-dark mb-3">
            Kontakt
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3">
            Kontaktformular &amp; Kontaktinfos
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Schreiben Sie uns über das Formular oder kontaktieren Sie uns direkt per Telefon oder E-Mail.
          </p>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,2fr)_minmax(0,2fr)] gap-8 lg:gap-10 items-start">
          {/* Kontaktinformationen */}
          <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-5 sm:p-6 md:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4">
              So erreichen Sie uns
            </h2>
            <div className="space-y-4 text-sm sm:text-base">
              <div className="flex items-start">
                <div className="w-9 h-9 rounded-xl bg-solar-primary/10 flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4 text-solar-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-0.5">Telefon</div>
                  <a
                    href={`tel:${company.phoneRaw}`}
                    className="text-slate-700 hover:text-solar-primary font-medium"
                  >
                    {company.phone}
                  </a>
                  <div className="mt-1 inline-flex items-center px-2 py-0.5 rounded-full bg-solar-primary/10 text-[11px] font-semibold text-solar-dark">
                    <span className="w-1.5 h-1.5 bg-solar-primary rounded-full mr-1.5 animate-pulse" />
                    Erreichbar Mo–Fr, 8–18 Uhr
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-9 h-9 rounded-xl bg-solar-primary/10 flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4 text-solar-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-0.5">E-Mail</div>
                  <a
                    href={`mailto:${company.email}`}
                    className="text-slate-700 hover:text-solar-primary font-medium break-words"
                  >
                    {company.email}
                  </a>
                  <div className="mt-1 text-[11px] text-slate-500">
                    In der Regel antworten wir innerhalb von 24&nbsp;Stunden.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Kontaktformular */}
          <ContactFormCard />
        </div>
      </div>
    </div>
  )
}

