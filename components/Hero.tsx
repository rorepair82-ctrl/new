import Link from 'next/link'
import { company } from '@/lib/company'
import CallConversionLink from '@/components/CallConversionLink'

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-solar-primary/5 via-white to-slate-100 px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 md:pb-24"
      aria-label="Hauptbereich – Haushaltsgeräte Reparatur"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-16 h-64 w-64 rounded-full bg-solar-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 h-72 w-72 rounded-full bg-solar-secondary/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center">
        {/* Left: Text + CTAs */}
        <div className="max-w-xl lg:max-w-none lg:flex-1">
          <div className="mb-4 inline-flex items-center rounded-full bg-solar-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-solar-dark">
            Schneller Reparaturservice in Österreich
          </div>

          <h1 className="mb-3 text-3xl font-extrabold leading-snug text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
            Waschmaschine, Kühlschrank oder Herd kaputt?
          </h1>

          <h2 className="mb-4 text-lg font-semibold text-slate-900 sm:text-xl md:text-2xl">
            Wir reparieren alle Haushaltsgeräte schnell und zuverlässig.
          </h2>

          <p className="mb-6 max-w-xl text-sm text-slate-600 sm:text-base">
            Zertifizierte Techniker reparieren Waschmaschinen, Geschirrspüler, Kühlschränke, Herde
            und Trockner – oft noch am selben Tag.
          </p>

          <div className="mb-5 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <CallConversionLink
              href={`tel:${company.phoneRaw}`}
              ariaLabel="Jetzt Techniker anrufen"
              className="inline-flex items-center justify-center rounded-full bg-solar-primary px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-solar-dark sm:text-base"
            >
              <svg
                className="mr-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 19.72V22a2 2 0 01-2 2h-1C9.716 24 3 17.18 3 9V7a2 2 0 012-2z"
                />
              </svg>
              Jetzt Techniker anrufen
            </CallConversionLink>

            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-full border border-solar-primary/30 bg-white px-7 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-solar-primary/5 sm:text-base"
            >
              Kostenlose Anfrage
            </Link>
          </div>

          <dl className="grid gap-3 text-xs text-slate-700 sm:text-sm sm:gap-2 md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-solar-primary/10 text-solar-primary">
                ✓
              </span>
              <dd>Über 5.000 zufriedene Kunden</dd>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-solar-primary/10 text-solar-primary">
                ✓
              </span>
              <dd>Reparatur aller Marken</dd>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-solar-primary/10 text-solar-primary">
                ✓
              </span>
              <dd>Schnelle Termine in ganz Österreich</dd>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-solar-primary/10 text-solar-primary">
                ✓
              </span>
              <dd>Transparente Festpreise</dd>
            </div>
          </dl>
        </div>

        {/* Right: Image + overlay card */}
        <div className="relative mt-4 w-full max-w-md self-stretch lg:mt-0 lg:flex-1 lg:max-w-none">
          <div className="relative h-72 overflow-hidden rounded-3xl bg-slate-200 shadow-xl sm:h-80 md:h-96">
            <img
              src="/hero-technician.jpg"
              alt="Techniker repariert Waschmaschine in moderner Küche"
              className="h-full w-full object-cover"
              loading="lazy"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-solar-primary/10" />
          </div>

          <div className="absolute -bottom-5 left-4 right-4 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur-sm sm:left-6 sm:right-auto sm:w-64">
            <p className="text-xs font-semibold uppercase tracking-wide text-solar-primary">
              Ihr Vorteil
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-slate-800">
              <li>• Kostenlose Diagnose</li>
              <li>• Techniker in Ihrer Nähe</li>
              <li>• Termin noch heute möglich</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile sticky bottom call button */}
      <div className="fixed inset-x-0 bottom-3 z-30 px-4 sm:hidden">
        <CallConversionLink
          href={`tel:${company.phoneRaw}`}
          ariaLabel="Jetzt Techniker anrufen"
          className="flex items-center justify-center rounded-full bg-solar-primary px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-solar-primary/30"
        >
          <svg
            className="mr-2 h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 19.72V22a2 2 0 01-2 2h-1C9.716 21 3 17.18 3 9V7a2 2 0 012-2z"
            />
          </svg>
          Jetzt Techniker anrufen
        </CallConversionLink>
      </div>
    </section>
  )
}

