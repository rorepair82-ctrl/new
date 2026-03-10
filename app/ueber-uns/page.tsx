export default function UberUns() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-solar-primary tracking-wide uppercase mb-3">
            Über uns
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Ihr Partner für Haushaltsgeräte-Reparaturen in Wien
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Seidner Dienstleistungen ist Ihr zuverlässiger Ansprechpartner für die Reparatur von
            Haushaltsgeräten aller Art. Mit langjähriger Erfahrung und fundiertem Fachwissen sorgen
            wir dafür, dass Ihre Geräte schnell wieder einsatzbereit sind.
          </p>
        </div>
      </section>

      {/* Mission & Werte */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[2fr,3fr] gap-10 lg:gap-16 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Unsere Mission</h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Wir möchten unseren Kunden einen schnellen, zuverlässigen und fairen Service bieten.
              Nachhaltigkeit ist uns wichtig – daher setzen wir auf Reparatur statt Neukauf.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
              <h3 className="font-semibold text-slate-900 mb-1.5">Fachkompetenz</h3>
              <p className="text-sm text-slate-600">
                Ausgebildete Mechatroniker mit Spezialisierung auf Haushaltsgeräte.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
              <h3 className="font-semibold text-slate-900 mb-1.5">Schneller Service</h3>
              <p className="text-sm text-slate-600">
                Termine innerhalb von 24–48 Stunden möglich.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
              <h3 className="font-semibold text-slate-900 mb-1.5">Garantie</h3>
              <p className="text-sm text-slate-600">
                12 Monate Garantie auf alle Reparaturen.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
              <h3 className="font-semibold text-slate-900 mb-1.5">Qualität</h3>
              <p className="text-sm text-slate-600">
                Nur Original-Ersatzteile oder hochwertige Alternativen.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
              <h3 className="font-semibold text-slate-900 mb-1.5">Kundenorientiert</h3>
              <p className="text-sm text-slate-600">
                Persönliche Beratung und transparente Kommunikation.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
              <h3 className="font-semibold text-slate-900 mb-1.5">Leidenschaft</h3>
              <p className="text-sm text-slate-600">
                Mit Herzblut bei der Arbeit für zufriedene Kunden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Einsatzgebiet */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-100 p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Unser Einsatzgebiet</h2>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            Wir sind österreichweit für Sie unterwegs – in Wien, Graz, Salzburg und allen anderen
            Regionen Österreichs.
          </p>
        </div>
      </section>
    </div>
  )
}
