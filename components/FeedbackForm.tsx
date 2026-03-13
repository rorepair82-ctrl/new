'use client'

import { FormEvent, useState } from 'react'

function StarIcon({
  filled,
  hovered,
}: {
  filled: boolean
  hovered: boolean
}) {
  const active = filled || hovered
  return (
    <svg
      className={`h-6 w-6 ${
        active ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
      }`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.401 8.172L12 18.897l-7.335 3.872 1.401-8.172L.132 9.21l8.2-1.192z" />
    </svg>
  )
}

export default function FeedbackForm() {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    formData.set('rating', String(rating))

    const data = Object.fromEntries(formData.entries())
    // TODO: send data to your API endpoint
    console.log('Feedback submitted', data)
  }

  const currentDisplayRating = hoverRating || rating

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <input type="hidden" name="rating" value={rating} />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="vorname" className="block text-sm font-medium text-slate-700 mb-1">
            Vorname
          </label>
          <input
            id="vorname"
            name="vorname"
            type="text"
            className="block w-full rounded-xl border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-solar-primary focus:ring-2 focus:ring-solar-primary/20 outline-none"
          />
        </div>
        <div>
          <label htmlFor="nachname" className="block text-sm font-medium text-slate-700 mb-1">
            Nachname
          </label>
          <input
            id="nachname"
            name="nachname"
            type="text"
            className="block w-full rounded-xl border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-solar-primary focus:ring-2 focus:ring-solar-primary/20 outline-none"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="telefonnummer"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            Telefonnummer
          </label>
          <input
            id="telefonnummer"
            name="telefonnummer"
            type="tel"
            className="block w-full rounded-xl border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-solar-primary focus:ring-2 focus:ring-solar-primary/20 outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
            E-Mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="block w-full rounded-xl border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-solar-primary focus:ring-2 focus:ring-solar-primary/20 outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="feedback-art" className="block text-sm font-medium text-slate-700 mb-1">
          Art Ihres Feedbacks
        </label>
        <select
          id="feedback-art"
          name="feedback-art"
          defaultValue=""
          className="block w-full rounded-xl border border-slate-200 px-3 py-2 text-sm shadow-sm bg-white focus:border-solar-primary focus:ring-2 focus:ring-solar-primary/20 outline-none"
        >
          <option value="" disabled>
            Bitte auswählen
          </option>
          <option value="allgemein">Allgemeines Feedback</option>
          <option value="servicebewertung">Servicebewertung</option>
          <option value="verbesserung">Verbesserungsvorschlag</option>
          <option value="problem">Problem melden</option>
        </select>
      </div>

      <div>
        <p className="block text-sm font-medium text-slate-700 mb-1">Service Bewertung</p>
        <div
          className="flex gap-2"
          aria-label="Service Bewertung 1 bis 5 Sterne"
        >
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="cursor-pointer"
              aria-label={`${star} Sterne`}
            >
              <StarIcon filled={star <= rating} hovered={star <= hoverRating && hoverRating !== 0} />
            </button>
          ))}
        </div>
        <p className="mt-1 text-xs text-slate-500">
          Aktuelle Bewertung: {currentDisplayRating || 'keine Angabe'}
        </p>
      </div>

      <div>
        <label htmlFor="nachricht" className="block text-sm font-medium text-slate-700 mb-1">
          Ihre Nachricht
        </label>
        <textarea
          id="nachricht"
          name="nachricht"
          rows={4}
          placeholder="Beschreiben Sie bitte Ihre Erfahrung oder Ihr Anliegen."
          className="block w-full rounded-xl border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-solar-primary focus:ring-2 focus:ring-solar-primary/20 outline-none resize-none"
        />
      </div>

      <div className="space-y-2">
        <label className="flex items-start gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            name="zustimmung-intern"
            className="mt-0.5 h-4 w-4 rounded border-slate-300 text-solar-primary focus:ring-solar-primary/40"
          />
          <span>
            Ich bin einverstanden, dass mein Feedback zur Verbesserung unseres Services genutzt wird.
          </span>
        </label>
        <label className="flex items-start gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            name="zustimmung-referenz"
            className="mt-0.5 h-4 w-4 rounded border-slate-300 text-solar-primary focus:ring-solar-primary/40"
          />
          <span>
            Ich bin einverstanden, dass meine Bewertung anonym als Kundenreferenz veröffentlicht werden
            darf.
          </span>
        </label>
      </div>

      <div>
        <button
          type="submit"
          className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-solar-primary px-7 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-solar-dark transition"
        >
          Feedback senden
        </button>
      </div>
    </form>
  )
}

