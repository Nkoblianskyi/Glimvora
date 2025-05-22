"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Szimulált form küldés
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-amber-900">Kapcsolat</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-amber-900">Lépjen kapcsolatba velünk</h3>
              <p className="text-lg mb-8 text-gray-700">
                Kérdése van a platformunkkal kapcsolatban? Küldjön üzenetet, és csapatunk hamarosan válaszol Önnek.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900">Email</h4>
                    <p className="text-gray-700">contact@glimvora.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900">Telefon</h4>
                    <p className="text-gray-700">+36 52 551 2361</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900">Cím</h4>
                    <p className="text-gray-700">Rákóczi út 15, Debrecen, 4024</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-amber-100 rounded-lg border border-amber-200">
                <p className="text-amber-800 text-sm">
                  Emlékeztetjük, hogy platformunk kizárólag 18 éven felüli felhasználók számára készült, és teljesen
                  ingyenes. Nem biztosít lehetőséget valódi pénz nyereményre vagy veszteségre.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-amber-200">
              <h3 className="text-xl font-semibold mb-6 text-amber-900">Küldjön üzenetet</h3>

              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Név
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Üzenet
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        "Küldés folyamatban..."
                      ) : (
                        <>
                          <Send className="h-4 w-4" /> Üzenet küldése
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </form>

              {submitSuccess && (
                <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
                  Köszönjük üzenetét! Hamarosan felvesszük Önnel a kapcsolatot.
                </div>
              )}

              {submitError && (
                <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
                  Hiba történt az üzenet küldése közben. Kérjük, próbálja újra később.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
