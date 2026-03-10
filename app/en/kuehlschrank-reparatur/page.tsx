import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Fridge repair – cooling appliance service',
  description:
    'Your fridge is no longer cooling properly? We offer professional fridge repair and service in Austria.',
  path: '/en/kuehlschrank-reparatur',
})

export default function FridgeRepairEnPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Fridge repair in Austria</h1>
      <p className="text-gray-700 mb-6">
        The fridge cools too weakly, ice builds up or the appliance makes unusual noises? We find
        the cause and repair your fridge when it is technically and economically reasonable.
      </p>
      <p className="text-gray-700 mb-8">
        Send us a short description of the fault – we will advise you without obligation and find a
        suitable solution.
      </p>
      <Link
        href="/en/kontakt"
        className="inline-flex items-center px-6 py-3 rounded-xl bg-solar-primary text-white font-semibold hover:bg-solar-dark transition-colors"
      >
        Request fridge repair
      </Link>
    </main>
  )
}

