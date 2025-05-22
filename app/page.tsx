"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import DisclaimerModal from "@/components/disclaimer-modal"
import ContactForm from "@/components/contact-form"
import { Shovel, Gem, Scroll, Skull, Coins, Bomb, AlertTriangle, X } from "lucide-react"

export default function Home() {
  const [showAgeVerification, setShowAgeVerification] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showTopBanner, setShowTopBanner] = useState(true)

  // Egér pozíció követése az animált háttérhez
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {showTopBanner && (
        <div className="bg-gradient-to-r from-amber-800 via-amber-700 to-amber-800 text-white py-2 px-4 relative">
          <div className="container mx-auto flex items-center justify-center">
            <div className="flex items-center max-w-4xl text-center sm:text-left">
              <AlertTriangle className="h-5 w-5 text-amber-300 mr-2 flex-shrink-0 hidden sm:block" />
              <p className="text-xs sm:text-sm">
                <span className="font-semibold">Figyelem:</span> Ez egy ingyenes közösségi platform, amely nem biztosít
                lehetőséget valódi pénz nyereményre vagy veszteségre. Kizárólag 18 éven felüli felhasználók számára.
              </p>
            </div>
            <button
              onClick={() => setShowTopBanner(false)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white"
              aria-label="Bezárás"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[90vh] flex items-center">
          {/* Animált háttér */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 z-0"
            style={{
              backgroundPosition: `${mousePosition.x * 10}% ${mousePosition.y * 10}%`,
              transition: "background-position 0.3s ease-out",
            }}
          >
            {/* Animált részecskék */}
            <div className="absolute inset-0 opacity-20">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-amber-300"
                  style={{
                    width: `${Math.random() * 20 + 5}px`,
                    height: `${Math.random() * 20 + 5}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.5 + 0.3,
                    animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                    animationDelay: `${Math.random() * 5}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Dekoratív elemek */}
          <div className="absolute inset-0 z-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
          </div>

          {/* Tartalom */}
          <div className="container mx-auto px-4 relative z-20 py-20 flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white leading-tight tracking-tight animate-fadeIn">
              <span className="inline-block">Régészeti</span>{" "}
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-200">
                Expedíció
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-10 text-amber-100 max-w-3xl mx-auto leading-relaxed animate-fadeInUp">
              Közösségi platform a régészeti kalandok szerelmeseinek. Játssz ingyen, versenyezz barátaiddal és hódítsd
              meg az ősi civilizációk virtuális romjait!
            </p>

            <div className="mt-16 relative">
              <Image
                src="/archaeology-hero.png"
                alt="Régészeti expedíció"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl border-4 border-amber-800/30 object-cover"
              />
              <div className="absolute -inset-2 bg-amber-500/20 rounded-lg blur-md -z-10"></div>
            </div>
          </div>
        </section>

        {/* 1. Секція: Опис компанії */}
        <section className="py-16 bg-gradient-to-b from-amber-900 to-amber-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Glimvora</h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>

              <p className="text-xl mb-6">
                A Glimvora egy innovatív fejlesztőcég, amely egy egyedülálló közösségi platformot hozott létre a
                régészeti kalandok szerelmeseinek.
              </p>

              <div className="bg-amber-800/50 p-6 rounded-lg border border-amber-700 mb-8">
                <h3 className="text-2xl font-semibold mb-4">Fontos információk a platformunkról:</h3>
                <ul className="text-left space-y-3 text-amber-100">
                  <li className="flex items-start">
                    <span className="bg-amber-600 p-1 rounded-full mr-3 mt-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span>
                      Platformunk <strong>teljesen ingyenes</strong>, nem igényel pénzügyi befektetést.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-amber-600 p-1 rounded-full mr-3 mt-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span>Nem biztosít lehetőséget valódi pénz nyereményre vagy veszteségre.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-amber-600 p-1 rounded-full mr-3 mt-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span>Minden virtuális tárgy és pont kizárólag szórakoztatási célokat szolgál.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-600 p-1 rounded-full mr-3 mt-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        ></path>
                      </svg>
                    </span>
                    <span>
                      A platform <strong>kizárólag 18 éven felüli</strong> felhasználók számára készült.
                    </span>
                  </li>
                </ul>
              </div>

              <p className="text-lg">
                Célunk egy biztonságos és szórakoztató környezet biztosítása, ahol a felhasználók élvezhetik a régészeti
                felfedezés izgalmát, versenyezhetnek barátaikkal, és fejleszthetik készségeiket - mindezt pénzügyi
                kockázat nélkül.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Секція: Опис гри про археолога */}
        <section className="py-16 bg-amber-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-amber-900">Régészeti Expedíció</h2>
                  <div className="w-20 h-1 bg-amber-500 mb-8"></div>

                  <p className="text-lg mb-4">
                    A "Régészeti Expedíció" játékban egy tapasztalt régész szerepébe bújhatsz, aki ősi civilizációk
                    nyomait kutatja.
                  </p>

                  <p className="text-lg mb-4">
                    Kalandod egy titokzatos ásatási területen kezdődik, ahol értékes műtárgyak és rejtett kincsek várnak
                    felfedezésre. Minden ásatás izgalmas lehetőségeket rejt, de veszélyeket is tartogat.
                  </p>

                  <p className="text-lg mb-6">
                    Használd régészeti eszközeidet, hogy feltárd a múlt titkait, gyűjts pontokat, és válj a
                    legelismertebb régésszé a ranglistán!
                  </p>

                  <div className="bg-amber-100 p-4 rounded-lg border border-amber-200 mb-6">
                    <p className="text-amber-800 font-medium">
                      A játék teljesen ingyenes, és kizárólag szórakoztatási célokat szolgál. Nincs lehetőség valódi
                      pénz nyereményre vagy veszteségre.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <Image
                    src="/archaeology-expedition.png"
                    alt="Régészeti Expedíció"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl border-4 border-amber-200"
                  />
                  <div className="absolute -inset-4 bg-amber-500/10 rounded-xl blur-md -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Секція: Опис знарядь і знахідок */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center text-amber-900">Régészeti Eszközök és Leletek</h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-12"></div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 text-center">
                  <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shovel className="h-8 w-8 text-amber-700" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-amber-900">Ásó</h3>
                  <p className="text-gray-700">
                    Az ásó a régész legfontosabb eszköze. Használd az ásatási területek feltárásához és értékes leletek
                    felfedezéséhez.
                  </p>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 text-center">
                  <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Scroll className="h-8 w-8 text-amber-700" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-amber-900">Térkép</h3>
                  <p className="text-gray-700">
                    A térkép segít navigálni az ásatási területen. Jelöli a már feltárt helyeket és segít megtervezni a
                    következő ásatást.
                  </p>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 text-center">
                  <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gem className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-amber-900">Ecset</h3>
                  <p className="text-gray-700">
                    Az ecset a finom munkákhoz szükséges. Használd a törékeny leletek megtisztításához és a részletek
                    feltárásához.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-6 text-center text-amber-900">Lehetséges Leletek</h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 text-center">
                  <Gem className="h-10 w-10 text-purple-500 mx-auto mb-2" />
                  <h4 className="font-medium text-amber-900">Műtárgy</h4>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 text-center">
                  <Coins className="h-10 w-10 text-amber-500 mx-auto mb-2" strokeWidth={3} />
                  <h4 className="font-medium text-amber-900">Kincs</h4>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 text-center">
                  <Skull className="h-10 w-10 text-gray-700 mx-auto mb-2" />
                  <h4 className="font-medium text-amber-900">Koponya</h4>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 text-center">
                  <Bomb className="h-10 w-10 text-red-500 mx-auto mb-2" />
                  <h4 className="font-medium text-amber-900">Bomba</h4>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 text-center">
                  <Coins className="h-10 w-10 text-amber-300 mx-auto mb-2" />
                  <h4 className="font-medium text-amber-900">Érmék</h4>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 text-center">
                  <Scroll className="h-10 w-10 text-amber-700 mx-auto mb-2" />
                  <h4 className="font-medium text-amber-900">Tekercs</h4>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-500 mt-4">
                  A játék kizárólag 18 éven felüli felhasználók számára készült.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Контактна форма */}
        <ContactForm />
      </main>

      <Footer />

      {showAgeVerification && (
        <DisclaimerModal
          onClose={() => setShowAgeVerification(false)}
          showAgeVerification={true}
          redirectPath="/game"
        />
      )}
    </div>
  )
}
