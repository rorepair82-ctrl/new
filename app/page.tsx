import Link from 'next/link'
import { company } from '@/lib/company'
import { baseUrl, buildPageMetadata } from '@/lib/seo'
import ContactFormCard from '@/components/ContactFormCard'
import CallConversionLink from '@/components/CallConversionLink'

export const metadata = buildPageMetadata({
  title: 'Waschmaschine & Kühlschrank Reparatur Österreich – Service & Montage',
  description: 'Reparatur Haushaltsgeräte in Österreich: Waschmaschine, Kühlschrank, Herd, Geschirrspüler. Kostenlose Beratung, faire Festpreise, schnelle Termine. Jetzt anfragen.',
  path: '/',
})

function HomeContent() {

  const aggregateRatingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#localbusiness`,
    name: company.name,
    url: baseUrl,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '50',
    },
  }

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingJsonLd) }}
      />
      {/* Hero Section – zentrale Service-Karte */}
      <section
        className="relative flex items-center justify-center px-4 sm:px-6 pt-12 sm:pt-16 md:pt-20 pb-10 md:pb-14 bg-white overflow-hidden"
        aria-label="Hauptbereich"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-16 w-72 h-72 bg-solar-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-solar-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-5xl px-0 sm:px-4">
          <div className="px-5 sm:px-7 md:px-9 py-6 sm:py-7 md:py-8">
            {/* Badge */}
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center px-3 sm:px-4 py-1 rounded-full bg-solar-primary/5 text-solar-dark text-[11px] sm:text-xs font-medium border border-solar-primary/20">
                <span className="w-4 h-4 rounded-full border border-solar-primary flex items-center justify-center mr-1.5">
                  <span className="w-2 h-2 rounded-full bg-solar-primary" />
                </span>
                Über 5.000 zufriedene Kunden österreichweit
              </div>
            </div>

            {/* Heading */}
            <div className="text-center mb-5 sm:mb-6">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-solar-primary mb-1">
                Haushaltsgeräte
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                Kundendienst
              </h1>
            </div>

            {/* Description */}
            <p className="text-center text-sm sm:text-base text-slate-600 max-w-xl mx-auto mb-6 sm:mb-7">
              Schnell, zuverlässig und fair. Wir reparieren alle Marken mit transparenten Preisen
              und hoher Qualität.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-4 sm:mb-5">
              <CallConversionLink
                href={`tel:${company.phoneRaw}`}
                ariaLabel="Jetzt anrufen"
                className="inline-flex items-center justify-center rounded-full bg-solar-primary hover:bg-solar-dark text-white text-sm sm:text-base font-semibold px-7 sm:px-8 py-2.5 shadow-lg transition-colors"
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
                Jetzt anrufen
              </CallConversionLink>

              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full border border-solar-primary/25 text-slate-900 text-sm sm:text-base font-semibold px-7 sm:px-8 py-2.5 bg-white hover:bg-solar-primary/5 transition-colors shadow-sm"
                aria-label="Online Anfrage senden"
              >
                Online Anfrage
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Phone number */}
            <a
              href={`tel:${company.phoneRaw}`}
              className="block text-center text-base sm:text-lg font-semibold text-slate-900 mb-4 hover:text-solar-primary transition-colors"
            >
              {company.phone}
            </a>

            {/* Bullet points */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center">
                <span className="w-4 h-4 rounded-full bg-solar-primary/5 border border-solar-primary flex items-center justify-center mr-1.5">
                  <svg
                    className="w-3 h-3 text-solar-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                Kostenvoranschlag vor Ort
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 rounded-full bg-solar-primary/5 border border-solar-primary flex items-center justify-center mr-1.5">
                  <svg
                    className="w-3 h-3 text-solar-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                Faire Preise
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 rounded-full bg-solar-primary/5 border border-solar-primary flex items-center justify-center mr-1.5">
                  <svg
                    className="w-3 h-3 text-solar-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                Alle Marken
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontaktformular direkt nach Hero */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-white" aria-labelledby="home-contact-heading">
        <div className="max-w-5xl mx-auto">
          <ContactFormCard />
        </div>
      </section>

      {/* Services Section – Keyword-optimierte Überschriften */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden" aria-labelledby="services-heading">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-solar-primary/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 id="services-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 md:mb-4">
              Unsere Leistungen für Ihre Haushaltsgeräte
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
              Direkter Zugang zu allen Service-Seiten – wählen Sie die passende Reparatur oder Montage.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Waschmaschinen-Reparatur */}
            <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="flex flex-col h-full">
                <img
                  src="/services/washing%20machine%20repair.jpg"
                  alt="Waschmaschinen-Reparatur"
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
                <div className="p-4 md:p-5">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-solar-primary transition-colors">
                    Waschmaschinen-Reparatur
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm flex-grow">
                    Fehlercode oder Trommel still? Wir reparieren Waschmaschinen aller gängigen Marken.
                  </p>
                  <Link
                    href="/waschmaschinen-reparatur"
                    className="inline-flex items-center text-solar-primary hover:text-solar-dark font-semibold text-sm mt-auto"
                    aria-label="Zur Seite Waschmaschinen-Reparatur"
                  >
                    Zur Leistung
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Geschirrspüler-Reparatur */}
            <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="flex flex-col h-full">
                <img
                  src="/services/geschirrspueler.jpg"
                  alt="Geschirrspüler-Reparatur"
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
                <div className="p-4 md:p-5">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-solar-primary transition-colors">
                    Geschirrspüler-Reparatur
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm flex-grow">
                    Spült nicht mehr sauber oder bleibt stehen? Wir bringen Ihren Geschirrspüler wieder zum Laufen.
                  </p>
                  <Link
                    href="/geschirrspueler-reparatur"
                    className="inline-flex items-center text-solar-primary hover:text-solar-dark font-semibold text-sm mt-auto"
                    aria-label="Zur Seite Geschirrspüler-Reparatur"
                  >
                    Zur Leistung
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Kühlschrank-Reparatur */}
            <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="flex flex-col h-full">
                <img
                  src="/services/kuehlschrank.jpg"
                  alt="Kühlschrank-Reparatur"
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
                <div className="p-4 md:p-5">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-solar-primary transition-colors">
                    Kühlschrank-Reparatur
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm flex-grow">
                    Kühlschrank kühlt schlecht oder vereist? Wir verhindern Lebensmittelverlust durch schnelle Hilfe.
                  </p>
                  <Link
                    href="/kuehlschrank-reparatur"
                    className="inline-flex items-center text-solar-primary hover:text-solar-dark font-semibold text-sm mt-auto"
                    aria-label="Zur Seite Kühlschrank-Reparatur"
                  >
                    Zur Leistung
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Backofen-Reparatur */}
            <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="flex flex-col h-full">
                <img
                  src="/services/Backofen-reparatur.jpg"
                  alt="Backofen-Reparatur"
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
                <div className="p-4 md:p-5">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-solar-primary transition-colors">
                    Backofen-Reparatur
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm flex-grow">
                    Heizung, Umluft oder Display defekt? Wir reparieren Ihren Backofen zuverlässig.
                  </p>
                  <Link
                    href="/backofen-reparatur"
                    className="inline-flex items-center text-solar-primary hover:text-solar-dark font-semibold text-sm mt-auto"
                    aria-label="Zur Seite Backofen-Reparatur"
                  >
                    Zur Leistung
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Elektroherd-Reparatur */}
            <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="flex flex-col h-full">
                <img
                  src="/services/Dunstabzugshaube-reparatur.jpg"
                  alt="Elektroherd-Reparatur"
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
                <div className="p-4 md:p-5">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-solar-primary transition-colors">
                    Elektroherd-Reparatur
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm flex-grow">
                    Kochfeld oder Platten heizen nicht mehr? Wir prüfen Elektrik und Steuerung Ihres Herdes.
                  </p>
                  <Link
                    href="/elektroherd-reparatur"
                    className="inline-flex items-center text-solar-primary hover:text-solar-dark font-semibold text-sm mt-auto"
                    aria-label="Zur Seite Elektroherd-Reparatur"
                  >
                    Zur Leistung
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Mikrowellen-Reparatur */}
            <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="flex flex-col h-full">
                <img
                  src="/services/Mikrowelle-reparatur.jpg"
                  alt="Mikrowellen-Reparatur"
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
                <div className="p-4 md:p-5">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-solar-primary transition-colors">
                    Mikrowellen-Reparatur
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm flex-grow">
                    Drehteller, Türkontakt oder Heizung defekt? Wir reparieren Ihre Mikrowelle fachgerecht.
                  </p>
                  <Link
                    href="/mikrowellen-reparatur"
                    className="inline-flex items-center text-solar-primary hover:text-solar-dark font-semibold text-sm mt-auto"
                    aria-label="Zur Seite Mikrowellen-Reparatur"
                  >
                    Zur Leistung
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Trockner-Reparatur */}
            <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="flex flex-col h-full">
                <img
                  src="/services/trockner-reparatur.jpg"
                  alt="Trockner-Reparatur"
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
                <div className="p-4 md:p-5">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-solar-primary transition-colors">
                    Trockner-Reparatur
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm flex-grow">
                    Wäsche bleibt nass oder Gerät wird zu heiß? Wir warten und reparieren Ihren Trockner.
                  </p>
                  <Link
                    href="/trockner-reparatur"
                    className="inline-flex items-center text-solar-primary hover:text-solar-dark font-semibold text-sm mt-auto"
                    aria-label="Zur Seite Trockner-Reparatur"
                  >
                    Zur Leistung
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Altgeräte entsorgen */}
            <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="flex flex-col h-full">
                <img
                  src="/services/Gefrierschrank-reparatur.jpg"
                  alt="Altgeräte entsorgen"
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
                <div className="p-4 md:p-5">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-solar-primary transition-colors">
                    Altgeräte entsorgen
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm flex-grow">
                    Wir übernehmen den umweltgerechten Abtransport und die Entsorgung Ihrer alten Haushaltsgeräte.
                  </p>
                  <Link
                    href="/altgeraete-entsorgen"
                    className="inline-flex items-center text-solar-primary hover:text-solar-dark font-semibold text-sm mt-auto"
                    aria-label="Zur Seite Altgeräte entsorgen"
                  >
                    Zur Leistung
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section – Trust für SEO & Ads */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden" id="bewertungen" aria-labelledby="reviews-heading">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1920&q=80"
            alt="Zufriedene Kunden – Reparatur Haushaltsgeräte"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-solar-primary/10 via-transparent to-solar-secondary/10"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 id="reviews-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Kundenbewertungen: Reparatur & Service
            </h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex items-center gap-1" aria-label="4,8 von 5 Sternen">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-6 h-6 md:w-7 md:h-7 text-yellow-400 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-white/90 text-lg md:text-xl font-semibold ml-2">4,8</span>
            </div>
            <p className="text-white/80 text-base md:text-lg">
              Über 50 zufriedene Kunden in Österreich
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Review 1 */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-white/20">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-gray-500 ml-auto">vor 2 Wochen</span>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "Termin schnell bekommen, Reparatur innerhalb eines Tages erledigt. Freundlich und kompetent – werde ich weiterempfehlen!"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-solar-primary to-solar-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  AB
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Anna Berger</p>
                  <p className="text-sm text-gray-500">Wien</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-white/20">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-gray-500 ml-auto">vor 1 Monat</span>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "Kühlschrank war defekt – bereits am nächsten Tag vor Ort. Klare Kommunikation, faire Preise. Top!"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  TW
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Thomas Weber</p>
                  <p className="text-sm text-gray-500">Niederösterreich</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO-Text: Keyword-Relevanz (kurz, natürlich) */}
      <section className="py-8 px-4 bg-white border-t border-gray-100" aria-label="Service-Überblick">
        <div className="max-w-4xl mx-auto text-center text-gray-600 text-sm md:text-base leading-relaxed">
          <p>
            <strong className="text-gray-900">Reparatur Haushaltsgeräte Österreich:</strong> Wir bieten professionelle <strong>Waschmaschinen-Reparatur</strong>, <strong>Kühlschrank-Reparatur</strong>, <strong>Herd-Service</strong> und <strong>Geschirrspüler-Montage</strong> – in Wien und bundesweit. Kostenlose Beratung, faire Festpreise und schnelle Termine. <Link href="/kontakt" className="text-solar-primary font-semibold hover:underline">Jetzt unverbindlich anfragen</Link>.
          </p>
        </div>
      </section>

      {/* CTA Section – Conversion-optimiert für Google Ads */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 bg-slate-50 overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-solar-primary/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12 md:mb-16 text-center px-4">
            <div className="flex items-center justify-center gap-2 md:gap-4 mb-4 md:mb-6">
              <div className="h-1 w-12 md:w-20 bg-black"></div>
              <span className="text-xs md:text-sm font-bold text-black uppercase tracking-[0.2em]">Jetzt starten</span>
              <div className="h-1 w-12 md:w-20 bg-black"></div>
            </div>
            <h2 id="cta-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-black mb-4 md:mb-6 leading-[1.1] md:leading-[0.9] px-2">
              REPARATUR ODER MONTAGE?<br className="hidden sm:block" />KOSTENLOSE BERATUNG
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 font-light max-w-3xl mx-auto leading-relaxed px-2">
              Unverbindliche Anfrage – wir melden uns zeitnah. Oder rufen Sie uns direkt an: <a href={`tel:${company.phoneRaw}`} className="font-semibold text-solar-primary hover:underline">{company.phone}</a>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto px-4">
            <Link 
              href="/kontakt"
              className="group bg-black text-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl md:rounded-3xl transform hover:scale-[1.02] transition-all duration-300 shadow-2xl hover:shadow-3xl relative overflow-hidden"
              aria-label="Kostenlose Beratung anfragen – Kontaktformular"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-solar-primary/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-solar-primary rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-solar-secondary group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 md:mb-4">Kostenlose Beratung anfragen</h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-4 md:mb-6">
                  Unverbindlich per Formular – wir erstellen ein individuelles Angebot für Reparatur oder Montage.
                </p>
                <div className="inline-flex items-center text-solar-primary group-hover:text-solar-secondary font-bold text-base md:text-lg transition-colors">
                  Jetzt Anfrage senden
                  <svg className="w-5 h-5 md:w-6 md:h-6 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link
              href="/ueber-uns"
              className="group bg-slate-800 text-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl md:rounded-3xl transform hover:scale-[1.02] transition-all duration-300 shadow-2xl hover:shadow-3xl relative overflow-hidden"
              aria-label="Mehr über uns erfahren"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-solar-primary rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-white group-hover:text-slate-800 group-hover:scale-110 transition-all duration-300">
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-[#1e40af]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c-4.418 0-8 1.79-8 4v1h16v-1c0-2.21-3.582-4-8-4z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 md:mb-4">Über uns</h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-4 md:mb-6">
                  Lernen Sie unser Team, unsere Arbeitsweise und unsere Werte kennen.
                </p>
                <div className="inline-flex items-center text-solar-primary group-hover:text-white font-bold text-base md:text-lg transition-colors">
                  Mehr erfahren
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 ml-2 group-hover:translate-x-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function Home() {
  return <HomeContent />
}
