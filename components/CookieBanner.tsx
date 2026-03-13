'use client'

import { useState, useEffect } from 'react'
import CookieSettingsModal from './CookieSettingsModal'

type CookiePreferences = {
  statistics: boolean
  marketing: boolean
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    statistics: false,
    marketing: false,
  })

  useEffect(() => {
    const storedConsent = localStorage.getItem('cookieConsent')
    const storedPrefs = localStorage.getItem('cookieConsentPreferences')

    if (storedPrefs) {
      try {
        const parsed = JSON.parse(storedPrefs) as CookiePreferences
        setPreferences({
          statistics: !!parsed.statistics,
          marketing: !!parsed.marketing,
        })
      } catch {
        // ignore parse errors and keep defaults
      }
    } else if (storedConsent === 'all') {
      setPreferences({ statistics: true, marketing: true })
    } else {
      setPreferences({ statistics: false, marketing: false })
    }

    if (!storedConsent) {
      setShowBanner(true)
      setTimeout(() => {
        setIsVisible(true)
      }, 100)
    }
  }, [])

  const closeBanner = () => {
    setIsVisible(false)
    setTimeout(() => {
      setShowBanner(false)
    }, 300)
  }

  const persistPreferences = (prefs: CookiePreferences, mode: 'all' | 'necessary' | 'custom') => {
    localStorage.setItem('cookieConsent', mode)
    localStorage.setItem('cookieConsentPreferences', JSON.stringify(prefs))

    const hasOptional = prefs.statistics || prefs.marketing

    if (typeof window !== 'undefined') {
      if (hasOptional && (window as any).acceptCookies) {
        ;(window as any).acceptCookies()
      } else if (!hasOptional && (window as any).rejectCookies) {
        ;(window as any).rejectCookies()
      }
    }
  }

  const handleAcceptNecessary = () => {
    const prefs: CookiePreferences = { statistics: false, marketing: false }
    setPreferences(prefs)
    persistPreferences(prefs, 'necessary')
    closeBanner()
  }

  const handleAcceptAll = () => {
    const prefs: CookiePreferences = { statistics: true, marketing: true }
    setPreferences(prefs)
    persistPreferences(prefs, 'all')
    closeBanner()
  }

  const handleOpenSettings = () => {
    setShowSettings(true)
  }

  const handleCancelSettings = () => {
    setShowSettings(false)
  }

  const handleSaveSettings = () => {
    persistPreferences(preferences, 'custom')
    setShowSettings(false)
    closeBanner()
  }

  if (!showBanner) {
    return null
  }

  return (
    <>
      {/* Cookie Banner (non-blocking, no backdrop) */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 px-3 py-3 transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <div className="max-w-5xl mx-auto bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 px-5 py-4 transform transition-all">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 lg:gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-start gap-2 mb-1.5">
                <div className="w-8 h-8 bg-gradient-to-br from-solar-primary to-solar-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0 space-y-2">
                  <h3 className="text-base font-bold text-slate-900">
                    Cookie-Hinweis
                  </h3>
                  <p className="text-sm text-slate-600 leading-snug">
                    Wir nutzen Cookies für Ihre komfortable Nutzung. Hier können Sie Ihre
                    Einstellungen wählen.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-center items-stretch sm:items-center gap-2 lg:flex-shrink-0 w-full lg:w-auto">
              <button
                onClick={handleAcceptAll}
                className="w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-solar-primary to-solar-secondary text-white text-sm font-semibold rounded-lg hover:from-solar-dark hover:to-solar-primary transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap"
              >
                Alle Cookies annehmen
              </button>
              <button
                onClick={handleOpenSettings}
                className="w-full sm:w-auto px-4 py-2 bg-white text-slate-900 border border-slate-200 text-sm font-semibold rounded-lg hover:bg-slate-50 transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
              >
                Einstellungen
              </button>
              <button
                onClick={handleAcceptNecessary}
                className="w-full sm:w-auto px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 text-sm font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
              >
                Nur notwendige Cookies
              </button>
            </div>
          </div>
        </div>
      </div>

      <CookieSettingsModal
        open={showSettings}
        preferences={preferences}
        onChange={setPreferences}
        onCancel={handleCancelSettings}
        onSave={handleSaveSettings}
      />
    </>
  )
}

