import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Electric cooker repair – hobs & cookers',
  description:
    'Repair of electric cookers and hobs in Austria. We fix typical defects quickly and reliably.',
  path: '/en/elektroherd-reparatur',
})

export default function ElectricCookerRepairEnPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Electric cooker and hob repair in Austria
      </h1>
      <p className="text-gray-700 mb-6">
        Plates or hobs no longer heat up, fuses blow or the cooker can no longer be operated? We
        take care of the professional repair of your electric cooker.
      </p>
      <p className="text-gray-700 mb-8">
        Please tell us the brand, model and error description – this helps us to prepare spare
        parts.
      </p>
      <Link
        href="/en/kontakt"
        className="inline-flex items-center px-6 py-3 rounded-full bg-solar-primary text-white font-semibold hover:bg-solar-dark transition-colors"
      >
        Request electric cooker repair
      </Link>
    </main>
  )
}

