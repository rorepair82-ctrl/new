import Link from 'next/link'
import { baseUrl, buildPageMetadata } from '@/lib/seo'
import { company } from '@/lib/company'

export const metadata = buildPageMetadata({
  title: 'About us – appliance repair & service',
  description:
    'Learn more about our team, our story and our values in appliance repair, maintenance and installation in Austria.',
  path: '/en/ueber-uns',
})

export default function AboutUsEn() {
  const stats = [
    { number: '500+', label: 'Repaired appliances' },
    { number: '2024', label: 'Year founded' },
    { number: '50+', label: 'Satisfied customers' },
    { number: '24/7', label: 'Service & support' },
  ]

  const certifications = [
    'Certified electrical engineering',
    'Specialist for household appliances',
    'Original spare parts',
    'Transparent fixed prices',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero */}
      <div className="relative py-24 px-4 border-b-2 border-gray-100 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1920&q=80"
          alt="Kitchen with fridge"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-br from-solar-primary/20 via-transparent to-solar-secondary/20" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-solar-primary to-solar-secondary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              Your local partner
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white relative drop-shadow-lg">
            <span className="relative z-10">About us</span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-3 bg-gradient-to-r from-solar-primary to-solar-secondary rounded-full opacity-70" />
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-md">
            We repair, maintain and install your household appliances – competent, fair and reliable.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100 hover:border-solar-primary/30 transition-all text-center"
            >
              <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Our story */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-14 border-2 border-gray-100 mb-12">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-solar-primary to-solar-secondary rounded-2xl flex items-center justify-center mr-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our story</h2>
          </div>
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              {company.name} was founded in 2024 with a clear vision:{' '}
              <strong className="text-gray-900">
                professional repair and service for household appliances
              </strong>{' '}
              – fast, fair and reliable. We are bringing a fresh approach to the Austrian service
              landscape for washing machines, fridges, cookers, dishwashers and more.
            </p>
            <p>
              Our team recognised the growing need for a reliable contact partner for defective
              household appliances. With experienced technicians and fair prices, we work every day to
              get your appliances running again – whether repair, maintenance or installation.
            </p>
            <p>
              Although we are a young company, we have already successfully completed{' '}
              <strong className="text-gray-900">hundreds of repairs and installations</strong>. Our
              success is based on quality, transparent fixed prices, personal service and the
              satisfaction of our customers.
            </p>
          </div>
        </div>

        {/* Values (shortened in EN) */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 px-4">
          <div className="bg-gradient-to-br from-solar-primary/5 to-solar-secondary/5 rounded-2xl shadow-xl p-6 md:p-8 border-2 border-solar-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Quality</h3>
            <p className="text-gray-600 text-sm md:text-base">
              We rely on original spare parts and proven repair methods. Every job is carried out by
              experienced technicians – for long-lasting appliances.
            </p>
          </div>
          <div className="bg-gradient-to-br from-solar-primary/5 to-solar-secondary/5 rounded-2xl shadow-xl p-6 md:p-8 border-2 border-solar-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Customer focus</h3>
            <p className="text-gray-600 text-sm md:text-base">
              We take time for every enquiry, explain your options in detail and find the best
              solution for your appliance and budget.
            </p>
          </div>
        </div>

        {/* Certifications & mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-3xl shadow-xl p-10 border-2 border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center bg-gradient-to-br from-solar-primary/5 to-solar-secondary/5 rounded-xl p-4 border-2 border-solar-primary/10"
                >
                  <svg
                    className="w-6 h-6 text-solar-primary mr-3"
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
                  <span className="font-semibold text-gray-900">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-10 border-2 border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our mission</h3>
            <p className="text-gray-600 leading-relaxed text-base mb-6">
              As a newly founded company our mission is clear: to offer reliable repair and service
              for household appliances – fair, transparent and fast. We want to help our customers use
              their appliances for a long time and save money.
            </p>
            <div className="bg-gradient-to-br from-solar-primary/10 to-solar-secondary/10 rounded-xl p-6 border-2 border-solar-primary/20">
              <p className="text-gray-800 font-semibold text-lg mb-2">
                “We believe in repair instead of throwing away – for your appliances and for the
                environment.”
              </p>
              <p className="text-gray-600 text-sm">
                With experience, fair prices and personal commitment we make sure your washing
                machine, fridge & co. work reliably again.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl p-12 md:p-16 border-2 border-gray-200">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Need repair or service for your appliances?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Contact us for a free consultation and an individual quote.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Link
                href="/en/kontakt"
                className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-solar-primary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-solar-primary transition-colors">
                  Contact us
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Send your enquiry and we will get back to you as soon as possible.
                </p>
                <div className="inline-flex items-center text-solar-primary font-semibold text-sm">
                  Open contact form
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
              <a
                href={`tel:${company.phoneRaw}`}
                className="group bg-solar-primary text-white rounded-2xl p-8 shadow-xl hover:bg-solar-dark transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-3">Call us directly</h3>
                  <p className="text-white/90 mb-4">
                    You prefer to speak to someone? We are happy to advise you personally.
                  </p>
                </div>
                <div className="inline-flex items-center text-lg font-bold">
                  {company.phone}
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

