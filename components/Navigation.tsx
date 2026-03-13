'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { company } from '@/lib/company'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const isEnglish = false
  const basePath = pathname || '/'
  const localePrefix = ''

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleCallClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
      ;(window as any).gtag_report_conversion(`tel:${company.phoneRaw}`)
    }
  }

  const services = [
    {
      name: isEnglish ? 'Washing machine repair' : 'Waschmaschinen-Reparatur',
      href: `${localePrefix}/waschmaschinen-reparatur`,
    },
    {
      name: isEnglish ? 'Dishwasher repair' : 'Geschirrspüler-Reparatur',
      href: `${localePrefix}/geschirrspueler-reparatur`,
    },
    {
      name: isEnglish ? 'Fridge repair' : 'Kühlschrank-Reparatur',
      href: `${localePrefix}/kuehlschrank-reparatur`,
    },
    {
      name: isEnglish ? 'Oven repair' : 'Backofen-Reparatur',
      href: `${localePrefix}/backofen-reparatur`,
    },
    {
      name: isEnglish ? 'Electric cooker repair' : 'Elektroherd-Reparatur',
      href: `${localePrefix}/elektroherd-reparatur`,
    },
    {
      name: isEnglish ? 'Microwave repair' : 'Mikrowellen-Reparatur',
      href: `${localePrefix}/mikrowellen-reparatur`,
    },
    {
      name: isEnglish ? 'Dryer repair' : 'Trockner-Reparatur',
      href: `${localePrefix}/trockner-reparatur`,
    },
    {
      name: isEnglish ? 'Dispose old appliances' : 'Altgeräte entsorgen',
      href: `${localePrefix}/altgeraete-entsorgen`,
    },
  ]

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-shadow ${
        scrolled ? 'bg-white shadow-md border-slate-200' : 'bg-white/95 shadow-sm border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href={localePrefix || '/'} className="flex items-center group">
              <img
                src="/Kundendiensthaushaltsgeraete.png"
                alt={company.name}
                className="h-10 w-auto transition-transform group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Home */}
            <Link
              href="/"
              className="text-sm text-gray-700 hover:text-solar-primary transition-colors font-normal px-2 py-2"
            >
              Startseite
            </Link>
            {/* Dienstleistungen Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setOpenDropdown('angebote')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="text-sm text-gray-700 hover:text-solar-primary transition-colors font-normal px-2 py-2 flex items-center">
                Dienstleistungen
                <svg className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'angebote' && (
                <div 
                  className="absolute top-full left-0 pt-2 w-56 z-50"
                  onMouseEnter={() => setOpenDropdown('angebote')}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="bg-white shadow-xl border border-gray-100 py-2 rounded-md">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        onClick={() => setOpenDropdown(null)}
                        className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-solar-primary transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Über Uns / About */}
            <Link
              href="/ueber-uns"
              className="text-sm text-gray-700 hover:text-solar-primary transition-colors font-normal px-2 py-2"
            >
              Über Uns
            </Link>
            {/* Karriere */}
            <Link
              href="/karriere"
              className="text-sm text-gray-700 hover:text-solar-primary transition-colors font-normal px-2 py-2"
            >
              Karriere
            </Link>
            {/* Feedback */}
            <Link
              href="/feedback"
              className="text-sm text-gray-700 hover:text-solar-primary transition-colors font-normal px-2 py-2"
            >
              Feedback
            </Link>

            {/* Kontakt / Contact */}
            <Link 
              href="/kontakt" 
              className="text-sm font-semibold text-gray-900 px-2 py-2 relative group"
            >
              <span className="relative z-10 transition-colors group-hover:text-solar-primary">
                Kontakt
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-solar-primary transition-all duration-500 ease-out group-hover:w-full"></span>
            </Link>

            {/* Call Button */}
            <a
              href={`tel:${company.phoneRaw}`}
              onClick={handleCallClick}
              className="ml-3 inline-flex items-center rounded-xl bg-solar-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-solar-dark transition-colors"
            >
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.5 4.5a1 1 0 01-.502 1.21l-1.7.85a11.042 11.042 0 005.516 5.516l.85-1.7a1 1 0 011.21-.502l4.5 1.5A1 1 0 0121 19.72V22a2 2 0 01-2 2h-1C9.82 24 3 17.18 3 9V7a2 2 0 012-2z"
                />
              </svg>
              <span className="whitespace-nowrap">Schnellanfrage</span>
            </a>

            {/* Language switch removed */}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-solar-primary focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <Link
              href="/"
              onClick={() => {
                setIsOpen(false)
                setOpenDropdown(null)
              }}
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Startseite
            </Link>
            <div>
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === 'mobile-angebote' ? null : 'mobile-angebote')
                }
                className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                Dienstleistungen
                <svg
                  className={`w-4 h-4 transition-transform ${
                    openDropdown === 'mobile-angebote' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'mobile-angebote' && (
                <div className="pl-4 space-y-1">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      onClick={() => {
                        setIsOpen(false)
                        setOpenDropdown(null)
                      }}
                      className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/ueber-uns"
              onClick={() => {
                setIsOpen(false)
                setOpenDropdown(null)
              }}
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Über Uns
            </Link>
            <Link
              href="/karriere"
              onClick={() => {
                setIsOpen(false)
                setOpenDropdown(null)
              }}
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Karriere
            </Link>
            <Link
              href="/feedback"
              onClick={() => {
                setIsOpen(false)
                setOpenDropdown(null)
              }}
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Feedback
            </Link>
            <Link
              href="/kontakt"
              onClick={() => {
                setIsOpen(false)
                setOpenDropdown(null)
              }}
              className="block px-3 py-2 font-semibold text-gray-900 hover:bg-gray-100 rounded"
            >
              Kontakt
            </Link>
            <a
              href={`tel:${company.phoneRaw}`}
              onClick={handleCallClick}
              className="block px-3 py-2 mt-1 text-sm font-semibold text-white bg-solar-primary hover:bg-solar-dark rounded text-center"
            >
              {company.phone}
            </a>
            {/* Language switch mobile removed */}
          </div>
        </div>
      )}
    </nav>
  )
}
