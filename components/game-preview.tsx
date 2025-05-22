"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import DisclaimerModal from "./disclaimer-modal"

export default function GamePreview() {
  const [showDisclaimerModal, setShowDisclaimerModal] = useState(false)

  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Régészeti Expedíció</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-4">Fedezd fel a régészet izgalmas világát</h3>
            <p className="text-lg mb-4">
              A "Régészeti Expedíció" játékban tapasztalt régész leszel, aki a legértékesebb műtárgyakat kutatja.
            </p>
            <p className="text-lg mb-6">
              Kattints az "Ásatás" gombra, hogy különböző helyeken próbálj szerencsét. Találhatsz értékes műtárgyakat,
              de vigyázz a bombákra és csapdákra, amelyek károsíthatják a kutatásodat!
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700"
                onClick={() => setShowDisclaimerModal(true)}
              >
                Játék
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <Card className="overflow-hidden border-amber-300">
              <CardContent className="p-0">
                <Image
                  src="/archaeology-expedition.png"
                  alt="Régészeti Expedíció"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Játék Jellemzői</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-amber-300">
              <CardContent className="pt-6">
                <div className="bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-amber-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">Dinamikus Játékmenet</h4>
                <p>Minden játék egyedi a műtárgyak véletlenszerű elhelyezkedése miatt az ásatási területen.</p>
              </CardContent>
            </Card>

            <Card className="border-amber-300">
              <CardContent className="pt-6">
                <div className="bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-amber-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">Virtuális Jutalmak</h4>
                <p>Gyűjts pontokat, szerezz eredményeket és növeld rangodat más régészek között.</p>
              </CardContent>
            </Card>

            <Card className="border-amber-300">
              <CardContent className="pt-6">
                <div className="bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-amber-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">Közösségi Interakció</h4>
                <p>Versenyezz barátaiddal, oszd meg eredményeidet és beszéld meg az ásatási stratégiákat.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {showDisclaimerModal && (
          <DisclaimerModal
            onClose={() => setShowDisclaimerModal(false)}
            showAgeVerification={true}
            redirectPath="/game"
          />
        )}
      </div>
    </section>
  )
}
