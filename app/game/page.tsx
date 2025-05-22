"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import DisclaimerModal from "@/components/disclaimer-modal"
import { Gem, Shovel, Skull, Bomb, Book, Scroll, Trophy, ChevronUp, ArrowRight, Award, TrendingUp } from "lucide-react"

// Типи символів
type SymbolType = "gem" | "book" | "skull" | "bomb" | "scroll" | "trophy"

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
  extraPoints: number
  specialMessage: string
}

// Інтерфейс для повідомлення про підвищення рівня
interface LevelUpInfo {
  show: boolean
  newLevel: number
  rewards: string[]
}

// Конфігурація рівнів
const levelConfig = [
  { level: 1, title: "Kezdő Régész", expRequired: 0, pointsMultiplier: 1.0 },
  { level: 2, title: "Amatőr Kutató", expRequired: 100, pointsMultiplier: 1.1 },
  { level: 3, title: "Tapasztalt Ásató", expRequired: 250, pointsMultiplier: 1.2 },
  { level: 4, title: "Szakértő Régész", expRequired: 500, pointsMultiplier: 1.3 },
  { level: 5, title: "Mester Archeológus", expRequired: 1000, pointsMultiplier: 1.4 },
  { level: 6, title: "Legendás Felfedező", expRequired: 2000, pointsMultiplier: 1.5 },
  { level: 7, title: "Ősi Titkok Tudója", expRequired: 3500, pointsMultiplier: 1.6 },
  { level: 8, title: "Történelem Őrzője", expRequired: 5000, pointsMultiplier: 1.7 },
  { level: 9, title: "Civilizációk Ismerője", expRequired: 7500, pointsMultiplier: 1.8 },
  { level: 10, title: "Régészet Professzora", expRequired: 10000, pointsMultiplier: 2.0 },
]

export default function GamePage() {
  const [score, setScore] = useState(0)
  const [symbols, setSymbols] = useState<GameSymbol[]>([])
  const [isAnimating, setIsAnimating] = useState(false)
  const [attemptsLeft, setAttemptsLeft] = useState(10)
  const [lastPointsChange, setLastPointsChange] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [showDisclaimer, setShowDisclaimer] = useState(false)
  const activeRow = 1 // Середній рядок завжди активний (0, 1, 2)

  // Нові стани для системи рівнів
  const [level, setLevel] = useState(1)
  const [experience, setExperience] = useState(0)
  const [levelUpInfo, setLevelUpInfo] = useState<LevelUpInfo>({
    show: false,
    newLevel: 1,
    rewards: [],
  })

  const [popup, setPopup] = useState<PopupInfo>({
    show: false,
    pointsChange: 0,
    extraPoints: 0,
    specialMessage: "",
  })

  const popupRef = useRef<HTMLDivElement>(null)
  const levelUpRef = useRef<HTMLDivElement>(null)

  // Конфігурація символів та їх вартості
  const symbolConfig = {
    gem: { points: 50, chance: 15, icon: Gem, color: "text-purple-500" },
    book: { points: 25, chance: 20, icon: Book, color: "text-amber-500" },
    skull: { points: -15, chance: 20, icon: Skull, color: "text-gray-700" },
    bomb: { points: -50, chance: 10, icon: Bomb, color: "text-red-500" },
    scroll: { points: 10, chance: 25, icon: Scroll, color: "text-amber-700" },
    trophy: { points: 100, chance: 10, icon: Trophy, color: "text-yellow-400" },
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
      if (levelUpRef.current && !levelUpRef.current.contains(event.target as Node)) {
        setLevelUpInfo((prev) => ({ ...prev, show: false }))
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
    setAttemptsLeft(10)
    setGameOver(false)
    setLastPointsChange(0)
    setSymbols([])
    setPopup({
      show: false,
      pointsChange: 0,
      extraPoints: 0,
      specialMessage: "",
    })
    // Зберігаємо рівень і досвід між іграми
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
    if (attemptsLeft <= 0 || isAnimating) {
      if (attemptsLeft <= 0) setGameOver(true)
      return
    }

    // Bezárjuk a felugró ablakokat, ha nyitva vannak
    setPopup((prev) => ({ ...prev, show: false }))
    setLevelUpInfo((prev) => ({ ...prev, show: false }))

    setIsAnimating(true)
    setAttemptsLeft((prev) => prev - 1)

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

    // Hozzáadjuk a szimbólumokat megjelenési animációval
    setSymbols([])

    // Sorban feltárjuk a szimbólumokat
    const delay = 150
    let allRevealed = 0
    const totalSymbols = newSymbols.length

    // Először megjelenítjük az első oszlopot minden sorban, majd a másodikat, stb.
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

            // Amikor minden szimbólum feltárult, kiszámítjuk az eredményt
            if (allRevealed === totalSymbols) {
              setTimeout(() => {
                // Отримуємо символи активного рядка
                const activeRowSymbols = newSymbols.filter((s) => s.row === activeRow)

                // Обчислюємо бали за активний рядок з урахуванням множника рівня
                const levelMultiplier = getCurrentLevelMultiplier()
                const basePoints = activeRowSymbols.reduce((sum, symbol) => sum + symbol.points, 0)
                const pointsChange = Math.round(basePoints * levelMultiplier)

                // Оновлюємо рахунок
                setScore((prev) => prev + pointsChange)
                setLastPointsChange(pointsChange)

                // Перевіряємо спеціальні комбінації і показуємо поп-ап
                const { extraPoints, specialMessage } = checkSpecialCombinations(activeRowSymbols)
                const totalExtraPoints = Math.round(extraPoints * levelMultiplier)

                // Показуємо поп-ап з результатами
                setPopup({
                  show: true,
                  pointsChange,
                  extraPoints: totalExtraPoints,
                  specialMessage,
                })

                // Якщо є додаткові бали, додаємо їх до рахунку
                if (totalExtraPoints > 0) {
                  setTimeout(() => {
                    setScore((prev) => prev + totalExtraPoints)
                    setLastPointsChange(totalExtraPoints)
                  }, 1000)
                }

                // Нараховуємо досвід за спробу
                const expGained = Math.max(10, Math.abs(pointsChange) + totalExtraPoints)
                addExperience(expGained)

                setIsAnimating(false)
              }, 500)
            }
          },
          delay * (col * 3 + row + 1),
        )
      }
    }
  }

  // Функція для отримання поточного множника рівня
  const getCurrentLevelMultiplier = () => {
    const currentLevelConfig = levelConfig.find((l) => l.level === level)
    return currentLevelConfig ? currentLevelConfig.pointsMultiplier : 1.0
  }

  // Функція для отримання поточного титулу рівня
  const getCurrentLevelTitle = () => {
    const currentLevelConfig = levelConfig.find((l) => l.level === level)
    return currentLevelConfig ? currentLevelConfig.title : "Kezdő Régész"
  }

  // Функція для отримання наступного рівня
  const getNextLevel = () => {
    const nextLevelConfig = levelConfig.find((l) => l.level === level + 1)
    return nextLevelConfig || levelConfig[levelConfig.length - 1]
  }

  // Функція для додавання досвіду
  const addExperience = (exp: number) => {
    const newExperience = experience + exp
    setExperience(newExperience)

    // Перевіряємо, чи досягнуто наступного рівня
    const nextLevel = getNextLevel()
    if (level < nextLevel.level && newExperience >= nextLevel.expRequired) {
      // Підвищуємо рівень
      setLevel(nextLevel.level)

      // Показуємо повідомлення про підвищення рівня
      const rewards = [
        `Pont szorzó: x${nextLevel.pointsMultiplier.toFixed(1)}`,
        "Új műtárgyak felfedezése",
        "Jobb esélyek a ritka leletekre",
      ]

      setLevelUpInfo({
        show: true,
        newLevel: nextLevel.level,
        rewards,
      })
    }
  }

  // Функція для обчислення прогресу до наступного рівня
  const calculateLevelProgress = () => {
    const currentLevelConfig = levelConfig.find((l) => l.level === level)
    const nextLevelConfig = levelConfig.find((l) => l.level === level + 1)

    if (!currentLevelConfig || !nextLevelConfig) {
      return level >= levelConfig.length ? 100 : 0
    }

    const currentLevelExp = currentLevelConfig.expRequired
    const nextLevelExp = nextLevelConfig.expRequired
    const expRange = nextLevelExp - currentLevelExp
    const currentProgress = experience - currentLevelExp

    return Math.min(100, Math.floor((currentProgress / expRange) * 100))
  }

  // Перевірка спеціальних комбінацій
  const checkSpecialCombinations = (currentSymbols: GameSymbol[]) => {
    // Перевірка на три однакових символи підряд
    const types = currentSymbols.map((s) => s.type)
    let extraPoints = 0
    let specialMessage = ""

    // Перевірка на три однакових символи
    const typeCounts: Record<SymbolType, number> = {
      gem: 0,
      book: 0,
      skull: 0,
      bomb: 0,
      scroll: 0,
      trophy: 0,
    }

    types.forEach((type) => {
      typeCounts[type]++
    })

    // Додаткові бали за три однакових
    Object.entries(typeCounts).forEach(([type, count]) => {
      if (count >= 3) {
        const symbolType = type as SymbolType
        const basePoints = symbolConfig[symbolType].points
        extraPoints += basePoints * count * 2
        specialMessage = `${count}x ${type} kombináció! +${basePoints * count * 2} extra pont!`
      }
    })

    // Додаткові бали за всі різні символи
    const uniqueTypes = new Set(types)
    if (uniqueTypes.size === currentSymbols.length && currentSymbols.length >= 4) {
      extraPoints += 100
      specialMessage = "Minden szimbólum különböző! +100 extra pont!"
    }

    return { extraPoints, specialMessage }
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

  // Закриття повідомлення про підвищення рівня
  const closeLevelUp = () => {
    setLevelUpInfo((prev) => ({ ...prev, show: false }))
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-red-600 text-white p-2 text-center text-sm">
        <p>Ez egy ingyenes közösségi platform, kizárólag 18 éven felülieknek.</p>
      </div>

      <Header />

      <main className="flex-grow py-8 bg-amber-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center">Régészeti Expedíció</h1>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <Card className="border-amber-300 mb-6">
                  <CardContent className="p-6">
                    {/* Інформація про рівень */}
                    <div className="text-center mb-6 bg-amber-100 p-4 rounded-lg border border-amber-200">
                      <div className="flex items-center justify-center mb-2">
                        <Award className="h-6 w-6 text-amber-600 mr-2" />
                        <h2 className="text-xl font-semibold">Szint {level}</h2>
                      </div>
                      <p className="text-amber-800 font-medium mb-2">{getCurrentLevelTitle()}</p>

                      {/* Прогрес-бар рівня */}
                      <div className="w-full bg-amber-200 rounded-full h-4 mb-2">
                        <div
                          className="bg-gradient-to-r from-amber-500 to-amber-600 h-4 rounded-full transition-all duration-500 ease-out"
                          style={{ width: `${calculateLevelProgress()}%` }}
                        ></div>
                      </div>

                      <div className="flex justify-between text-xs text-amber-700">
                        <span>{experience} XP</span>
                        {level < levelConfig.length && <span>{getNextLevel().expRequired} XP</span>}
                      </div>

                      <div className="mt-2 text-sm flex items-center justify-center">
                        <TrendingUp className="h-4 w-4 text-amber-600 mr-1" />
                        <span>Pont szorzó: x{getCurrentLevelMultiplier().toFixed(1)}</span>
                      </div>
                    </div>

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
                      <h2 className="text-xl font-semibold mb-2">Hátralévő Próbálkozások</h2>
                      <p className="text-3xl font-bold text-amber-500">{attemptsLeft}</p>
                    </div>

                    <div className="text-center mb-6 relative">
                      <Button
                        onClick={generateSymbolLines}
                        disabled={gameOver || isAnimating || attemptsLeft <= 0}
                        className="bg-amber-600 hover:bg-amber-700 w-full py-6 text-lg"
                      >
                        {isAnimating ? "Ásatás folyamatban..." : "Ásatás!"}
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

                          {popup.extraPoints > 0 && (
                            <div className="flex justify-between items-center mb-2">
                              <span>Extra pontok:</span>
                              <span className="text-green-600 font-bold">+{popup.extraPoints}</span>
                            </div>
                          )}

                          <div className="border-t border-gray-200 mt-2 pt-2 flex justify-between items-center">
                            <span className="font-bold">Összesen:</span>
                            <span
                              className={
                                popup.pointsChange + popup.extraPoints >= 0
                                  ? "text-green-600 font-bold"
                                  : "text-red-600 font-bold"
                              }
                            >
                              {popup.pointsChange + popup.extraPoints >= 0
                                ? `+${popup.pointsChange + popup.extraPoints}`
                                : popup.pointsChange + popup.extraPoints}
                            </span>
                          </div>

                          {popup.specialMessage && (
                            <div className="mt-2 p-2 bg-amber-100 rounded-lg text-amber-800 text-sm">
                              {popup.specialMessage}
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
                          <p className="text-amber-800 text-lg">Kattints az "Ásatás" gombra a játék indításához!</p>
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

      {/* Повідомлення про підвищення рівня */}
      {levelUpInfo.show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={levelUpRef}
            className="bg-white rounded-lg p-6 max-w-md w-full mx-4 animate-scale-in shadow-2xl border-4 border-amber-500"
          >
            <div className="text-center">
              <div className="inline-block p-4 bg-amber-100 rounded-full mb-4">
                <Award className="h-12 w-12 text-amber-600" />
              </div>

              <h2 className="text-2xl font-bold text-amber-800 mb-2">Szintet léptél!</h2>
              <p className="text-lg font-semibold text-amber-600 mb-4">
                Most már {levelUpInfo.newLevel}. szintű {getCurrentLevelTitle()} vagy!
              </p>

              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mb-4">
                <h3 className="font-semibold text-amber-800 mb-2">Jutalmak:</h3>
                <ul className="text-left space-y-2">
                  {levelUpInfo.rewards.map((reward, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block bg-amber-200 rounded-full p-1 mr-2 mt-0.5">
                        <svg className="h-3 w-3 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {reward}
                    </li>
                  ))}
                </ul>
              </div>

              <Button onClick={closeLevelUp} className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2">
                Folytatás
              </Button>
            </div>
          </div>
        </div>
      )}

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
        
        @keyframes scale-in {
          0% { opacity: 0; transform: scale(0.8); }
          70% { transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-scale-in {
          animation: scale-in 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
