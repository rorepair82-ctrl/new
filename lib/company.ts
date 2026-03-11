/**
 * Musterdaten / zentrale Firmen- und Kontaktdaten
 * Hier anpassen – wird überall auf der Seite verwendet.
 */
export const company = {
  /** Firmenname (z. B. für Impressum, Footer, AGB) */
  name: 'Kundendienstgeraete',
  /** Straße und Hausnummer */
  street: 'Musterstraße 1',
  /** PLZ und Ort */
  city: '1010 Wien',
  /** Land */
  country: 'Österreich',
  /** Vollständige Adresse (eine Zeile) */
  get fullAddress(): string {
    return `${this.street}, ${this.city}, ${this.country}`
  },
  /** Adresse für Karten (ohne Land) */
  get addressShort(): string {
    return `${this.street}, ${this.city}`
  },
  /** Telefon (Anzeige) */
  phone: '+43 660 657 7900',
  /** Telefon für tel:-Link (ohne Leerzeichen) */
  phoneRaw: '+436601583077',
  /** E-Mail */
  email: 'office@kundendienstgeraete.at',
  /** UID-Nummer (Österreich) */
  uid: 'ATU12345678',
  /** Website-URL (für Canonical, Open Graph, Sitemap) – in Produktion anpassen */
  websiteUrl: 'https://www.musterfirma.at',
  /** Google Maps: Adresse für Embed und Route */
  get mapsQuery(): string {
    return encodeURIComponent(`${this.street}, ${this.city}, Austria`)
  },
  get mapsDirectionUrl(): string {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(this.street + ', ' + this.city)}`
  },
}
