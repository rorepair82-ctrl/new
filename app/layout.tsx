import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import React from 'react'
import Script from 'next/script'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { company } from '@/lib/company'
import { baseUrl, defaultOgImage } from '@/lib/seo'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' })

const siteTitle = `${company.name} - Reparatur & Service Haushaltsgeräte`
const siteDescription = 'Professionelle Reparatur, Wartung und Installation von Haushaltsgeräten: Waschmaschine, Kühlschrank, Herd, Geschirrspüler. Ihr zuverlässiger Partner in Österreich.'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteTitle,
    template: `%s | ${company.name}`,
  },
  description: siteDescription,
  keywords: [
    'Haushaltsgeräte Reparatur',
    'Waschmaschine reparieren',
    'Kühlschrank Reparatur',
    'Herd Service',
    'Geschirrspüler Wartung',
    'Reparaturdienst Österreich',
    'Wien',
  ],
  authors: [{ name: company.name, url: baseUrl }],
  creator: company.name,
  publisher: company.name,
  formatDetection: { email: false, telephone: false },
  icons: { icon: '/Kundendiensthaushaltsgeraetefavicon.png' },
  openGraph: {
    type: 'website',
    locale: 'de_AT',
    url: baseUrl,
    siteName: company.name,
    title: siteTitle,
    description: siteDescription,
    images: [{ url: defaultOgImage, width: 1200, height: 630, alt: company.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: baseUrl },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: company.name,
      url: baseUrl,
      logo: { '@type': 'ImageObject', url: `${baseUrl}/Kundendiensthaushaltsgeraete.png` },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: company.phoneRaw,
        email: company.email,
        areaServed: 'AT',
        availableLanguage: 'German',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: company.street,
        addressLocality: company.city,
        addressCountry: company.country,
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${baseUrl}/#localbusiness`,
      name: company.name,
      image: `${baseUrl}/Kundendiensthaushaltsgeraete.png`,
      url: baseUrl,
      telephone: company.phone,
      email: company.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: company.street,
        addressLocality: company.city,
        addressCountry: company.country,
      },
      priceRange: '€€',
      openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" suppressHydrationWarning className={outfit.variable}>
      <body className="font-sans antialiased">
        {/* Google Ads global site tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17361716299"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17361716299');
          `}
        </Script>

        {/* Google Ads phone conversion helper */}
        <Script id="gtag-phone-conversion" strategy="afterInteractive">
          {`
            window.gtag_report_conversion = function(url) {
              var callback = function () {
                if (typeof url !== 'undefined') {
                  window.location = url;
                }
              };
              if (typeof window.gtag === 'function') {
                window.gtag('event', 'conversion', {
                  send_to: 'AW-17361716299/YP3WCOGDhIccEMUI29ZA',
                  value: 1.0,
                  currency: 'EUR',
                  event_callback: callback,
                });
              } else {
                callback();
              }
              return false;
            };
          `}
        </Script>

        {/* Google Ads form submission conversion helper */}
        <Script id="gtag-form-conversion" strategy="afterInteractive">
          {`
            window.gtag_report_form_conversion = function(url) {
              var callback = function () {
                if (typeof url !== 'undefined') {
                  window.location = url;
                }
              };
              if (typeof window.gtag === 'function') {
                window.gtag('event', 'conversion', {
                  send_to: 'AW-17361716299/eU_LCIFS_OYCEMUI29ZA',
                  value: 1.0,
                  currency: 'EUR',
                  event_callback: callback,
                });
              } else {
                callback();
              }
              return false;
            };
          `}
        </Script>

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navigation />
        <main className="min-h-screen" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
