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
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <header className="mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3">
            Datenschutz
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Datenschutzerklärung nach DSGVO
          </p>
        </header>

        <article className="bg-white rounded-2xl shadow-md border border-slate-100 p-5 sm:p-7 md:p-8 prose prose-slate max-w-none text-sm sm:text-base">
          <h2>Datenschutzerklärung</h2>
          <p>
            Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir behandeln Ihre
            personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
            Datenschutzvorschriften (DSGVO) sowie dieser Datenschutzerklärung.
          </p>

          <h3>1. Allgemeine Hinweise</h3>
          <p>
            Diese Datenschutzerklärung informiert Sie darüber, welche Daten wir erheben, wie wir
            sie verwenden und welche Rechte Sie als betroffene Person haben.
          </p>

          <h3>2. Verantwortlicher</h3>
          <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
          <p>
            <strong>GeräteProfi Kundendienst</strong>
            <br />
            Telefon: +43 660 158 3077
            <br />
            E-Mail: office@kundendienstgeraete.at
          </p>

          <h3>3. Datenerhebung</h3>
          <p>
            Wir erheben personenbezogene Daten grundsätzlich nur, wenn Sie uns diese freiwillig
            mitteilen, zum Beispiel im Rahmen einer Reparaturanfrage, per E-Mail, telefonisch oder
            über unser Kontaktformular.
          </p>
          <p>Typische verarbeitete Daten sind insbesondere:</p>
          <ul>
            <li>Kontaktdaten (Name, Adresse, Telefon, E-Mail)</li>
            <li>Angaben zum Gerät (Typ, Marke, Modell)</li>
            <li>Fehlerbeschreibung und sonstige Angaben zur Anfrage</li>
            <li>ggf. hochgeladene Dateien (z. B. Fotos vom Typenschild)</li>
          </ul>

          <h3>4. Zwecke der Verarbeitung</h3>
          <p>Ihre Daten werden ausschließlich zu folgenden Zwecken verarbeitet:</p>
          <ul>
            <li>Kontaktaufnahme zur Beantwortung Ihrer Anfrage</li>
            <li>Terminvereinbarung und Einsatzplanung für Reparaturen</li>
            <li>Durchführung vorvertraglicher Maßnahmen und Erfüllung von Verträgen</li>
            <li>Erfüllung gesetzlicher Aufbewahrungspflichten</li>
          </ul>
          <p>
            Eine Weitergabe Ihrer Daten an Dritte erfolgt nur, soweit dies zur Vertragserfüllung
            erforderlich ist (z. B. an eingesetzte Techniker) oder wir hierzu gesetzlich
            verpflichtet sind.
          </p>

          <h3>5. Speicherdauer</h3>
          <p>
            Wir speichern personenbezogene Daten nur so lange, wie dies für die Bearbeitung Ihrer
            Anfrage, die Durchführung des Auftrags oder zur Einhaltung gesetzlicher
            Aufbewahrungsfristen erforderlich ist. Danach werden die Daten gelöscht oder
            anonymisiert.
          </p>

          <h3>6. Kontaktformular</h3>
          <p>
            Wenn Sie uns über das Kontaktformular eine Anfrage senden, werden Ihre Angaben
            inklusive der von Ihnen angegebenen Kontaktdaten bei uns gespeichert, um die Anfrage zu
            bearbeiten und für den Fall von Anschlussfragen.
          </p>
          <p>
            Diese Daten geben wir nicht ohne Ihre Einwilligung an Dritte weiter, soweit dies nicht
            zur Abwicklung des Auftrags erforderlich ist.
          </p>

          <h3>7. Ihre Rechte</h3>
          <p>
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:
          </p>
          <ul>
            <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten</li>
            <li>Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten</li>
            <li>Löschung Ihrer Daten, soweit keine gesetzlichen Pflichten entgegenstehen</li>
            <li>Einschränkung der Verarbeitung</li>
            <li>Widerspruch gegen die Verarbeitung</li>
            <li>Datenübertragbarkeit gemäß Art. 20 DSGVO</li>
          </ul>
          <p>
            Zur Ausübung dieser Rechte sowie zu weiteren Fragen zum Thema Datenschutz können Sie
            sich jederzeit an uns wenden.
          </p>

          <h3>8. Widerruf von Einwilligungen</h3>
          <p>
            Eine bereits erteilte Einwilligung in die Verarbeitung Ihrer personenbezogenen Daten
            können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Senden Sie uns hierzu
            einfach eine formlose E-Mail an <strong>office@kundendienstgeraete.at</strong>.
          </p>

          <h3>9. Beschwerderecht bei der Aufsichtsbehörde</h3>
          <p>
            Im Falle datenschutzrechtlicher Verstöße steht Ihnen ein Beschwerderecht bei der
            zuständigen Aufsichtsbehörde zu. In Österreich ist dies in der Regel die Österreichische
            Datenschutzbehörde.
          </p>

          <h3>10. SSL-/TLS-Verschlüsselung</h3>
          <p>
            Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
            Inhalte, wie zum Beispiel Anfragen über das Kontaktformular, eine SSL- bzw.
            TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die
            Adresszeile Ihres Browsers von &quot;http://&quot; auf &quot;https://&quot; wechselt
            und an dem Schloss-Symbol in der Browserzeile.
          </p>

          <h3>11. Cookies</h3>
          <p>
            Unsere Website verwendet nur technisch notwendige Cookies, um die Darstellung und
            grundlegende Funktionen (z. B. Sprachauswahl, Session) sicherzustellen. Diese Cookies
            enthalten keine personenbezogenen Profile und werden in der Regel mit Schließen des
            Browsers oder nach kurzer Zeit automatisch gelöscht.
          </p>
          <p>
            Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem
            sicheren und funktionsfähigen Betrieb der Website). Analytische oder Marketing-Cookies
            werden derzeit nicht eingesetzt. Sollte sich dies in Zukunft ändern, holen wir vorab
            Ihre Einwilligung über einen Cookie-Hinweis ein.
          </p>

          <h3>12. Server-Logfiles &amp; Hosting</h3>
          <p>
            Beim Aufruf unserer Website werden durch den Hosting-Provider automatisch sogenannte
            Server-Logfiles erhoben. Dabei kann es sich insbesondere um folgende Daten handeln:
          </p>
          <ul>
            <li>IP-Adresse des anfragenden Geräts</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>aufgerufene Seiten/Dateien</li>
            <li>übertragene Datenmenge</li>
            <li>Meldung über erfolgreichen Abruf (HTTP-Statuscode)</li>
            <li>Browsertyp, Browserversion und Betriebssystem</li>
            <li>Referrer-URL (zuvor besuchte Seite)</li>
          </ul>
          <p>
            Diese Daten sind technisch erforderlich, um die Website stabil und sicher
            bereitzustellen, und werden ausschließlich zu diesem Zweck ausgewertet. Logfiles werden
            in der Regel nach kurzer Zeit automatisch gelöscht, sofern keine längere Aufbewahrung zu
            Beweiszwecken (z. B. bei Sicherheitsvorfällen) erforderlich ist. Rechtsgrundlage ist
            Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der sicheren Bereitstellung der
            Website).
          </p>

          <h3>13. Zahlungsabwicklung</h3>
          <p>
            Erfolgt die Bezahlung unserer Leistungen elektronisch (z. B. Kartenzahlung beim
            Techniker oder per Überweisung), werden die hierfür erforderlichen Zahlungsdaten
            ausschließlich zum Zweck der Zahlungsabwicklung verarbeitet und, soweit nötig, an das
            jeweils beteiligte Zahlungsinstitut weitergegeben.
          </p>
          <p>
            Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) sowie Art. 6
            Abs. 1 lit. c DSGVO (gesetzliche Aufbewahrungspflichten, insbesondere steuer- und
            abgabenrechtliche Vorschriften).
          </p>

          <h3>14. Datensicherheit &amp; Änderungen dieser Erklärung</h3>
          <p>
            Wir setzen geeignete technische und organisatorische Maßnahmen ein, um Ihre
            personenbezogenen Daten vor Verlust, Missbrauch, unbefugtem Zugriff und sonstigen
            Risiken zu schützen. Diese Maßnahmen werden regelmäßig überprüft und dem Stand der
            Technik angepasst.
          </p>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung zu aktualisieren, wenn dies aufgrund
            rechtlicher Vorgaben oder technischer Entwicklungen erforderlich ist. Es gilt jeweils
            die auf dieser Website veröffentlichte aktuelle Fassung.
          </p>
        </article>
      </section>
    </main>
  )
}

