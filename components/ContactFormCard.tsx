'use client'

import React, { useState, FormEvent } from 'react'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactFormCard() {
  const [formData, setFormData] = useState({
    vorname: '',
    nachname: '',
    email: '',
    telefon: '',
    standort: '',
    geraetetyp: '',
    problembeschreibung: '',
  })
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const name = `${formData.vorname} ${formData.nachname}`.trim()
      const nachricht = [
        formData.standort && `Standort/PLZ: ${formData.standort}`,
        formData.geraetetyp && `Gerätetyp: ${formData.geraetetyp}`,
        formData.problembeschreibung && `Problembeschreibung:\n${formData.problembeschreibung}`,
      ]
        .filter(Boolean)
        .join('\n\n')

      const payload = {
        name,
        email: formData.email,
        telefon: formData.telefon,
        nachricht,
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setStatus('success')

        if (typeof window !== 'undefined' && (window as any).gtag_report_form_conversion) {
          ;(window as any).gtag_report_form_conversion()
        }

        setFormData({
          vorname: '',
          nachname: '',
          email: '',
          telefon: '',
          standort: '',
          geraetetyp: '',
          problembeschreibung: '',
        })
      } else {
        setStatus('error')
        console.error('Form submission error:', result.error || 'Unknown error')
      }
    } catch (error) {
      setStatus('error')
      console.error('Network error:', error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="relative bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200">
      <div className="relative z-10">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
            Schnellanfrage – Wir rufen Sie zurück!
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Füllen Sie das Formular aus, wir melden uns schnellstmöglich bei Ihnen.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          {/* First row: Vorname + Nachname + Telefonnummer + E-Mail-Adresse */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            <div className="relative">
              <label
                htmlFor="vorname"
                className="block text-gray-900 font-medium mb-1.5 text-sm"
              >
                Vorname <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="vorname"
                name="vorname"
                required
                value={formData.vorname}
                onChange={handleChange}
                placeholder="Max"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-primary/30 focus:border-solar-primary text-sm text-gray-900 placeholder-gray-400"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="nachname"
                className="block text-gray-900 font-medium mb-1.5 text-sm"
              >
                Nachname <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="nachname"
                name="nachname"
                required
                value={formData.nachname}
                onChange={handleChange}
                placeholder="Mustermann"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-primary/30 focus:border-solar-primary text-sm text-gray-900 placeholder-gray-400"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="telefon"
                className="block text-gray-900 font-medium mb-1.5 text-sm"
              >
                Telefonnummer <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="telefon"
                name="telefon"
                required
                value={formData.telefon}
                onChange={handleChange}
                placeholder="+43 ..."
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-primary/30 focus:border-solar-primary text-sm text-gray-900 placeholder-gray-400"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="email"
                className="block text-gray-900 font-medium mb-1.5 text-sm"
              >
                E-Mail-Adresse <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="email@example.com"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-primary/30 focus:border-solar-primary text-sm text-gray-900 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Second row: Standort/PLZ + Gerätetyp */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            <div className="relative">
              <label
                htmlFor="standort"
                className="block text-gray-900 font-medium mb-1.5 text-sm"
              >
                Standort/PLZ <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="standort"
                name="standort"
                required
                value={formData.standort}
                onChange={handleChange}
                placeholder="Wien, 1010"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-primary/30 focus:border-solar-primary text-sm text-gray-900 placeholder-gray-400"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="geraetetyp"
                className="block text-gray-900 font-medium mb-1.5 text-sm"
              >
                Gerätetyp <span className="text-red-500">*</span>
              </label>
              <select
                id="geraetetyp"
                name="geraetetyp"
                required
                value={formData.geraetetyp}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-primary/30 focus:border-solar-primary text-sm text-gray-900 bg-white"
              >
                <option value="">Bitte wählen…</option>
                <option value="Waschmaschine">Waschmaschine</option>
                <option value="Geschirrspüler">Geschirrspüler</option>
                <option value="Kühlschrank">Kühlschrank</option>
                <option value="Backofen">Backofen</option>
                <option value="Elektroherd">Elektroherd</option>
                <option value="Mikrowelle">Mikrowelle</option>
                <option value="Trockner">Trockner</option>
                <option value="Sonstiges">Sonstiges</option>
              </select>
            </div>
          </div>

          {/* Problembeschreibung */}
          <div className="relative">
            <label
              htmlFor="problembeschreibung"
              className="block text-gray-900 font-medium mb-1.5 text-sm"
            >
              Problembeschreibung <span className="text-red-500">*</span>
            </label>
            <textarea
              id="problembeschreibung"
              name="problembeschreibung"
              required
              rows={4}
              value={formData.problembeschreibung}
              onChange={handleChange}
              placeholder="Beschreiben Sie kurz das Problem mit Ihrem Gerät…"
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-primary/30 focus:border-solar-primary text-sm text-gray-900 placeholder-gray-400 resize-none"
            />
          </div>

          {status === 'success' && (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-3 md:px-4 py-3 rounded-lg flex items-start md:items-center text-sm">
              <svg
                className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 flex-shrink-0 mt-0.5 md:mt-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="font-semibold break-words">
                Ihre Nachricht wurde erfolgreich gesendet! Wir melden uns schnellstmöglich bei Ihnen.
              </p>
            </div>
          )}

          {status === 'error' && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-3 md:px-4 py-3 rounded-lg flex items-start md:items-center text-sm">
              <svg
                className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 flex-shrink-0 mt-0.5 md:mt-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="font-semibold break-words">
                Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut oder
                kontaktieren Sie uns telefonisch.
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full md:w-auto px-6 md:px-8 py-2.5 md:py-3 rounded-full bg-solar-primary hover:bg-solar-dark text-white font-semibold text-sm md:text-base flex items-center justify-center mx-auto disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Wird gesendet...
              </>
            ) : (
              <>
                <span className="mr-2">Anfrage senden</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </>
            )}
          </button>

          <p className="text-[11px] md:text-xs text-gray-400 text-center mt-2">
            Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer Datenschutzerklärung zu.
          </p>
        </form>
      </div>
    </div>
  )
}

