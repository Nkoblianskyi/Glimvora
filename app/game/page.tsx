"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import DisclaimerModal from "@/components/disclaimer-modal"
import { Gem, Shovel, Skull, Bomb, Coins, Scroll } from "lucide-react"

// A mezőn található elemek típusai
type ItemType = "műtárgy" | "kincs" | "koponya" | "bomba" | "érmék" | "tekercs"

// Játékmező cellájának interfésze
interface Cell {
  id: number
  revealed: boolean
  type: ItemType
  points: number
}

// Játék konfigurációs interfésze
interface GameConfig {
  rows: number
  cols: number
  itemDistribution: Record<ItemType, number>
  pointsMap: Record<ItemType, number>
  revealCount: number
}

export default function GamePage() {
  // Játék konfiguráció
  const gameConfig: GameConfig = {
    rows: 5,
    cols: 5,
    itemDistribution: {
      műtárgy: 5,
      kincs: 3,
      koponya: 2,
      bomba: 2,
      érmék: 3,
      tekercs: 10,
    },
    pointsMap: {
      műtárgy: 50,
      kincs: 100,
      koponya: 25,
      bomba: -50,
      érmék: -25,
      tekercs: 10,
    },
    revealCount: 2, // Hány mező legyen felfedve egy kattintásra
  }

  const [score, setScore] = useState(0)
  const [cells, setCells] = useState<Cell[]>([])
  const [gameOver, setGameOver] = useState(false)
  const [remainingMoves, setRemainingMoves] = useState(10)
  const [lastRevealedCells, setLastRevealedCells] = useState<number[]>([])
  const [isAnimating, setIsAnimating] = useState(false)
  const [lastPointsChange, setLastPointsChange] = useState(0)

  // Játék inicializálása
  useEffect(() => {
    initializeGame()
  }, [])

  // Játék inicializáló függvény
  const initializeGame = () => {
    const totalCells = gameConfig.rows * gameConfig.cols

    // Létrehozunk egy tömböt az összes elem típussal a megadott eloszlás szerint
    let items: ItemType[] = []
    Object.entries(gameConfig.itemDistribution).forEach(([type, count]) => {
      for (let i = 0; i < count; i++) {
        items.push(type as ItemType)
      }
    })

    // Ha kevesebb elem van, mint cella, üres cellákat adunk hozzá
    while (items.length < totalCells) {
      items.push("tekercs")
    }

    // Ha több elem van, mint cella, levágjuk a tömböt
    if (items.length > totalCells) {
      items = items.slice(0, totalCells)
    }

    // Megkeverjük az elemek tömbjét
    items = shuffleArray(items)

    // Létrehozzuk a cellákat
    const newCells = Array.from({ length: totalCells }, (_, index) => ({
      id: index,
      revealed: false,
      type: items[index],
      points: gameConfig.pointsMap[items[index]],
    }))

    setCells(newCells)
    setScore(0)
    setGameOver(false)
    setRemainingMoves(10)
    setLastRevealedCells([])
    setLastPointsChange(0)
  }

  // Tömb keverő függvény
  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  // Játék gomb kezelése - véletlenszerű cellák felfedése
  const handlePlayClick = () => {
    if (gameOver || isAnimating) return

    setIsAnimating(true)

    // Csak a még nem felfedett cellák közül választunk
    const hiddenCells = cells.filter((cell) => !cell.revealed).map((cell) => cell.id)

    // Ha nincs elég felfedetlen cella, akkor a játék véget ér
    if (hiddenCells.length < gameConfig.revealCount) {
      setGameOver(true)
      setIsAnimating(false)
      return
    }

    // Véletlenszerűen kiválasztunk néhány cellát
    const shuffledHiddenCells = shuffleArray(hiddenCells)
    const cellsToReveal = shuffledHiddenCells.slice(0, gameConfig.revealCount)

    setLastRevealedCells(cellsToReveal)

    // Frissítjük a cellákat
    const updatedCells = cells.map((cell) => {
      if (cellsToReveal.includes(cell.id)) {
        return { ...cell, revealed: true }
      }
      return cell
    })

    // Kiszámoljuk a pontváltozást
    const pointsChange = cellsToReveal.reduce((total, cellId) => {
      const cell = cells.find((c) => c.id === cellId)
      return total + (cell?.points || 0)
    }, 0)

    // Frissítjük a pontszámot
    setScore((prevScore) => prevScore + pointsChange)
    setLastPointsChange(pointsChange)

    // Csökkentjük a hátralévő lépések számát
    setRemainingMoves((prevMoves) => {
      const newMoves = prevMoves - 1
      if (newMoves <= 0) {
        setGameOver(true)
      }
      return newMoves
    })

    setCells(updatedCells)

    // Animáció időzítő
    setTimeout(() => {
      setIsAnimating(false)
    }, 1000)
  }

  // Ikon lekérése az elem típusához
  const getItemIcon = (type: ItemType, size = 24) => {
    const iconProps = { size, className: "mx-auto" }

    switch (type) {
      case "műtárgy":
        return <Gem {...iconProps} className="text-purple-500 mx-auto" />
      case "kincs":
        return <Coins {...iconProps} className="text-amber-500 mx-auto" strokeWidth={3} />
      case "koponya":
        return <Skull {...iconProps} className="text-gray-700 mx-auto" />
      case "bomba":
        return <Bomb {...iconProps} className="text-red-500 mx-auto" />
      case "érmék":
        return <Coins {...iconProps} className="text-amber-300 mx-auto" />
      case "tekercs":
        return <Scroll {...iconProps} className="text-amber-700 mx-auto" />
    }
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

          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-amber-100 p-6 rounded-lg text-center border border-amber-200">
              <h2 className="text-xl font-semibold mb-4">Segíts a régésznek megtalálni a kincseket!</h2>
              <p className="text-lg mb-2">
                A régész ősi romokat kutat értékes műtárgyak után. Segíts neki megtalálni a legjobb ásatási helyeket!
              </p>
              <p className="text-lg">
                Kattints az "Ásatás" gombra, hogy véletlenszerűen kiválassz két helyet az ásatásra. Találj műtárgyakat
                és kincseket pontokért, de vigyázz a bombákra és csapdákra, amelyek károsíthatják a kutatásodat!
              </p>
            </div>
          </div>

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
                      <h2 className="text-xl font-semibold mb-2">Hátralévő Próbálkozások</h2>
                      <p className="text-3xl font-bold text-amber-500">{remainingMoves}</p>
                    </div>

                    <div className="text-center mb-6">
                      <Button
                        onClick={handlePlayClick}
                        disabled={gameOver || isAnimating}
                        className="bg-amber-600 hover:bg-amber-700 w-full py-6 text-lg"
                      >
                        {isAnimating ? "Ásatás folyamatban..." : "Ásatás!"}
                      </Button>
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
                    <div
                      className="grid gap-2"
                      style={{
                        gridTemplateColumns: `repeat(${gameConfig.cols}, 1fr)`,
                        gridTemplateRows: `repeat(${gameConfig.rows}, 1fr)`,
                      }}
                    >
                      {cells.map((cell) => (
                        <div
                          key={cell.id}
                          className={`aspect-square border-2 rounded-md flex items-center justify-center transition-all ${
                            cell.revealed
                              ? lastRevealedCells.includes(cell.id)
                                ? "border-yellow-400 bg-yellow-50 animate-pulse"
                                : "border-amber-200 bg-amber-50"
                              : "border-amber-300 bg-amber-100"
                          }`}
                          aria-label={cell.revealed ? `Felfedett mező: ${cell.type}` : "Felfedetlen mező"}
                        >
                          {cell.revealed ? (
                            <div className="relative w-full h-full p-2 flex flex-col items-center justify-center">
                              {getItemIcon(cell.type, 36)}
                              <span
                                className={`mt-1 text-xs font-bold px-1 rounded ${
                                  cell.points > 0
                                    ? "bg-green-100 text-green-700"
                                    : cell.points < 0
                                      ? "bg-red-100 text-red-700"
                                      : "bg-gray-100 text-gray-700"
                                }`}
                              >
                                {cell.points > 0 ? `+${cell.points}` : cell.points}
                              </span>
                            </div>
                          ) : (
                            <div className="w-full h-full bg-amber-500 rounded-sm flex items-center justify-center">
                              <Shovel className="text-white h-8 w-8" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-8 bg-amber-100 p-6 rounded-lg border border-amber-200">
              <h2 className="text-xl font-semibold mb-4">Hogyan játssz:</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  Kattints az "Ásatás!" gombra, hogy véletlenszerűen kiválassz {gameConfig.revealCount} helyet az
                  ásatásra.
                </li>
                <li>A felfedett helyeken található elemek alapján pontokat kapsz vagy veszítesz.</li>
                <li>Találj műtárgyakat, kincseket és koponyákat, hogy pontokat szerezz.</li>
                <li>Kerüld el a bombákat és csapdákat, amelyek csökkentik a pontszámodat.</li>
                <li>Korlátozott számú próbálkozásod van - használd őket bölcsen!</li>
                <li>A játék befejezése után újrakezdheted és megpróbálhatod javítani az eredményedet.</li>
              </ol>

              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-amber-800 font-medium">
                  Emlékeztetjük: ez egy közösségi platform, teljesen ingyenes, nem igényel pénzügyi befektetést, nem
                  biztosít lehetőséget valódi pénz nyereményre. Minden virtuális tárgy és pont nem rendelkezik valós
                  értékkel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <DisclaimerModal />
    </div>
  )
}
