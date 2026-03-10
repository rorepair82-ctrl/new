 'use client'

import Link from 'next/link'
import { company } from '@/lib/company'

export default function Footer() {
  const isEnglish = false
  const localePrefix = ''

  return (
    <footer className="bg-slate-100 border-t border-slate-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo */}
          <div>
            <Link href={localePrefix || '/'} className="block mb-6">
              <div
                className="w-full"
                style={{ minHeight: '100px', display: 'flex', alignItems: 'flex-start' }}
              >
                <img
                  src="/Kundendiensthaushaltsgeraete.png"
                  alt={company.name}
                  className="w-full h-auto max-w-full object-contain"
                  style={{ minHeight: '100px' }}
                />
              </div>
            </Link>
          </div>

          {/* Navigation / Rechtliches */}
          <div>
            <h4 className="font-bold mb-4 text-slate-800 text-sm uppercase tracking-wide">
              Rechtliches
            </h4>
            <ul className="space-y-2.5 text-gray-600 text-sm">
              <li>
                <Link href={`${localePrefix}/datenschutz`} className="hover:text-solar-primary transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href={`${localePrefix}/datenschutz`} className="hover:text-solar-primary transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt (ohne Adresse) */}
          <div>
            <h4 className="font-bold mb-4 text-slate-800 text-sm uppercase tracking-wide">
              Erreichen Sie uns
            </h4>
            <div className="space-y-2.5 text-gray-600 text-sm">
              <div className="flex items-center">
                <svg className="w-4 h-4 text-solar-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${company.phoneRaw}`} className="hover:text-solar-primary transition-colors">
                  {company.phone}
                </a>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-solar-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${company.email}`} className="hover:text-solar-primary transition-colors break-all">
                  {company.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-4 pb-2">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
              <p>
              &copy; {new Date().getFullYear()} {company.name}. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link href="/datenschutz" className="text-gray-500 hover:text-solar-primary transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
