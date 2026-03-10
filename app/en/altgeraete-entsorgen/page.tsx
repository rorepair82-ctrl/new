import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Dispose old appliances – environmentally friendly disposal',
  description:
    'We help you dispose of old household appliances in Austria in an environmentally friendly way and, if desired, combine this with delivery or installation of a new appliance.',
  path: '/en/altgeraete-entsorgen',
})

export default function DisposeOldAppliancesEnPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Dispose of old appliances</h1>
      <p className="text-gray-700 mb-6">
        You would like to dispose of an old washing machine, fridge or cooker? We collect old
        appliances and ensure proper, environmentally friendly disposal in accordance with Austrian
        regulations.
      </p>
      <p className="text-gray-700 mb-8">
        If you wish, we can combine disposal with delivery or installation of a new appliance. Just
        send us a non-binding request.
      </p>
      <Link
        href="/en/kontakt"
        className="inline-flex items-center px-6 py-3 rounded-xl bg-solar-primary text-white font-semibold hover:bg-solar-dark transition-colors"
      >
        Request old-appliance disposal
      </Link>
    </main>
  )
}

