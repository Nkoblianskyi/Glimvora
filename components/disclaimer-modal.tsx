"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle, X } from "lucide-react"
import { useRouter } from "next/navigation"

interface DisclaimerModalProps {
  onClose?: () => void
  showAgeVerification?: boolean
  redirectPath?: string
}

export default function DisclaimerModal({ onClose, showAgeVerification = false, redirectPath }: DisclaimerModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleClose = () => {
    setIsOpen(false)
    if (onClose) onClose()
  }

  useEffect(() => {
    // Ellenőrizzük, hogy a felhasználó már látta-e a figyelmeztetést
    const hasSeenDisclaimer = localStorage.getItem("hasSeenDisclaimer")

    if (!hasSeenDisclaimer) {
      setIsOpen(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("hasSeenDisclaimer", "true")
    setIsOpen(false)
    if (onClose) onClose()

    // If age verification is shown and redirectPath is provided, navigate to that path
    if (showAgeVerification && redirectPath) {
      router.push(redirectPath)
    }
  }

  const handleDecline = () => {
    setIsOpen(false)
    if (onClose) onClose()
  }

  if (!isOpen && !onClose) return null

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${isOpen || onClose ? "block" : "hidden"}`}>
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={handleClose}></div>

      <div className="relative bg-white rounded-lg max-w-md w-full mx-4 p-6 shadow-xl">
        <div className="absolute top-4 right-4">
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex items-center justify-center mb-4 text-amber-500">
          <AlertTriangle className="h-12 w-12" />
        </div>

        <h3 className="text-xl font-bold text-center mb-4">18+ Figyelmeztetés</h3>

        <div className="space-y-4 mb-6">
          <p>Ez a platform kizárólag 18 éven felüli felhasználók számára készült.</p>
          <p>Szeretnénk hangsúlyozni, hogy:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Ez egy közösségi platform</li>
            <li>Minden játék teljesen ingyenes</li>
            <li>A platform nem igényel pénzügyi befektetést</li>
            <li>A platform nem biztosít lehetőséget valódi pénz nyereményre</li>
            <li>Minden virtuális tárgy és pont nem rendelkezik valós értékkel</li>
          </ul>
          <p>
            A platform használatának folytatásával megerősíted, hogy elmúltál 18 éves, és elfogadod a felhasználási
            feltételeinket.
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <Button onClick={handleAccept} className="bg-amber-500 hover:bg-amber-600 text-black">
            {showAgeVerification ? "Igen, elmúltam 18 éves" : "Megértettem és elfogadom"}
          </Button>

          {showAgeVerification && (
            <Button onClick={handleDecline} variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
              Nem, még nem vagyok 18 éves
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
