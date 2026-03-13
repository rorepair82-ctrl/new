import { buildPageMetadata } from '@/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Datenschutz',
  description:
    'Datenschutzerklärung für die Verarbeitung personenbezogener Daten nach DSGVO auf dieser Website.',
  path: '/datenschutz',
})

export default function DatenschutzPage() {
  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-white min-h-screen">
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <header className="mb-8 sm:mb-10 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3">
              Datenschutzerklärung
            </h1>
            <p className="text-sm sm:text-base text-slate-600">
              Informationen zur Verarbeitung personenbezogener Daten nach DSGVO
            </p>
          </header>

          <div className="space-y-6 sm:space-y-7">
            {/* Einleitung */}
            <section className="bg-white/90 rounded-2xl border border-slate-100 shadow-sm px-5 py-5 sm:px-7 sm:py-6">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">
                Datenschutzerklärung
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir behandeln Ihre
                personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
                Datenschutzvorschriften (DSGVO) sowie dieser Datenschutzerklärung.
              </p>
            </section>

            {/* Allgemeine Hinweise */}
            <section className="bg-white/90 rounded-2xl border border-slate-100 shadow-sm px-5 py-5 sm:px-7 sm:py-6">
              <div className="flex items-start gap-3 mb-2">
                <div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-solar-primary/10 text-xs font-semibold text-solar-primary">
                  1
                </div>
                <h2 className="text-lg sm:text-xl font-semibold text-slate-900">Allgemeine Hinweise</h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Diese Datenschutzerklärung informiert Sie darüber, welche Daten wir erheben, wie wir
                sie verwenden und welche Rechte Sie als betroffene Person haben.
              </p>
            </section>

            {/* Verantwortlicher */}
            <section className="bg-white/90 rounded-2xl border border-slate-100 shadow-sm px-5 py-5 sm:px-7 sm:py-6">
              <div className="flex items-start gap-3 mb-2">
                <div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-solar-primary/10 text-xs font-semibold text-solar-primary">
                  2
                </div>
                <h2 className="text-lg sm:text-xl font-semibold text-slate-900">Verantwortlicher</h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-700">
                <strong>GeräteProfi Kundendienst</strong>
                <br />
                Telefon: +43 660 158 3077
                <br />
                E-Mail: office@kundendienstgeraete.at
              </p>
            </section>

           
            {/* Zwecke der Verarbeitung */}
            <section className="bg-white/90 rounded-2xl border border-slate-100 shadow-sm px-5 py-5 sm:px-7 sm:py-6">
              <div className="flex items-start gap-3 mb-2">
                <div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-solar-primary/10 text-xs font-semibold text-solar-primary">
                  3
                </div>
                <h2 className="text-lg sm:text-xl font-semibold text-slate-900">Zwecke der Verarbeitung</h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Ihre Daten werden ausschließlich zu folgenden Zwecken verarbeitet:
              </p>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-sm sm:text-base leading-relaxed text-slate-700">
                <li>Kontaktaufnahme zur Beantwortung Ihrer Anfrage</li>
                <li>Terminvereinbarung und Einsatzplanung</li>
                <li>Durchführung vorvertraglicher Maßnahmen und Erfüllung von Verträgen</li>
                <li>Erfüllung gesetzlicher Aufbewahrungspflichten</li>
              </ul>
            </section>

            {/* Vermittlung an Partnerbetriebe */}
            <section className="bg-white/90 rounded-2xl border border-slate-100 shadow-sm px-5 py-5 sm:px-7 sm:py-6">
              <div className="flex items-start gap-3 mb-2">
                <div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-solar-primary/10 text-xs font-semibold text-solar-primary">
                  4
                </div>
                <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                  Vermittlung an Partnerbetriebe
                </h2>
              </div>
              <div className="space-y-2 text-sm sm:text-base leading-relaxed text-slate-700">
                <p>
                  Zur Bearbeitung Ihrer Anfrage kann es erforderlich sein, Ihre Angaben an einen
                  regionalen und befugten Partnerbetrieb weiterzuleiten. Die Weitergabe erfolgt
                  ausschließlich zum Zweck der Bearbeitung Ihrer Anfrage sowie der Durchführung der
                  angefragten Dienstleistung.
                </p>
                <p>
                  Dabei werden nur die für die Vermittlung notwendigen Daten übermittelt, insbesondere
                  Name, Telefonnummer, Adresse sowie eine kurze Beschreibung des Anliegens.
                </p>
                <p>
                  Unser Unternehmen ist ausschließlich als Vermittlungsservice tätig und vermittelt Werk-
                  und Dienstleistungsverträge an befugte Partnerbetriebe. Eine Ausführung der Leistungen im
                  eigenen Namen oder auf eigene Rechnung erfolgt nicht.
                </p>
                <p>
                  Der Vertrag über die Durchführung der Arbeiten kommt ausschließlich zwischen dem
                  Auftraggeber und dem ausführenden Partnerbetrieb zustande.
                </p>
              </div>
            </section>

            {/* Kontaktformular */}
            <section className="bg-white/90 rounded-2xl border border-slate-100 shadow-sm px-5 py-5 sm:px-7 sm:py-6">
              <div className="flex items-start gap-3 mb-2">
                <div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-solar-primary/10 text-xs font-semibold text-solar-primary">
                  5
                </div>
                <h2 className="text-lg sm:text-xl font-semibold text-slate-900">Kontaktformular</h2>
              </div>
              <div className="space-y-2 text-sm sm:text-base leading-relaxed text-slate-700">
                <p>
                  Wenn Sie uns über das Kontaktformular eine Anfrage senden, werden Ihre Angaben inklusive
                  der von Ihnen angegebenen Kontaktdaten bei uns gespeichert, um die Anfrage zu bearbeiten
                  und für den Fall von Anschlussfragen.
                </p>
                <p>
                  Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. b DSGVO zur Durchführung
                  vorvertraglicher Maßnahmen.
                </p>
              </div>
            </section>

            {/* Telefonische Kontaktaufnahme */}
            <section className="bg-white/90 rounded-2xl border border-slate-100 shadow-sm px-5 py-5 sm:px-7 sm:py-6">
              <div className="flex items-start gap-3 mb-2">
                <div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-solar-primary/10 text-xs font-semibold text-solar-primary">
                  6
                </div>
                <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                  Telefonische Kontaktaufnahme
                </h2>
              </div>
              <div className="space-y-2 text-sm sm:text-base leading-relaxed text-slate-700">
                <p>
                  Wenn Sie uns telefonisch kontaktieren, können Ihre Angaben zum Zweck der Bearbeitung
                  Ihrer Anfrage sowie für eventuelle Rückfragen gespeichert werden.
                </p>
                <p>
                  Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO sowie Art. 6 Abs.
                  1 lit. f DSGVO (berechtigtes Interesse an einer effizienten Kundenkommunikation).
                </p>
              </div>
            </section>

            {/* Weitergabe von Daten an Dienstleister */}
            <section className="bg-white/90 rounded-2xl border border-slate-100 shadow-sm px-5 py-5 sm:px-7 sm:py-6">
              <div className="flex items-start gap-3 mb-2">
                <div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-solar-primary/10 text-xs font-semibold text-solar-primary">
                  7
                </div>
                <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                  Weitergabe von Daten an Dienstleister
                </h2>
              </div>
              <div className="space-y-2 text-sm sm:text-base leading-relaxed text-slate-700">
                <p>
                  Zur Bereitstellung und zum Betrieb dieser Website kann es erforderlich sein, dass
                  personenbezogene Daten an technische Dienstleister (z. B. Hosting-Provider oder
                  IT-Dienstleister) übermittelt werden.
                </p>
                <p>
                  Diese Dienstleister verarbeiten personenbezogene Daten ausschließlich im Rahmen einer
                  Auftragsverarbeitung gemäß Art. 28 DSGVO und nur nach unseren Weisungen.
                </p>
              </div>
            </section>

            {/* Speicherdauer */}
            <section className="bg-white/90 rounded-2xl border border-slate-100 shadow-sm px-5 py-5 sm:px-7 sm:py-6">
              <div className="flex items-start gap-3 mb-2">
                <div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-solar-primary/10 text-xs font-semibold text-solar-primary">
                  8
                </div>
                <h2 className="text-lg sm:text-xl font-semibold text-slate-900">Speicherdauer</h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Wir speichern personenbezogene Daten nur so lange, wie dies für die Bearbeitung Ihrer
                Anfrage, die Durchführung eines Auftrags oder zur Einhaltung gesetzlicher
                Aufbewahrungsfristen erforderlich ist.
              </p>
            </section>

            {/* Ihre Rechte */}
            <section className="bg-white/90 rounded-2xl border border-slate-100 shadow-sm px-5 py-5 sm:px-7 sm:py-6">
              <div className="flex items-start gap-3 mb-2">
                <div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-solar-primary/10 text-xs font-semibold text-solar-primary">
                  9
                </div>
                <h2 className="text-lg sm:text-xl font-semibold text-slate-900">Ihre Rechte</h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:
              </p>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-sm sm:text-base leading-relaxed text-slate-700">
                <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten</li>
                <li>Berichtigung unrichtiger Daten</li>
                <li>Löschung Ihrer Daten, soweit keine gesetzlichen Pflichten entgegenstehen</li>
                <li>Einschränkung der Verarbeitung</li>
                <li>Widerspruch gegen die Verarbeitung</li>
                <li>Datenübertragbarkeit gemäß Art. 20 DSGVO</li>
              </ul>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-700">
                Zur Ausübung dieser Rechte können Sie sich jederzeit an uns wenden.
              </p>
            </section>

            {/* Widerruf von Einwilligungen */}
            <section className="bg-white/90 rounded-2xl border border-slate-100 shadow-sm px-5 py-5 sm:px-7 sm:py-6">
              <div className="flex items-start gap-3 mb-2">
                <div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-solar-primary/10 text-xs font-semibold text-solar-primary">
                  10
                </div>
                <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                  Widerruf von Einwilligungen
                </h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Eine bereits erteilte Einwilligung zur Verarbeitung personenbezogener Daten können Sie
                jederzeit mit Wirkung für die Zukunft widerrufen. Hierzu genügt eine formlose
                Mitteilung per E-Mail an uns.
              </p>
            </section>

            {/* Beschwerderecht bei der Aufsichtsbehörde */}
            <section className="bg-white/90 rounded-2xl border border-slate-100 shadow-sm px-5 py-5 sm:px-7 sm:py-6">
              <div className="flex items-start gap-3 mb-2">
                <div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-solar-primary/10 text-xs font-semibold text-solar-primary">
                  11
                </div>
                <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                  Beschwerderecht bei der Aufsichtsbehörde
                </h2>
              </div>
              <div className="space-y-2 text-sm sm:text-base leading-relaxed text-slate-700">
                <p>
                  Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen
                  Datenschutzrecht verstößt, können Sie sich bei der zuständigen Aufsichtsbehörde
                  beschweren.
                </p>
                <p>Zuständige Behörde in Österreich ist:</p>
                <p>
                  Österreichische Datenschutzbehörde
                  <br />
                  Barichgasse 40–42
                  <br />
                  1030 Wien
                  <br />
                  <a href="https://www.dsb.gv.at" target="_blank" rel="noreferrer">
                    www.dsb.gv.at
                  </a>
                </p>
              </div>
            </section>

            {/* SSL / TLS */}
            <section className="bg-white/90 rounded-2xl border border-slate-100 shadow-sm px-5 py-5 sm:px-7 sm:py-6">
              <div className="flex items-start gap-3 mb-2">
                <div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-solar-primary/10 text-xs font-semibold text-solar-primary">
                  12
                </div>
                <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                  SSL- bzw. TLS-Verschlüsselung
                </h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
                Inhalte eine SSL- bzw. TLS-Verschlüsselung.
              </p>
            </section>

            {/* Cookies */}
            <section className="bg-white/90 rounded-2xl border border-slate-100 shadow-sm px-5 py-5 sm:px-7 sm:py-6">
              <div className="flex items-start gap-3 mb-2">
                <div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-solar-primary/10 text-xs font-semibold text-solar-primary">
                  13
                </div>
                <h2 className="text-lg sm:text-xl font-semibold text-slate-900">Cookies</h2>
              </div>
              <div className="space-y-2 text-sm sm:text-base leading-relaxed text-slate-700">
                <p>
                  Unsere Website verwendet technisch notwendige Cookies, um grundlegende Funktionen der
                  Website bereitzustellen.
                </p>
                <p>
                  Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und die Ihr
                  Browser speichert.
                </p>
                <p>
                  Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert
                  werden oder Cookies nur im Einzelfall erlauben.
                </p>
              </div>
            </section>

            {/* Server-Logfiles & Hosting */}
            <section className="bg-white/90 rounded-2xl border border-slate-100 shadow-sm px-5 py-5 sm:px-7 sm:py-6">
              <div className="flex items-start gap-3 mb-2">
                <div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-solar-primary/10 text-xs font-semibold text-solar-primary">
                  14
                </div>
                <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                  Server-Logfiles &amp; Hosting
                </h2>
              </div>
              <div className="space-y-2 text-sm sm:text-base leading-relaxed text-slate-700">
                <p>
                  Beim Aufruf unserer Website werden durch den Hosting-Provider automatisch sogenannte
                  Server-Logfiles erhoben.
                </p>
                <p>Dabei können insbesondere folgende Daten erfasst werden:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>IP-Adresse</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>aufgerufene Seiten</li>
                  <li>Browsertyp und Browserversion</li>
                  <li>Betriebssystem</li>
                  <li>Referrer-URL</li>
                </ul>
                <p>Diese Daten dienen ausschließlich der technischen Sicherheit und Stabilität der Website.</p>
              </div>
            </section>

            {/* Datensicherheit */}
            <section className="bg-white/90 rounded-2xl border border-slate-100 shadow-sm px-5 py-5 sm:px-7 sm:py-6">
              <div className="flex items-start gap-3 mb-2">
                <div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-solar-primary/10 text-xs font-semibold text-solar-primary">
                  15
                </div>
                <h2 className="text-lg sm:text-xl font-semibold text-slate-900">Datensicherheit</h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Wir setzen geeignete technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre
                Daten vor Verlust, Missbrauch oder unbefugtem Zugriff zu schützen.
              </p>
            </section>

            {/* Aktualität */}
            <section className="bg-white/90 rounded-2xl border border-slate-100 shadow-sm px-5 py-5 sm:px-7 sm:py-6">
              <div className="flex items-start gap-3 mb-2">
                <div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-solar-primary/10 text-xs font-semibold text-solar-primary">
                  16
                </div>
                <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                  Aktualität dieser Datenschutzerklärung
                </h2>
              </div>
              <div className="space-y-2 text-sm sm:text-base leading-relaxed text-slate-700">
                <p>Diese Datenschutzerklärung hat den Stand: [Monat Jahr].</p>
                <p>
                  Wir behalten uns vor, diese Datenschutzerklärung zu aktualisieren, wenn dies aufgrund
                  rechtlicher oder technischer Änderungen erforderlich ist.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}

