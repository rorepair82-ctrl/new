'use client'

import { useState, FormEvent } from 'react'
import { company } from '@/lib/company'

export default function ContactEn() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          telefon: formData.phone,
          unternehmen: formData.company,
          nachricht: formData.message,
        }),
      })

      const result = await response.json()
      if (response.ok && result.success) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', company: '', message: '' })
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
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Hero */}
      <div className="relative py-24 px-4 border-b-2 border-gray-100 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1648475236778-68c30a3691b4?auto=format&fit=crop&w=1920&q=80"
          alt="Modern kitchen with fridge"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-br from-solar-primary/20 via-transparent to-solar-secondary/20" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-solar-primary to-solar-secondary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              Your contact
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white relative drop-shadow-lg">
            <span className="relative z-10">Contact</span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-3 bg-gradient-to-r from-solar-primary to-solar-secondary rounded-full opacity-70" />
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-md">
            Send us a message – we will get back to you as soon as possible.
          </p>
        </div>
      </div>

      {/* Main content (simplified EN version) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border-2 border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Contact details
              </h2>
              <p className="text-gray-600 mb-4">
                You can reach us via contact form, phone or email. We are happy to advise you about
                repairs, maintenance and installation.
              </p>
              <div className="space-y-3 text-sm md:text-base text-gray-700">
                <div>
                  <div className="font-semibold text-gray-900">Address</div>
                  <div>{company.fullAddress}</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Phone</div>
                  <a
                    href={`tel:${company.phoneRaw}`}
                    className="text-solar-primary hover:underline font-medium"
                  >
                    {company.phone}
                  </a>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <a
                    href={`mailto:${company.email}`}
                    className="text-solar-primary hover:underline font-medium break-all"
                  >
                    {company.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border-2 border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Send us a message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <div>
                <label htmlFor="name" className="block font-semibold text-gray-900 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-solar-primary focus:ring-2 focus:ring-solar-primary/20"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold text-gray-900 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-solar-primary focus:ring-2 focus:ring-solar-primary/20"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block font-semibold text-gray-900 mb-1">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-solar-primary focus:ring-2 focus:ring-solar-primary/20"
                  placeholder="+43 ..."
                />
              </div>
              <div>
                <label htmlFor="company" className="block font-semibold text-gray-900 mb-1">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-solar-primary focus:ring-2 focus:ring-solar-primary/20"
                  placeholder="Your company (optional)"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-semibold text-gray-900 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-solar-primary focus:ring-2 focus:ring-solar-primary/20"
                  placeholder="How can we help you?"
                />
              </div>

              {status === 'success' && (
                <div className="bg-solar-primary/5 border-2 border-solar-primary/40 text-solar-dark px-3 py-3 rounded-lg text-sm">
                  Your message has been sent successfully. We will contact you as soon as possible.
                </div>
              )}
              {status === 'error' && (
                <div className="bg-red-50 border-2 border-red-300 text-red-800 px-3 py-3 rounded-lg text-sm">
                  There was an error sending your message. Please try again or contact us by phone.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-solar-primary text-white font-bold rounded-lg py-3 hover:bg-solar-dark transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

