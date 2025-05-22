import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Globe, Shield } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative">
      {/* Декоративний верхній елемент */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700"></div>

      {/* Хвилястий розділювач */}
      <div className="absolute top-0 left-0 right-0 h-12 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-16 fill-amber-800 transform translate-y-1/2"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>

      <div className="pt-16 bg-amber-900">
        {/* Основний контент футера */}
        <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6 sm:gap-8">
            {/* Логотип та інформація про компанію */}
            <div className="md:col-span-3">
              <div className="flex items-center mb-4">
                <div className="bg-amber-800 p-2 rounded-full mr-3">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-amber-300" />
                </div>
                <span className="text-xl sm:text-2xl font-bold text-white">Glimvora</span>
              </div>

              <p className="text-amber-100 text-sm sm:text-base mb-4">
                Közösségi platform a régészeti kalandok szerelmeseinek. Játssz ingyen, versenyezz barátaiddal.
              </p>
            </div>

            {/* Навігація */}
            <div className="md:col-span-2">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white border-b border-amber-800 pb-2">
                Navigáció
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-amber-200 hover:text-white transition-colors flex items-center text-sm sm:text-base"
                  >
                    <span className="bg-amber-800/50 w-1.5 h-1.5 rounded-full mr-2"></span>
                    Főoldal
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-amber-200 hover:text-white transition-colors flex items-center text-sm sm:text-base"
                  >
                    <span className="bg-amber-800/50 w-1.5 h-1.5 rounded-full mr-2"></span>
                    Kapcsolat
                  </Link>
                </li>
              </ul>
            </div>

            {/* Jogi információk */}
            <div className="md:col-span-2">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white border-b border-amber-800 pb-2">
                Jogi információk
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/terms"
                    className="text-amber-200 hover:text-white transition-colors flex items-center text-sm sm:text-base"
                  >
                    <span className="bg-amber-800/50 w-1.5 h-1.5 rounded-full mr-2"></span>
                    Felhasználási feltételek
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-amber-200 hover:text-white transition-colors flex items-center text-sm sm:text-base"
                  >
                    <span className="bg-amber-800/50 w-1.5 h-1.5 rounded-full mr-2"></span>
                    Adatvédelmi irányelvek
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies"
                    className="text-amber-200 hover:text-white transition-colors flex items-center text-sm sm:text-base"
                  >
                    <span className="bg-amber-800/50 w-1.5 h-1.5 rounded-full mr-2"></span>
                    Cookie szabályzat
                  </Link>
                </li>
                <li>
                  <Link
                    href="/disclaimer"
                    className="text-amber-200 hover:text-white transition-colors flex items-center text-sm sm:text-base"
                  >
                    <span className="bg-amber-800/50 w-1.5 h-1.5 rounded-full mr-2"></span>
                    Felelősségkizárás
                  </Link>
                </li>
              </ul>
            </div>

            {/* Розташування та контактна інформація */}
            <div className="md:col-span-5">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white border-b border-amber-800 pb-2">
                Elérhetőségeink
              </h3>

              <div className="bg-gradient-to-br from-amber-800 to-amber-900 rounded-lg overflow-hidden shadow-lg border border-amber-700 p-3 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                  <div className="flex-shrink-0 bg-amber-700/50 p-2 sm:p-3 rounded-lg mb-3 sm:mb-0 sm:mr-4 inline-flex">
                    <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-amber-300" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1 text-sm sm:text-base">Központi Irodánk</h4>
                    <p className="text-amber-200 text-xs sm:text-sm">Rákóczi út 15, Debrecen, 4024, Magyarország</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="flex items-center bg-amber-800/30 p-2 sm:p-3 rounded-lg">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400 mr-2 sm:mr-3" />
                    <div>
                      <div className="text-amber-200 text-xs">Email:</div>
                      <a
                        href="mailto:contact@glimvora.com"
                        className="text-white hover:text-amber-300 transition-colors text-xs sm:text-sm"
                      >
                        contact@glimvora.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center bg-amber-800/30 p-2 sm:p-3 rounded-lg">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400 mr-2 sm:mr-3" />
                    <div>
                      <div className="text-amber-200 text-xs">Telefon:</div>
                      <a
                        href="tel:+3652551236"
                        className="text-white hover:text-amber-300 transition-colors text-xs sm:text-sm"
                      >
                        +36 52 551 2361
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Figyelmeztetés */}
        <div className="border-t border-amber-800/50 py-6 sm:py-8">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="flex flex-col sm:flex-row items-center justify-between bg-amber-800/30 p-3 sm:p-4 rounded-lg border border-amber-700/50">
              <div className="flex items-center mb-3 sm:mb-0">
                <div className="bg-red-600 text-white font-bold text-lg sm:text-xl px-2 sm:px-3 py-1 rounded-md mr-2 sm:mr-3 flex items-center justify-center min-w-[36px] sm:min-w-[40px]">
                  18+
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm sm:text-base">Figyelmeztetés</h4>
                  <p className="text-amber-200 text-xs sm:text-sm">Kizárólag 18 éven felüli felhasználók számára</p>
                </div>
              </div>

              <p className="text-amber-100 text-xs sm:text-sm text-center sm:text-right">
                Ez egy közösségi platform, teljesen ingyenes, nem igényel pénzügyi befektetést, nem biztosít lehetőséget
                valódi pénz nyereményre.
              </p>
            </div>
          </div>
        </div>

        {/* Партнери та логотипи */}
        <div className="border-t border-amber-800/50 py-6 sm:py-8">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-amber-200 text-xs sm:text-sm text-center sm:text-left mb-4 sm:mb-0">
                Minden virtuális tárgy és pont kizárólag szórakoztatási célokat szolgál, és nem rendelkezik valós
                értékkel.
              </p>

              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <a
                  href="https://www.gamcare.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-lg block"
                >
                  <Image
                    src="/logo_c5e56a7f.svg"
                    alt="GamCare"
                    width={80}
                    height={32}
                    className="h-6 sm:h-8 w-auto"
                  />
                </a>
                <a
                  href="https://www.begambleaware.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-lg block"
                >
                  <Image
                    src="/logo-orange.webp"
                    alt="GambleAware"
                    width={80}
                    height={32}
                    className="h-6 sm:h-8 w-auto"
                  />
                </a>
                <a
                  href="https://www.gamstop.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-lg block"
                >
                  <Image
                    src="/logo.svg"
                    alt="GamStop"
                    width={80}
                    height={32}
                    className="h-6 sm:h-8 w-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Нижній футер */}
        <div className="bg-amber-950 py-4 sm:py-6">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="flex items-center mb-3 sm:mb-0">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400 mr-2" />
                <p className="text-amber-200 text-xs sm:text-sm">Biztonságos és felelősségteljes játék</p>
              </div>

              <div className="flex items-center">
                <Globe className="h-3 w-3 sm:h-4 sm:w-4 text-amber-400 mr-2" />
                <p className="text-amber-200 text-xs sm:text-sm">
                  © {new Date().getFullYear()} Glimvora. Minden jog fenntartva.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
