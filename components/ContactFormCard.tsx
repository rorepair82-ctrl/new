'use client'

import React, { useState, FormEvent } from 'react'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactFormCard() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefon: '',
    unternehmen: '',
    nachricht: '',
  })
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setStatus('success')
        setFormData({ name: '', email: '', telefon: '', unternehmen: '', nachricht: '' })
      } else {
        setStatus('error')
        console.error('Form submission error:', result.error || 'Unknown error')
      }
    } catch (error) {
      setStatus('error')
      console.error('Network error:', error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 border-2 border-gray-100 hover:border-solar-primary/30 transition-all duration-300 overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-solar-secondary/5 to-transparent rounded-full blur-2xl -ml-32 -mt-32"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tr from-solar-primary/5 to-transparent rounded-full blur-2xl -mr-24 -mb-24"></div>

      <div className="relative z-10">
        <div className="flex items-center mb-6 md:mb-8 pb-4 md:pb-6 border-b-2 border-gray-100">
          <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-solar-primary to-solar-secondary rounded-xl md:rounded-2xl flex items-center justify-center mr-3 md:mr-4 shadow-xl transform hover:scale-110 transition-transform duration-200 flex-shrink-0">
            <svg
              className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 break-words">
              Kontaktformular
            </h2>
            <p className="text-gray-500 text-xs md:text-sm">Füllen Sie das Formular aus</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          {/* First row: Name + E-Mail */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="relative">
              <label
                htmlFor="name"
                className="block text-gray-900 font-bold mb-2 md:mb-2.5 text-sm md:text-base"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ihr vollständiger Name"
                  className="w-full pl-10 md:pl-12 pr-3 md:pr-5 py-2.5 md:py-3.5 border-2 border-gray-300 rounded-lg md:rounded-xl focus:ring-4 focus:ring-solar-primary/20 focus:border-solar-primary transition-all duration-200 text-sm md:text-base text-gray-900 placeholder-gray-400 bg-gray-50 hover:bg-white"
                />
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="email"
                className="block text-gray-900 font-bold mb-2 md:mb-2.5 text-sm md:text-base"
              >
                E-Mail <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ihre.email@beispiel.com"
                  className="w-full pl-10 md:pl-12 pr-3 md:pr-5 py-2.5 md:py-3.5 border-2 border-gray-300 rounded-lg md:rounded-xl focus:ring-4 focus:ring-solar-primary/20 focus:border-solar-primary transition-all duration-200 text-sm md:text-base text-gray-900 placeholder-gray-400 bg-gray-50 hover:bg-white"
                />
              </div>
            </div>
          </div>

          {/* Second row: Unternehmen + Telefon */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="relative">
              <label
                htmlFor="unternehmen"
                className="block text-gray-900 font-bold mb-2 md:mb-2.5 text-sm md:text-base"
              >
                Unternehmen
              </label>
              <div className="relative">
                <div className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="unternehmen"
                  name="unternehmen"
                  value={formData.unternehmen}
                  onChange={handleChange}
                  placeholder="Ihr Unternehmen (optional)"
                  className="w-full pl-10 md:pl-12 pr-3 md:pr-5 py-2.5 md:py-3.5 border-2 border-gray-300 rounded-lg md:rounded-xl focus:ring-4 focus:ring-solar-primary/20 focus:border-solar-primary transition-all duration-200 text-sm md:text-base text-gray-900 placeholder-gray-400 bg-gray-50 hover:bg-white"
                />
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="telefon"
                className="block text-gray-900 font-bold mb-2 md:mb-2.5 text-sm md:text-base"
              >
                Telefon
              </label>
              <div className="relative">
                <div className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <input
                  type="tel"
                  id="telefon"
                  name="telefon"
                  value={formData.telefon}
                  onChange={handleChange}
                  placeholder="+43 660 657 7900"
                  className="w-full pl-10 md:pl-12 pr-3 md:pr-5 py-2.5 md:py-3.5 border-2 border-gray-300 rounded-lg md:rounded-xl focus:ring-4 focus:ring-solar-primary/20 focus:border-solar-primary transition-all duration-200 text-sm md:text-base text-gray-900 placeholder-gray-400 bg-gray-50 hover:bg-white"
                />
              </div>
            </div>
          </div>

          {/* Nachricht */}
          <div className="relative">
            <label
              htmlFor="nachricht"
              className="block text-gray-900 font-bold mb-2 md:mb-2.5 text-sm md:text-base"
            >
              Nachricht <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute left-3 md:left-4 top-3 md:top-4 text-gray-400">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <textarea
                id="nachricht"
                name="nachricht"
                required
                rows={6}
                value={formData.nachricht}
                onChange={handleChange}
                placeholder="Beschreiben Sie bitte Ihr Problem..."
                className="w-full pl-10 md:pl-12 pr-3 md:pr-5 py-2.5 md:py-3.5 border-2 border-gray-300 rounded-lg md:rounded-xl focus:ring-4 focus:ring-solar-primary/20 focus:border-solar-primary transition-all duration-200 resize-none text-sm md:text-base text-gray-900 placeholder-gray-400 bg-gray-50 hover:bg-white"
              />
            </div>
          </div>

          {status === 'success' && (
            <div className="bg-gradient-to-r from-solar-primary/5 to-solar-secondary/5 border-2 border-solar-primary/40 text-solar-dark px-3 md:px-5 py-3 md:py-4 rounded-lg md:rounded-xl flex items-start md:items-center">
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
              <p className="font-semibold text-sm md:text-base break-words">
                Ihre Nachricht wurde erfolgreich gesendet! Wir melden uns schnellstmöglich bei Ihnen.
              </p>
            </div>
          )}

          {status === 'error' && (
            <div className="bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-300 text-red-800 px-3 md:px-5 py-3 md:py-4 rounded-lg md:rounded-xl flex items-start md:items-center">
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
              <p className="font-semibold text-sm md:text-base break-words">
                Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut oder
                kontaktieren Sie uns telefonisch.
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-gradient-to-r from-solar-primary via-solar-primary to-solar-secondary text-white px-4 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-bold text-sm md:text-base lg:text-lg hover:from-solar-dark hover:via-solar-dark hover:to-solar-primary transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-xl flex items-center justify-center"
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
                Anfrage senden
                <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        </form>
      </div>
    </div>
  )
}

