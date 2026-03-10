'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Prüfe, ob bereits eine Cookie-Auswahl getroffen wurde
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      // Zeige das Banner sofort beim ersten Besuch
      setShowBanner(true)
      // Kurzer Delay für Animation
      setTimeout(() => {
        setIsVisible(true)
      }, 100)
    }
  }, [])

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary')
    setIsVisible(false)
    setTimeout(() => {
      setShowBanner(false)
    }, 300)
  }

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all')
    setIsVisible(false)
    setTimeout(() => {
      setShowBanner(false)
    }, 300)
  }

  if (!showBanner) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleAcceptNecessary}
      />
      
      {/* Cookie Banner */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 md:p-6 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}>
        <div className="max-w-5xl mx-auto bg-white rounded-xl sm:rounded-2xl shadow-2xl border border-gray-200 p-4 sm:p-5 md:p-6 transform transition-all">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-6">
            <div className="flex-1 min-w-0">
              <div className="flex items-start gap-3 mb-2">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-solar-primary to-solar-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1.5">Cookie-Hinweis</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Wir nutzen Cookies für Ihre komfortable Nutzung. Hier können Sie Ihre Einstellungen wählen.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:ml-4 lg:flex-shrink-0">
              <button
                onClick={handleAcceptAll}
                className="px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-solar-primary to-solar-secondary text-white text-xs sm:text-sm font-semibold rounded-lg hover:from-solar-dark hover:to-solar-primary transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap"
              >
                Alle Cookies annehmen
              </button>
              <button
                onClick={handleAcceptNecessary}
                className="px-4 sm:px-5 py-2 sm:py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-900 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
              >
                Nur notwendige Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
