import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Washing machine repair – fast & reliable',
  description:
    'Professional washing machine repair in Austria. Fast help with faults, fair prices and reliable service.',
  path: '/en/waschmaschinen-reparatur',
})

export default function WashingMachineRepairEnPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Washing machine repair in Austria</h1>
      <p className="text-gray-700 mb-6">
        Your washing machine is making problems, no longer drains or shows an error code? We inspect
        the appliance, replace defective parts and get your washing machine running reliably again.
      </p>
      <p className="text-gray-700 mb-8">
        For appointments or questions, use our contact form or call us directly.
      </p>
      <Link
        href="/en/kontakt"
        className="inline-flex items-center px-6 py-3 rounded-xl bg-solar-primary text-white font-semibold hover:bg-solar-dark transition-colors"
      >
        Request washing machine repair
      </Link>
    </main>
  )
}

