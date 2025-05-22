"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import DisclaimerModal from "@/components/disclaimer-modal"
import { Gem, Shovel, Skull, Bomb, Coins, Scroll, Star, ChevronUp, ArrowRight } from "lucide-react"

// Типи символів
type SymbolType = "gem" | "coins" | "skull" | "bomb" | "scroll" | "star"

// Інтерфейс для символу
interface GameSymbol {
  id: number
  type: SymbolType
  points: number
  revealed: boolean
  position: number
  row: number
}

// Інтерфейс для поп-апу
interface PopupInfo {
  show: boolean
  pointsChange: number
  bonus: number
  bonusMessage: string
}

export default function GamePage() {
  const [score, setScore] = useState(0)
  const [symbols, setSymbols] = useState<GameSymbol[]>([])
  const [isRtv, setIsRtv] = useState(false)
  const [rtvCount, setRtvCount] = useState(10)
  const [lastPointsChange, setLastPointsChange] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [showDisclaimer, setShowDisclaimer] = useState(false)
  const activeRow = 1 // Середній рядок завжди активний (0, 1, 2)
  const [popup, setPopup] = useState<PopupInfo>({
    show: false,
    pointsChange: 0,
    bonus: 0,
    bonusMessage: "",
  })

  const popupRef = useRef<HTMLDivElement>(null)

  // Конфігурація символів та їх вартості
  const symbolConfig = {
    gem: { points: 50, chance: 15, icon: Gem, color: "text-purple-500" },
    coins: { points: 25, chance: 20, icon: Coins, color: "text-amber-500" },
    skull: { points: -15, chance: 20, icon: Skull, color: "text-gray-700" },
    bomb: { points: -50, chance: 10, icon: Bomb, color: "text-red-500" },
    scroll: { points: 10, chance: 25, icon: Scroll, color: "text-amber-700" },
    star: { points: 100, chance: 10, icon: Star, color: "text-yellow-400" },
  }

  // Ініціалізація гри
  useEffect(() => {
    initializeGame()
  }, [])

  // Закриття поп-апу при кліку поза ним
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setPopup((prev) => ({ ...prev, show: false }))
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Функція ініціалізації гри
  const initializeGame = () => {
    setScore(0)
    setRtvCount(10)
    setGameOver(false)
    setLastPointsChange(0)
    setSymbols([])
    setPopup({
      show: false,
      pointsChange: 0,
      bonus: 0,
      bonusMessage: "",
    })
  }

  // Функція для отримання випадкового символу
  const getRandomSymbol = (): SymbolType => {
    const symbolTypes = Object.keys(symbolConfig) as SymbolType[]
    const totalChance = Object.values(symbolConfig).reduce((sum, config) => sum + config.chance, 0)

    const random = Math.random() * totalChance
    let cumulativeChance = 0

    for (const type of symbolTypes) {
      cumulativeChance += symbolConfig[type].chance
      if (random <= cumulativeChance) {
        return type
      }
    }

    return "scroll" // Запасний варіант
  }

  // Функція для створення нових рядків символів
  const generateSymbolLines = () => {
    if (rtvCount <= 0 || isRtv) {
      if (rtvCount <= 0) setGameOver(true)
      return
    }

    // Закриваємо поп-ап, якщо він відкритий
    setPopup((prev) => ({ ...prev, show: false }))

    setIsRtv(true)
    setRtvCount((prev) => prev - 1)

    // Створюємо нові символи для 3 рядків
    const lineLength = Math.floor(Math.random() * 2) + 4 // Від 4 до 5 символів у рядку
    const newSymbols: GameSymbol[] = []
    const baseId = Date.now()

    // Генеруємо символи для всіх 3 рядків
    for (let row = 0; row < 3; row++) {
      for (let i = 0; i < lineLength; i++) {
        const type = getRandomSymbol()
        newSymbols.push({
          id: baseId + row * 100 + i,
          type,
          points: symbolConfig[type].points,
          revealed: false,
          position: i,
          row,
        })
      }
    }

    // Додаємо символи з анімацією появи
    setSymbols([])

    // Послідовно відкриваємо символи
    const delay = 150
    let allRevealed = 0
    const totalSymbols = newSymbols.length

    // Спочатку показуємо перший стовпець всіх рядків, потім другий і т.д.
    for (let col = 0; col < lineLength; col++) {
      for (let row = 0; row < 3; row++) {
        const symbolIndex = row * lineLength + col

        setTimeout(
          () => {
            setSymbols((prev) => {
              const updatedSymbols = [...prev]
              const newSymbol = { ...newSymbols[symbolIndex], revealed: true }

              // Знаходимо правильний індекс для вставки
              const existingIndex = updatedSymbols.findIndex((s) => s.id === newSymbol.id)
              if (existingIndex >= 0) {
                updatedSymbols[existingIndex] = newSymbol
              } else {
                updatedSymbols.push(newSymbol)
              }

              return updatedSymbols
            })

            allRevealed++

            // Коли всі символи відкриті, обчислюємо результат
            if (allRevealed === totalSymbols) {
              setTimeout(() => {
                // Отримуємо символи активного рядка
                const activeRowSymbols = newSymbols.filter((s) => s.row === activeRow)

                // Обчислюємо бали за активний рядок
                const pointsChange = activeRowSymbols.reduce((sum, symbol) => sum + symbol.points, 0)

                // Оновлюємо рахунок
                setScore((prev) => prev + pointsChange)
                setLastPointsChange(pointsChange)

                // Перевіряємо спеціальні комбінації і показуємо поп-ап
                const { bonus, bonusMessage } = checkSpecialCombinations(activeRowSymbols)

                // Показуємо поп-ап з результатами
                setPopup({
                  show: true,
                  pointsChange,
                  bonus,
                  bonusMessage,
                })

                // Якщо є бонус, додаємо його до рахунку
                if (bonus > 0) {
                  setTimeout(() => {
                    setScore((prev) => prev + bonus)
                    setLastPointsChange(bonus)
                  }, 1000)
                }

                setIsRtv(false)
              }, 500)
            }
          },
          delay * (col * 3 + row + 1),
        )
      }
    }
  }

  // Перевірка спеціальних комбінацій
  const checkSpecialCombinations = (currentSymbols: GameSymbol[]) => {
    // Перевірка на три однакових символи підряд
    const types = currentSymbols.map((s) => s.type)
    let bonus = 0
    let bonusMessage = ""

    // Перевірка на три однакових символи
    const typeCounts: Record<SymbolType, number> = {
      gem: 0,
      coins: 0,
      skull: 0,
      bomb: 0,
      scroll: 0,
      star: 0,
    }

    types.forEach((type) => {
      typeCounts[type]++
    })

    // Бонус за три однакових
    Object.entries(typeCounts).forEach(([type, count]) => {
      if (count >= 3) {
        const symbolType = type as SymbolType
        const basePoints = symbolConfig[symbolType].points
        bonus += basePoints * count * 2
        bonusMessage = `${count}x ${type} комбінація! +${basePoints * count * 2} бонус!`
      }
    })

    // Бонус за всі різні символи
    const uniqueTypes = new Set(types)
    if (uniqueTypes.size === currentSymbols.length && currentSymbols.length >= 4) {
      bonus += 100
      bonusMessage = "Всі різні символи! +100 бонус!"
    }

    return { bonus, bonusMessage }
  }

  // Отримання іконки для символу
  const getSymbolIcon = (type: SymbolType, size = 36) => {
    const IconComponent = symbolConfig[type].icon
    return <IconComponent size={size} className={`${symbolConfig[type].color} mx-auto`} />
  }

  // Закриття поп-апу
  const closePopup = () => {
    setPopup((prev) => ({ ...prev, show: false }))
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-red-600 text-white p-2 text-center text-sm">
        <p>Ez egy ingyenes közösségi platform, kizárólag 18 éven felülieknek.</p>
      </div>

      <Header />

      <main className="flex-grow py-8 bg-amber-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center">Régészeti Szerencsekerék</h1>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <Card className="border-amber-300">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <h2 className="text-xl font-semibold mb-2">Pontszámod</h2>
                      <p className="text-3xl font-bold text-amber-600">{score}</p>

                      {lastPointsChange !== 0 && (
                        <p
                          className={`text-lg font-semibold mt-2 ${lastPointsChange > 0 ? "text-green-600" : "text-red-600"}`}
                        >
                          {lastPointsChange > 0 ? `+${lastPointsChange}` : lastPointsChange}
                        </p>
                      )}
                    </div>

                    <div className="text-center mb-6">
                      <h2 className="text-xl font-semibold mb-2">Hátralévő Pörgetések</h2>
                      <p className="text-3xl font-bold text-amber-500">{rtvCount}</p>
                    </div>

                    <div className="text-center mb-6 relative">
                      <Button
                        onClick={generateSymbolLines}
                        disabled={gameOver || isRtv || rtvCount <= 0}
                        className="bg-amber-600 hover:bg-amber-700 w-full py-6 text-lg"
                      >
                        {isRtv ? "Pörgetés folyamatban..." : "Pörgetés!"}
                      </Button>

                      {/* Поп-ап з результатами */}
                      {popup.show && (
                        <div
                          ref={popupRef}
                          className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg border-2 border-amber-400 shadow-lg p-4 z-10 animate-popup"
                        >
                          <button
                            onClick={closePopup}
                            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                          >
                            <ChevronUp size={16} />
                          </button>

                          <h3 className="font-bold text-lg mb-2">Eredmény</h3>

                          <div className="flex justify-between items-center mb-2">
                            <span>Alap pontok:</span>
                            <span
                              className={
                                popup.pointsChange >= 0 ? "text-green-600 font-bold" : "text-red-600 font-bold"
                              }
                            >
                              {popup.pointsChange >= 0 ? `+${popup.pointsChange}` : popup.pointsChange}
                            </span>
                          </div>

                          {popup.bonus > 0 && (
                            <div className="flex justify-between items-center mb-2">
                              <span>Bónusz:</span>
                              <span className="text-green-600 font-bold">+{popup.bonus}</span>
                            </div>
                          )}

                          <div className="border-t border-gray-200 mt-2 pt-2 flex justify-between items-center">
                            <span className="font-bold">Összesen:</span>
                            <span
                              className={
                                popup.pointsChange + popup.bonus >= 0
                                  ? "text-green-600 font-bold"
                                  : "text-red-600 font-bold"
                              }
                            >
                              {popup.pointsChange + popup.bonus >= 0
                                ? `+${popup.pointsChange + popup.bonus}`
                                : popup.pointsChange + popup.bonus}
                            </span>
                          </div>

                          {popup.bonusMessage && (
                            <div className="mt-2 p-2 bg-amber-100 rounded-lg text-amber-800 text-sm">
                              {popup.bonusMessage}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {gameOver && (
                      <div className="text-center mb-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                        <h3 className="text-lg font-semibold mb-2">Játék Vége!</h3>
                        <p className="mb-4">
                          Végső pontszámod: <span className="font-bold">{score}</span>
                        </p>
                        <Button onClick={initializeGame} className="bg-amber-600 hover:bg-amber-700">
                          Új Játék
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              <div className="md:w-2/3">
                <Card className="border-amber-300">
                  <CardContent className="p-6">
                    <div className="min-h-[400px] flex flex-col items-center justify-center">
                      {symbols.length === 0 ? (
                        <div className="text-center p-8">
                          <Shovel className="h-16 w-16 text-amber-400 mx-auto mb-4" />
                          <p className="text-amber-800 text-lg">Kattints a "Pörgetés" gombra a játék indításához!</p>
                        </div>
                      ) : (
                        <div className="w-full">
                          {/* Відображення символів у 3 рядки */}
                          <div className="space-y-4 mb-4">
                            {[0, 1, 2].map((row) => (
                              <div
                                key={row}
                                className={`flex justify-center items-center gap-2 p-2 rounded-lg relative ${row === activeRow ? "bg-amber-100 border-2 border-amber-500" : ""
                                  }`}
                              >
                                {row === activeRow && (
                                  <div className="absolute -left-6 flex items-center">
                                    <ArrowRight className="h-5 w-5 text-amber-600" />
                                  </div>
                                )}
                                {symbols
                                  .filter((s) => s.row === row)
                                  .sort((a, b) => a.position - b.position)
                                  .map((symbol) => (
                                    <div
                                      key={symbol.id}
                                      className={`w-16 h-16 flex flex-col items-center justify-center rounded-lg border-2 
                                        ${symbol.revealed
                                          ? "animate-bounce-in border-amber-400 bg-amber-50"
                                          : "opacity-0"
                                        }`}
                                      style={{
                                        animationDelay: `${symbol.position * 0.1}s`,
                                        transform: `rotate(${Math.random() * 6 - 3}deg)`,
                                        transition: "all 0.3s ease",
                                      }}
                                    >
                                      {getSymbolIcon(symbol.type, 28)}
                                      <span
                                        className={`mt-1 text-xs font-bold px-1 rounded ${symbol.points > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                          }`}
                                      >
                                        {symbol.points > 0 ? `+${symbol.points}` : symbol.points}
                                      </span>
                                    </div>
                                  ))}
                              </div>
                            ))}
                          </div>

                          <div className="text-center text-sm text-amber-700 mb-4">
                            <p>Csak a középső sor számít a pontszámításnál!</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-6 grid grid-cols-6 gap-2">
                  {Object.entries(symbolConfig).map(([type, config]) => (
                    <div key={type} className="bg-white p-2 rounded-lg border border-amber-200 text-center">
                      {getSymbolIcon(type as SymbolType, 24)}
                      <span className={`text-xs font-bold ${config.points > 0 ? "text-green-600" : "text-red-600"}`}>
                        {config.points > 0 ? `+${config.points}` : config.points}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <DisclaimerModal />

      <style jsx global>{`
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.05) rotate(${Math.random() * 20 - 10}deg);
          }
          70% { transform: scale(0.9) rotate(${Math.random() * 10 - 5}deg); }
          100% { transform: scale(1) rotate(${Math.random() * 5 - 2.5}deg); }
        }
        .animate-bounce-in {
          animation: bounce-in 0.6s ease forwards;
        }
        
        @keyframes popup {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-popup {
          animation: popup 0.3s ease forwards;
        }
      `}</style>
    </div>
  )
}
