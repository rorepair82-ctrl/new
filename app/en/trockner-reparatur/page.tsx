import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Dryer repair – tumble dryer service',
  description:
    'Your dryer no longer dries properly, stops the programme or shows an error? We repair tumble dryers in Austria.',
  path: '/en/trockner-reparatur',
})

export default function DryerRepairEnPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Dryer repair in Austria</h1>
      <p className="text-gray-700 mb-6">
        If your tumble dryer no longer dries correctly, makes unusual noises or displays error
        messages, we support you with diagnosis and repair.
      </p>
      <p className="text-gray-700 mb-8">
        Get in touch with us – we will advise you whether a repair makes sense and arrange a suitable
        appointment.
      </p>
      <Link
        href="/en/kontakt"
        className="inline-flex items-center px-6 py-3 rounded-xl bg-solar-primary text-white font-semibold hover:bg-solar-dark transition-colors"
      >
        Request dryer repair
      </Link>
    </main>
  )
}

