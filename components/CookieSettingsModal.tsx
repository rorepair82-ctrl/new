'use client'

import React from 'react'

type CookiePreferences = {
  statistics: boolean
  marketing: boolean
}

type Props = {
  open: boolean
  preferences: CookiePreferences
  onChange: (prefs: CookiePreferences) => void
  onCancel: () => void
  onSave: () => void
}

export default function CookieSettingsModal({
  open,
  preferences,
  onChange,
  onCancel,
  onSave,
}: Props) {
  if (!open) return null

  const toggle = (key: keyof CookiePreferences) => {
    onChange({ ...preferences, [key]: !preferences[key] })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl border border-slate-200 p-5 sm:p-6 md:p-7">
        <div className="mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5">
            Cookie-Einstellungen
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Hier können Sie optionale Cookies für Statistik und Marketing anpassen. Notwendige
            Cookies sind für den Betrieb der Website immer aktiv.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-5 mb-5">
          {/* Notwendige Cookies (always on) */}
          <div className="flex items-start gap-3">
            <div className="mt-1 h-6 w-11 rounded-full bg-slate-200 flex items-center px-1 opacity-70">
              <div className="h-4 w-4 rounded-full bg-slate-500 translate-x-5 transition-transform" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-900">Notwendige Cookies</h3>
                <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-600">
                  Immer aktiv
                </span>
              </div>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                Erforderlich, um die Website und das Anfrageformular technisch bereitzustellen. Diese
                können nicht deaktiviert werden.
              </p>
            </div>
          </div>

          {/* Statistik */}
          <div className="flex items-start gap-3">
            <button
              type="button"
              onClick={() => toggle('statistics')}
              className={`mt-1 h-6 w-11 rounded-full px-1 flex items-center transition-colors ${
                preferences.statistics ? 'bg-solar-primary' : 'bg-slate-300'
              }`}
            >
              <span
                className={`h-4 w-4 rounded-full bg-white shadow-sm transform transition-transform ${
                  preferences.statistics ? 'translate-x-5' : ''
                }`}
              />
            </button>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-slate-900">Statistik (Google Analytics)</h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                Hilft uns zu verstehen, wie unsere Website genutzt wird, um sie laufend zu
                verbessern.
              </p>
            </div>
          </div>

          {/* Marketing */}
          <div className="flex items-start gap-3">
            <button
              type="button"
              onClick={() => toggle('marketing')}
              className={`mt-1 h-6 w-11 rounded-full px-1 flex items-center transition-colors ${
                preferences.marketing ? 'bg-solar-primary' : 'bg-slate-300'
              }`}
            >
              <span
                className={`h-4 w-4 rounded-full bg-white shadow-sm transform transition-transform ${
                  preferences.marketing ? 'translate-x-5' : ''
                }`}
              />
            </button>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-slate-900">Marketing</h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                Wird für personalisierte Angebote und Remarketing verwendet.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
          >
            Abbrechen
          </button>
          <button
            type="button"
            onClick={onSave}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-white rounded-lg bg-solar-primary hover:bg-solar-dark shadow-sm transition-colors"
          >
            Speichern
          </button>
        </div>
      </div>
    </div>
  )
}

