import Link from 'next/link'
import { company } from '@/lib/company'
import CallConversionLink from '@/components/CallConversionLink'

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-[65vh] sm:min-h-[85vh] items-center text-white bg-no-repeat bg-cover bg-center"
      aria-label="Haushaltsgeräte Reparatur Hero"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0.25) 80%), url('/hero-repair.jpg')",
      }}
    >
      <div className="relative z-10 mx-auto flex w-full max-w-7xl min-h-[65vh] sm:min-h-[85vh] items-center px-6">
        <div className="max-w-md mx-auto text-center sm:max-w-xl sm:mx-0 sm:text-left space-y-4 md:space-y-6">
          <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-sky-100 mx-auto sm:mx-0">
            SCHNELLER REPARATURSERVICE IN ÖSTERREICH
          </div>

          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Haushaltsgeräte defekt?
          </h1>

          <h2 className="text-lg font-normal text-slate-100 sm:text-xl md:text-2xl md:font-semibold">
            Unser Kundendienst repariert Ihr Haushaltsgerät schnell und zuverlässig.
          </h2>

          <p className="hidden text-sm text-slate-200 sm:text-base md:block">
            Unsere Techniker reparieren Waschmaschinen, Geschirrspüler, Kühlschränke, Herde und
            Trockner aller Marken – oft noch am selben Tag.
          </p>

          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <CallConversionLink
              href={`tel:${company.phoneRaw}`}
              ariaLabel={`Jetzt anrufen ${company.phone}`}
              className="inline-flex w-full items-center justify-center rounded-xl bg-solar-primary px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-black/30 transition hover:bg-solar-dark sm:w-auto sm:text-base"
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
                  d="M2.25 5.25A2.25 2.25 0 014.5 3h1.75a1.5 1.5 0 011.415 1.02l1.1 3.3a1.5 1.5 0 01-.73 1.8l-1.05.56a11.25 11.25 0 005.39 5.39l.56-1.05a1.5 1.5 0 011.8-.73l3.3 1.1A1.5 1.5 0 0121 18.75V20.5a2.25 2.25 0 01-2.25 2.25H17A15 15 0 013 8V5.25z"
                />
              </svg>
              Jetzt anrufen: {company.phone}
            </CallConversionLink>

            <Link
              href="/kontakt"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/60 bg-transparent px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 sm:w-auto sm:text-base"
            >
              Online Anfrage
            </Link>
          </div>

          <div className="mt-2 text-xs sm:text-sm text-slate-200">
            Mo–Fr 08:00–18:00 Uhr · Österreichweiter Kundendienst
          </div>
        </div>
      </div>
    </section>
  )
}

