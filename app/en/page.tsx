import Link from 'next/link'
import { company } from '@/lib/company'
import { baseUrl, buildPageMetadata } from '@/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Washing machine & fridge repair in Austria – service & installation',
  description:
    'Appliance repair in Austria: washing machines, fridges, cookers, dishwashers. Free advice, fair fixed prices, fast appointments.',
  path: '/en',
})

export default function HomeEn() {
  const aggregateRatingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#localbusiness`,
    name: company.name,
    url: baseUrl,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '50',
    },
  }

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingJsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[520px] flex items-center px-4 sm:px-6 pt-28 sm:pt-32 md:pt-40 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1621578216288-7ba7b7a5ff04?auto=format&fit=crop&w=2070&q=80"
            alt="Technician repairing washing machine and fridge"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="lg:flex-[7] text-white">
            <p className="text-white/90 text-sm sm:text-base font-semibold mb-2 uppercase tracking-wide">
              Appliance repair & service in Austria
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Washing machine, fridge & cooker repair –{' '}
              <span className="bg-gradient-to-r from-white via-teal-200 to-cyan-300 bg-clip-text text-transparent font-bold">
                fast, fair, reliable
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-4 text-white/90 leading-relaxed max-w-2xl">
              Professional <strong>repair</strong>, <strong>maintenance</strong> and{' '}
              <strong>installation</strong> of household appliances: washing machines, fridges, cookers
              and dishwashers. Free advice and transparent fixed prices.
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm md:text-base text-white/90 mb-6">
              <li>✓ Free consultation</li>
              <li>✓ Fair fixed prices</li>
              <li>✓ Fast appointments</li>
            </ul>
            <div className="flex gap-3 md:gap-4 flex-wrap">
              <Link
                href="/en/kontakt"
                className="bg-solar-primary text-white px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-xl font-bold hover:bg-solar-dark transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-sm md:text-base"
              >
                Request free consultation
              </Link>
              <a
                href={`tel:${company.phoneRaw}`}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-xl font-semibold hover:bg-white/20 transition-all shadow-lg hover:shadow-xl text-sm md:text-base inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {company.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Short services overview */}
      <section className="py-12 sm:py-16 px-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Repair, maintenance & installation for your appliances
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-2xl mx-auto text-center">
            We repair and install washing machines, fridges, cookers, dishwashers and more – throughout
            Austria.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Link
              href="/en/waschmaschinen-reparatur"
              className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-solar-primary/50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-solar-primary">
                Washing machine repair
              </h3>
              <p className="text-sm text-gray-600">
                Draining problems, error codes or noise – we find and fix the fault.
              </p>
            </Link>
            <Link
              href="/en/geschirrspueler-reparatur"
              className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-solar-primary/50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-solar-primary">
                Dishwasher repair
              </h3>
              <p className="text-sm text-gray-600">
                Dishes not clean, water left in the machine or leaks – we take care of it.
              </p>
            </Link>
            <Link
              href="/en/kuehlschrank-reparatur"
              className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-solar-primary/50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-solar-primary">
                Fridge repair
              </h3>
              <p className="text-sm text-gray-600">
                Cooling problems, ice build-up or unusual noises – we repair your cooling unit.
              </p>
            </Link>
            <Link
              href="/en/altgeraete-entsorgen"
              className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-solar-primary/50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-solar-primary">
                Dispose old appliances
              </h3>
              <p className="text-sm text-gray-600">
                We pick up and dispose of old appliances in an environmentally friendly way.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

