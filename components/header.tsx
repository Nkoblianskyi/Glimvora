"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Anchor, ChevronDown } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // Відстеження прокрутки для зміни стилю хедера
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/95 py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-amber-500 to-amber-700 p-2">
                <Anchor className="h-full w-full text-white" />
              </div>
              <span className="text-xl font-bold text-amber-900">
                <span className="text-amber-600">Glim</span>vora
              </span>
            </Link>
          </div>

          {/* Навігація для десктопу */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="px-3 py-2 text-gray-700 hover:text-amber-600 rounded-md transition-colors font-medium"
            >
              Főoldal
            </Link>

            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="px-3 py-2 text-gray-700 hover:text-amber-600 rounded-md transition-colors font-medium flex items-center"
              >
                Szabályzatok <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-1 w-56 bg-white rounded-md shadow-lg overflow-hidden z-20 border border-gray-200">
                  <div className="py-1">
                    <Link
                      href="/terms"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Felhasználási feltételek
                    </Link>
                    <Link
                      href="/privacy"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Adatvédelmi irányelvek
                    </Link>
                    <Link
                      href="/cookies"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Cookie szabályzat
                    </Link>
                    <Link
                      href="/disclaimer"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Felelősségkizárás
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="#contact"
              className="px-3 py-2 text-gray-700 hover:text-amber-600 rounded-md transition-colors font-medium"
            >
              Kapcsolat
            </Link>
          </nav>

          {/* Мобільне меню */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-amber-600 focus:outline-none"
              aria-label={isMenuOpen ? "Menü bezárása" : "Menü megnyitása"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Мобільне меню випадаюче */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100 absolute left-0 right-0 z-20">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Főoldal
              </Link>

              <div className="border-t border-gray-100 pt-2">
                <p className="px-3 py-1 text-xs text-gray-500 uppercase font-semibold">Szabályzatok</p>
                <Link
                  href="/terms"
                  className="px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors font-medium block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Felhasználási feltételek
                </Link>
                <Link
                  href="/privacy"
                  className="px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors font-medium block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Adatvédelmi irányelvek
                </Link>
                <Link
                  href="/cookies"
                  className="px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors font-medium block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cookie szabályzat
                </Link>
                <Link
                  href="/disclaimer"
                  className="px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors font-medium block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Felelősségkizárás
                </Link>
              </div>

              <Link
                href="#contact"
                className="px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Kapcsolat
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Декоративний елемент внизу хедера */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-600 to-amber-400"></div>
    </header>
  )
}
