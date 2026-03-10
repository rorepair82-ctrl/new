import Link from 'next/link'

export default function UberUns() {

  const stats = [
    { number: "500+", label: "Reparierte Geräte", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
    { number: "2024", label: "Gründungsjahr", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
    { number: "50+", label: "Zufriedene Kunden", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
    { number: "24/7", label: "Service & Support", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }
  ]

  const certifications = [
    "Elektrotechnik geprüft",
    "Fachbetrieb Haushaltsgeräte",
    "Original-Ersatzteile",
    "Transparente Festpreise"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section with Team Photo */}
      <div className="relative py-24 px-4 border-b-2 border-gray-100 overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1920&q=80"
          alt="Küche mit Kühlschrank"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"></div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-solar-primary/20 via-transparent to-solar-secondary/20"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-solar-primary to-solar-secondary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              Ihr Partner vor Ort
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white relative drop-shadow-lg">
            <span className="relative z-10">Über Uns</span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-3 bg-gradient-to-r from-solar-primary to-solar-secondary rounded-full opacity-70"></div>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-md">
            Wir reparieren, warten und installieren Ihre Haushaltsgeräte – kompetent, fair und zuverlässig.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100 hover:border-solar-primary/30 transition-all text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-solar-primary to-solar-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
                </svg>
              </div>
              <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2">{stat.number}</div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Unsere Geschichte */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-14 border-2 border-gray-100 mb-12">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-solar-primary to-solar-secondary rounded-2xl flex items-center justify-center mr-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Unsere Geschichte</h2>
          </div>
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              GerätePro wurde 2024 mit einer klaren Vision gegründet: <strong className="text-gray-900">Professionelle Reparatur und Service für Haushaltsgeräte</strong> – schnell, fair und zuverlässig. Wir bringen frischen Wind in die österreichische Servicelandschaft für Waschmaschine, Kühlschrank, Herd, Geschirrspüler und mehr.
            </p>
            <p>
              Unser Team erkannte das wachsende Bedürfnis nach einem zuverlässigen Ansprechpartner für defekte Haushaltsgeräte. Mit erfahrenen Technikern und fairen Preisen setzen wir uns täglich dafür ein, Ihre Geräte wieder zum Laufen zu bringen – ob Reparatur, Wartung oder Installation.
            </p>
            <p>
              Obwohl wir ein junges Unternehmen sind, haben wir bereits <strong className="text-gray-900">hunderte Reparaturen und Installationen erfolgreich umgesetzt</strong>. Unser Erfolg basiert auf Qualität, transparenten Festpreisen, persönlichem Service und der Zufriedenheit unserer Kunden. Wir freuen uns auf viele weitere zufriedene Kunden.
            </p>
          </div>
        </div>

        {/* Unsere Werte */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 px-4">
          <div className="bg-gradient-to-br from-solar-primary/5 to-solar-secondary/5 rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-8 lg:p-10 border-2 border-solar-primary/20">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-solar-primary to-solar-secondary rounded-xl flex items-center justify-center mb-4 md:mb-6 shadow-lg">
              <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Qualität</h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Wir setzen auf Original-Ersatzteile und bewährte Reparaturmethoden. Jede Reparatur und Installation wird von erfahrenen Technikern durchgeführt – für lange Haltbarkeit Ihrer Haushaltsgeräte.
            </p>
          </div>

          <div className="bg-gradient-to-br from-solar-primary/5 to-solar-secondary/5 rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-8 lg:p-10 border-2 border-solar-primary/20">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-solar-primary to-solar-secondary rounded-xl flex items-center justify-center mb-4 md:mb-6 shadow-lg">
              <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Energieeffizienz</h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Wir beraten Sie zu energieeffizienten Geräten und optimieren bestehende Haushaltsgeräte. So sparen Sie Strom und schonen die Umwelt – ob bei Reparatur oder Neuanschaffung.
            </p>
          </div>

          <div className="bg-gradient-to-br from-solar-primary/5 to-solar-secondary/5 rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-8 lg:p-10 border-2 border-solar-primary/20">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-solar-primary to-solar-secondary rounded-xl flex items-center justify-center mb-4 md:mb-6 shadow-lg">
              <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Kundenzufriedenheit</h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Die Zufriedenheit unserer Kunden steht im Mittelpunkt unseres Handelns. Von der ersten Beratung bis zur langfristigen Wartung begleiten wir Sie mit Engagement, Transparenz und persönlichem Service.
            </p>
          </div>

          <div className="bg-gradient-to-br from-solar-primary/5 to-solar-secondary/5 rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-8 lg:p-10 border-2 border-solar-primary/20">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-solar-primary to-solar-secondary rounded-xl flex items-center justify-center mb-4 md:mb-6 shadow-lg">
              <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Innovation</h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Wir bleiben am Puls der Technik und setzen auf moderne Diagnose- und Reparaturmethoden. Unser Team wird kontinuierlich geschult, um Ihnen den besten Service für alle Marken und Gerätetypen zu bieten.
            </p>
          </div>
        </div>

        {/* Unser Team */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-14 border-2 border-gray-100 mb-12">
          <div className="flex items-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-solar-primary to-solar-secondary rounded-2xl flex items-center justify-center mr-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Unser Team</h2>
              <p className="text-gray-600">Eine familiäre Atmosphäre mit professioneller Expertise</p>
            </div>
          </div>
          
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              Bei GerätePro arbeiten wir nicht nur zusammen – <strong className="text-gray-900">wir sind ein eingespieltes Team</strong>. Unser Team besteht aus erfahrenen Technikern und Servicemitarbeitern, die sich durch Engagement und gegenseitige Unterstützung auszeichnen.
            </p>
            <p>
              Was uns besonders macht, ist unsere <strong className="text-gray-900">kundennahe Arbeitsweise</strong>. Wir kennen die typischen Probleme von Waschmaschine, Kühlschrank, Herd und Geschirrspüler und finden schnell die passende Lösung. Diese Erfahrung spiegelt sich in jedem Einsatz wider: schnelle Diagnose, faire Preise und zuverlässige Reparatur.
            </p>
            <p>
              Unser Team wird kontinuierlich geschult, um alle gängigen Marken und Gerätetypen zu beherrschen. Jeder bringt seine Stärken ein – ob Reparatur, Wartung, Installation oder Kundenberatung. Gemeinsam sorgen wir dafür, dass Ihre Haushaltsgeräte wieder zuverlässig laufen.
            </p>
            <p>
              Für unsere Kunden bedeutet das: <strong className="text-gray-900">Sie erhalten nicht nur professionellen Service, sondern auch persönliche Betreuung</strong>. Wir nehmen uns Zeit, erklären die Optionen und finden die beste Lösung für Ihr Gerät und Ihr Budget.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-solar-primary/5 to-solar-secondary/5 rounded-2xl p-6 border-2 border-solar-primary/10">
              <div className="w-12 h-12 bg-gradient-to-br from-solar-primary to-solar-secondary rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Zusammenhalt</h3>
              <p className="text-gray-600 text-sm">
                Wir unterstützen uns gegenseitig und arbeiten als Einheit für das beste Ergebnis.
              </p>
            </div>

            <div className="bg-gradient-to-br from-solar-primary/5 to-solar-secondary/5 rounded-2xl p-6 border-2 border-solar-primary/10">
              <div className="w-12 h-12 bg-gradient-to-br from-solar-primary to-solar-secondary rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Vertrauen</h3>
              <p className="text-gray-600 text-sm">
                Offene Kommunikation und gegenseitiges Vertrauen bilden die Basis unserer Zusammenarbeit.
              </p>
            </div>

            <div className="bg-gradient-to-br from-solar-primary/5 to-solar-secondary/5 rounded-2xl p-6 border-2 border-solar-primary/10">
              <div className="w-12 h-12 bg-gradient-to-br from-solar-primary to-solar-secondary rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Leidenschaft</h3>
              <p className="text-gray-600 text-sm">
                Unsere Leidenschaft für funktionierende Haushaltsgeräte und zufriedene Kunden treibt uns jeden Tag an.
              </p>
            </div>
          </div>
        </div>

        {/* Zertifizierungen & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-3xl shadow-xl p-10 border-2 border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Zertifizierungen</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center bg-gradient-to-br from-solar-primary/5 to-solar-secondary/5 rounded-xl p-4 border-2 border-solar-primary/10">
                  <svg className="w-6 h-6 text-solar-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold text-gray-900">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-10 border-2 border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Unsere Mission</h3>
            <p className="text-gray-600 leading-relaxed text-base mb-6">
              Als neu gegründetes Unternehmen haben wir eine klare Mission: zuverlässige Reparatur und Service für Haushaltsgeräte anzubieten – fair, transparent und schnell. Wir möchten unseren Kunden helfen, ihre Geräte lange zu nutzen und dabei Geld zu sparen.
            </p>
            <div className="bg-gradient-to-br from-solar-primary/10 to-solar-secondary/10 rounded-xl p-6 border-2 border-solar-primary/20">
              <p className="text-gray-800 font-semibold text-lg mb-2">
                "Wir glauben an Reparatur statt Wegwerfen – für Ihre Haushaltsgeräte und die Umwelt."
              </p>
              <p className="text-gray-600 text-sm">
                Mit Erfahrung, fairen Preisen und persönlichem Einsatz sorgen wir dafür, dass Waschmaschine, Kühlschrank & Co. wieder zuverlässig laufen.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl p-12 md:p-16 border-2 border-gray-200">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Brauchen Sie Reparatur oder Service für Ihre Haushaltsgeräte?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Kontaktieren Sie uns für eine kostenlose Beratung und ein individuelles Angebot.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Kontakt */}
              <Link 
                href="/kontakt"
                className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-solar-primary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-solar-primary to-solar-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-solar-primary transition-colors">
                  Kontakt
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Kostenlose Beratung erhalten
                </p>
                <div className="inline-flex items-center text-solar-primary font-semibold text-sm">
                  Kontaktieren
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              {/* Blog */}
              <Link 
                href="/blog"
                className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-solar-primary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-solar-primary to-solar-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-solar-primary transition-colors">
                  Blog
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Informieren Sie sich über Haushaltsgeräte
                </p>
                <div className="inline-flex items-center text-solar-primary font-semibold text-sm">
                  Artikel lesen
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              {/* Angebot */}
              <Link 
                href="/kontakt"
                className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-solar-primary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-solar-primary to-solar-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-solar-primary transition-colors">
                  Angebot
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Kostenloses Angebot anfordern
                </p>
                <div className="inline-flex items-center text-solar-primary font-semibold text-sm">
                  Angebot anfordern
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
