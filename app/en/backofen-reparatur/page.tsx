import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Oven repair – built-in oven service',
  description:
    'Oven no longer heats up, stays cold or shows an error? We repair ovens and built-in appliances reliably.',
  path: '/en/backofen-reparatur',
})

export default function OvenRepairEnPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Oven repair in Austria</h1>
      <p className="text-gray-700 mb-6">
        Whether the oven no longer heats, the temperature fluctuates or an error code appears – we
        examine the appliance and carry out the repair professionally.
      </p>
      <p className="text-gray-700 mb-8">
        Describe the fault to us so we can prepare the visit and, if necessary, bring the right
        spare parts.
      </p>
      <Link
        href="/en/kontakt"
        className="inline-flex items-center px-6 py-3 rounded-full bg-solar-primary text-white font-semibold hover:bg-solar-dark transition-colors"
      >
        Request oven repair
      </Link>
    </main>
  )
}

