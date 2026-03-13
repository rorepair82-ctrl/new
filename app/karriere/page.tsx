import { buildPageMetadata } from '@/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Karriere bei Kundendienst Haushaltsgeräte',
  description:
    'Karriere beim Haushaltsgeräte Kundendienst in Österreich: Bewerben Sie sich als Servicetechniker oder Kundendienst-Mitarbeiter und werden Sie Teil unseres Technik-Teams.',
  path: '/karriere',
})

export default function KarrierePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-center"
        aria-label="Karriere bei Kundendienst Haushaltsgeräte"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.55), rgba(0,0,0,0.3)), url('/hero-repair.jpg')",
          }}
        />
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.4fr,1fr] gap-10 items-center">
            <div className="text-white space-y-4 sm:space-y-5 max-w-xl">
              <p className="text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase text-sky-100">
                Karriere bei Kundendienst Haushaltsgeräte
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Werden Sie Teil unseres Technik-Teams
              </h1>
              <h2 className="text-base sm:text-lg md:text-xl font-medium text-slate-100">
                Wir suchen motivierte Techniker und Mitarbeiter für unseren Kundendienst in Österreich.
              </h2>
              <p className="text-sm sm:text-base text-slate-100/90 max-w-xl">
                Unser Unternehmen wächst schnell. Deshalb suchen wir engagierte Fachkräfte, die gemeinsam
                mit uns den besten Haushaltsgeräte-Service in Österreich anbieten möchten.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="#karriere-form"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-solar-primary px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-black/30 transition hover:bg-solar-dark"
                >
                  Jetzt bewerben
                </a>
                <a
                  href="#offene-stellen"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl border border-white/70 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
                >
                  Offene Stellen ansehen
                </a>
              </div>
            </div>

            <div className="hidden lg:flex justify-end">
              <div className="bg-white/95 rounded-2xl shadow-lg border border-slate-100 p-5 w-full max-w-sm">
                <h3 className="text-sm font-semibold text-slate-900 mb-2">
                  Arbeiten bei Kundendienst Haushaltsgeräte
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-4">
                  Werden Sie Teil eines wachsenden Teams von Technikern und Kundendienst-Spezialisten, die
                  täglich dafür sorgen, dass Haushaltsgeräte in ganz Österreich zuverlässig funktionieren.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-500">✓</span>
                    <span>Österreichweiter Einsatz mit abwechslungsreichen Aufgaben</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-500">✓</span>
                    <span>Persönlicher Kontakt zu unseren Kunden vor Ort</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-500">✓</span>
                    <span>Modern ausgestattete Servicefahrzeuge und Werkzeuge</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warum bei uns arbeiten */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Warum bei uns arbeiten?
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Wir bieten Ihnen ein modernes Arbeitsumfeld, kurze Entscheidungswege und ein Team, das
              zusammenhält. Ihre Leistung wird gesehen und geschätzt.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-solar-primary/10 text-solar-primary">
                €
              </div>
              <h3 className="font-semibold text-slate-900 mb-1.5">Faire Bezahlung</h3>
              <p className="text-sm text-slate-600">
                Leistungsgerechte Bezahlung mit attraktiven Bonusmöglichkeiten.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-solar-primary/10 text-solar-primary">
                ⏱
              </div>
              <h3 className="font-semibold text-slate-900 mb-1.5">Flexible Arbeitszeiten</h3>
              <p className="text-sm text-slate-600">
                Flexible Arbeitszeiten und planbare Einsätze.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-solar-primary/10 text-solar-primary">
                ⚙
              </div>
              <h3 className="font-semibold text-slate-900 mb-1.5">Modernes Equipment</h3>
              <p className="text-sm text-slate-600">
                Unsere Techniker arbeiten mit modernen Werkzeugen und Fahrzeugen.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-solar-primary/10 text-solar-primary">
                ★
              </div>
              <h3 className="font-semibold text-slate-900 mb-1.5">Sicherer Arbeitsplatz</h3>
              <p className="text-sm text-slate-600">
                Langfristige Zusammenarbeit in einem wachsenden Unternehmen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offene Stellen */}
      <section id="offene-stellen" className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Offene Stellen</h2>
            <p className="text-sm sm:text-base text-slate-600">
              Hier finden Sie eine Auswahl unserer aktuellen Jobangebote. Wir freuen uns über
              Bewerbungen von erfahrenen Technikern ebenso wie von Quereinsteigern mit hoher Motivation.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 sm:p-6 flex flex-col h-full">
              <header className="mb-3">
                <h3 className="text-lg font-semibold text-slate-900">
                  Servicetechniker für Haushaltsgeräte
                </h3>
                <p className="text-xs sm:text-sm text-solar-primary mt-1">Österreichweit</p>
              </header>
              <p className="text-sm text-slate-600 mb-3">
                Reparatur und Wartung von Waschmaschinen, Geschirrspülern, Kühlschränken und weiteren
                Haushaltsgeräten.
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-slate-900 mb-1">Anforderungen</h4>
                <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                  <li>Erfahrung im technischen Bereich</li>
                  <li>Freundlicher Umgang mit Kunden</li>
                  <li>Führerschein Klasse B</li>
                  <li>Selbstständige Arbeitsweise</li>
                </ul>
              </div>
              <div className="mt-auto">
                <button className="inline-flex items-center justify-center rounded-xl bg-solar-primary px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-solar-dark transition">
                  Jetzt bewerben
                </button>
              </div>
            </article>

            <article className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 sm:p-6 flex flex-col h-full">
              <header className="mb-3">
                <h3 className="text-lg font-semibold text-slate-900">
                  Kundendienst Mitarbeiter
                </h3>
                <p className="text-xs sm:text-sm text-solar-primary mt-1">Remote / Büro</p>
              </header>
              <p className="text-sm text-slate-600 mb-3">
                Annahme von Kundenanfragen, Terminplanung und Unterstützung des Serviceteams.
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-slate-900 mb-1">Anforderungen</h4>
                <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                  <li>Gute Kommunikationsfähigkeiten</li>
                  <li>Organisationstalent</li>
                  <li>Deutschkenntnisse</li>
                </ul>
              </div>
              <div className="mt-auto">
                <button className="inline-flex items-center justify-center rounded-xl bg-solar-primary px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-solar-dark transition">
                  Jetzt bewerben
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Bewerbungsformular */}
      <section id="karriere-form" className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Bewerbungsformular</h2>
            <p className="text-sm sm:text-base text-slate-600 mb-6">
              Füllen Sie das Formular aus und wir melden uns so schnell wie möglich bei Ihnen.
            </p>

            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="vorname">
                    Vorname
                  </label>
                  <input
                    id="vorname"
                    name="vorname"
                    type="text"
                    className="block w-full rounded-xl border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-solar-primary focus:ring-2 focus:ring-solar-primary/20 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="nachname">
                    Nachname
                  </label>
                  <input
                    id="nachname"
                    name="nachname"
                    type="text"
                    className="block w-full rounded-xl border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-solar-primary focus:ring-2 focus:ring-solar-primary/20 outline-none"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-medium text-slate-700 mb-1"
                    htmlFor="telefonnummer"
                  >
                    Telefonnummer
                  </label>
                  <input
                    id="telefonnummer"
                    name="telefonnummer"
                    type="tel"
                    className="block w-full rounded-xl border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-solar-primary focus:ring-2 focus:ring-solar-primary/20 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="email">
                    E-Mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="block w-full rounded-xl border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-solar-primary focus:ring-2 focus:ring-solar-primary/20 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="position">
                  Position auswählen
                </label>
                <select
                  id="position"
                  name="position"
                  className="block w-full rounded-xl border border-slate-200 px-3 py-2 text-sm shadow-sm bg-white focus:border-solar-primary focus:ring-2 focus:ring-solar-primary/20 outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Bitte Position auswählen
                  </option>
                  <option value="servicetechniker">
                    Servicetechniker für Haushaltsgeräte
                  </option>
                  <option value="kundendienst">
                    Kundendienst Mitarbeiter
                  </option>
                  <option value="sonstiges">Sonstige Position / Initiativbewerbung</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="nachricht">
                  Nachricht
                </label>
                <textarea
                  id="nachricht"
                  name="nachricht"
                  rows={4}
                  className="block w-full rounded-xl border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-solar-primary focus:ring-2 focus:ring-solar-primary/20 outline-none resize-none"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-solar-primary px-7 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-solar-dark transition"
                >
                  Bewerbung senden
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

