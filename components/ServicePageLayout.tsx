import Link from 'next/link'
import { company } from '@/lib/company'

type ServicePageLayoutProps = {
  title: string
  tagline: string
  intro: string
  details: string
  bulletPoints: string[]
  imageSrc: string
  imageAlt: string
}

export default function ServicePageLayout({
  title,
  tagline,
  intro,
  details,
  bulletPoints,
  imageSrc,
  imageAlt,
}: ServicePageLayoutProps) {
  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-solar-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-24 w-96 h-96 bg-solar-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-10 lg:gap-14 items-center">
            <div>
              <p className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-solar-primary/10 text-solar-dark mb-4">
                {tagline}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                {title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-700 mb-4 sm:mb-5 max-w-xl">
                {intro}
              </p>
              <p className="text-sm sm:text-base text-slate-600 mb-6 sm:mb-8 max-w-xl">
                {details}
              </p>

              <ul className="grid sm:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8 text-sm text-slate-700">
                {bulletPoints.map((point) => (
                  <li key={point} className="flex items-start">
                    <span className="mt-1 mr-2 h-4 w-4 rounded-full bg-solar-primary/10 flex items-center justify-center text-solar-primary">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-solar-primary text-white font-semibold text-sm sm:text-base shadow-lg hover:bg-solar-dark hover:shadow-xl transition-all"
                >
                  Anfrage senden
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
                <a
                  href={`tel:${company.phoneRaw}`}
                  className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-solar-primary/40 bg-white/80 text-solar-dark font-semibold text-sm sm:text-base shadow-sm hover:bg-solar-primary/5 hover:border-solar-primary transition-all"
                >
                  <svg
                    className="w-4 h-4 mr-2"
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
                  {company.phone}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-solar-primary/15 via-solar-secondary/10 to-solar-primary/5 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900/5">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-72 sm:h-80 md:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary content */}
      <section className="py-10 sm:py-14 md:py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="md:col-span-2 bg-white rounded-2xl shadow-md border border-slate-100 p-5 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">
              So läuft die Reparatur ab
            </h2>
            <ol className="space-y-2 text-sm sm:text-base text-slate-700 list-decimal list-inside">
              <li>
                Sie beschreiben uns kurz das Problem über das Kontaktformular oder telefonisch.
              </li>
              <li>Wir prüfen, ob eine Reparatur wirtschaftlich sinnvoll ist und beraten Sie.</li>
              <li>
                Ein Techniker kommt zum vereinbarten Termin zu Ihnen und führt Diagnose und Reparatur
                durch.
              </li>
              <li>Im Anschluss testen wir das Gerät gemeinsam und geben Ihnen Tipps zur Nutzung.</li>
            </ol>
          </div>

          <div className="bg-solar-primary/5 border border-solar-primary/30 rounded-2xl p-5 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
              Warum über uns anfragen?
            </h3>
            <ul className="space-y-1.5 text-sm text-slate-800">
              <li>✓ Erfahrung mit allen gängigen Marken</li>
              <li>✓ Transparente Einschätzung vor Ort</li>
              <li>✓ Kostenlose telefonische Erstberatung</li>
              <li>✓ Schnelle Termine, auch kurzfristig</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

