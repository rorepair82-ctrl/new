import Link from 'next/link'
import { company } from '@/lib/company'
import { baseUrl, buildPageMetadata } from '@/lib/seo'
import ContactFormCard from '@/components/ContactFormCard'
import HeroSection from '@/components/HeroSection'
import HomeSeoText from '@/components/HomeSeoText'

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
      <HeroSection />

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
                  src="/services/Geschirrspuler-reparatur.jpg"
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

      {/* Reviews Section removed as requested */}

      {/* SEO-Text: Service-Beschreibung & interne Links mit "Mehr anzeigen" */}
      <section className="py-10 sm:py-12 px-4 bg-white border-t border-gray-100" aria-label="Service-Überblick">
        <HomeSeoText />
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
