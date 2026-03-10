import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Dishwasher repair – professional service',
  description:
    'Dishwasher repair in Austria. We fix faults, leaks and error codes reliably.',
  path: '/en/geschirrspueler-reparatur',
})

export default function DishwasherRepairEnPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Dishwasher repair in Austria</h1>
      <p className="text-gray-700 mb-6">
        Your dishwasher no longer cleans properly, water remains inside or the appliance stops with
        an error? We check your machine and carry out the necessary repair professionally.
      </p>
      <p className="text-gray-700 mb-8">
        Briefly describe the problem – we will get back to you with an assessment and a suggested
        appointment.
      </p>
      <Link
        href="/en/kontakt"
        className="inline-flex items-center px-6 py-3 rounded-xl bg-solar-primary text-white font-semibold hover:bg-solar-dark transition-colors"
      >
        Request dishwasher repair
      </Link>
    </main>
  )
}

