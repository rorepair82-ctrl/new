import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Microwave repair – quick help',
  description:
    'Microwave defective? We repair microwave ovens in Austria quickly and reliably if a repair is reasonable.',
  path: '/en/mikrowellen-reparatur',
})

export default function MicrowaveRepairEnPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Microwave repair in Austria</h1>
      <p className="text-gray-700 mb-6">
        Turntable no longer moves, no heating or burnt smell? We check whether a repair is
        technically and economically sensible and advise you transparently.
      </p>
      <p className="text-gray-700 mb-8">
        For an assessment, please briefly describe the fault and the model of your microwave.
      </p>
      <Link
        href="/en/kontakt"
        className="inline-flex items-center px-6 py-3 rounded-full bg-solar-primary text-white font-semibold hover:bg-solar-dark transition-colors"
      >
        Request microwave repair
      </Link>
    </main>
  )
}

