import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Gem, Shovel, Compass, Map } from "lucide-react"

// Példa adatok a játékosok ranglistájához
const topPlayers = [
  {
    id: 1,
    name: "Dr. Kovács",
    score: 9850,
    avatar: "/archaeologist-avatar-1.png",
  },
  { id: 2, name: "Prof. Nagy", score: 8720, avatar: "/archaeologist-avatar-2.png" },
  { id: 3, name: "Kutató Szabó", score: 7650, avatar: "/archaeologist-avatar-3.png" },
  { id: 4, name: "Régész Tóth", score: 6980, avatar: "/archaeologist-avatar-4.png" },
  { id: 5, name: "Történész Varga", score: 6540, avatar: "/archaeologist-avatar-5.png" },
]

export default function Leaderboard() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Régészek Rangsora</h2>

        <Card className="max-w-3xl mx-auto border-amber-300">
          <CardHeader className="bg-amber-600 text-white">
            <CardTitle className="text-center">Top Kutatók</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="divide-y">
              {topPlayers.map((player, index) => (
                <div key={player.id} className="py-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 text-center font-bold mr-4">
                      {index === 0 ? (
                        <span className="text-amber-500">🏆</span>
                      ) : index === 1 ? (
                        <span className="text-gray-400">🥈</span>
                      ) : index === 2 ? (
                        <span className="text-amber-700">🥉</span>
                      ) : (
                        `#${index + 1}`
                      )}
                    </div>
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-4 bg-amber-100 flex items-center justify-center">
                      {index === 0 ? (
                        <Award className="h-6 w-6 text-amber-500" />
                      ) : index === 1 ? (
                        <Gem className="h-6 w-6 text-amber-600" />
                      ) : index === 2 ? (
                        <Shovel className="h-6 w-6 text-amber-700" />
                      ) : index === 3 ? (
                        <Compass className="h-6 w-6 text-amber-600" />
                      ) : (
                        <Map className="h-6 w-6 text-amber-600" />
                      )}
                    </div>
                    <div className="font-medium">{player.name}</div>
                  </div>
                  <div className="font-bold text-amber-600">{player.score.toLocaleString()} pont</div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-500 text-sm mb-2">Nem látod magad a ranglistán?</p>
              <button className="text-amber-600 hover:text-amber-800 font-medium">Teljes ranglista megtekintése</button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
