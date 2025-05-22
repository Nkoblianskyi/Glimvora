import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CookiesPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-amber-800">Cookie szabályzat</h1>

          <div className="prose prose-amber max-w-none">
            <p className="lead text-lg text-amber-900">
              Ez a Cookie szabályzat részletesen ismerteti, hogyan használja a Glimvora a cookie-kat és hasonló
              technológiákat a platformján, és milyen lehetőségei vannak ezek kezelésére.
            </p>

            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 my-6">
              <p className="font-medium text-amber-800 mb-0">
                Platformunk használatával Ön elfogadja a cookie-k használatát az ebben a szabályzatban leírtak szerint.
                Ha nem szeretné, hogy cookie-kat használjunk, kérjük, módosítsa böngészője beállításait, vagy ne
                használja platformunkat.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">1. Mi az a cookie?</h2>
            <p>
              A cookie-k kis szöveges fájlok, amelyeket az Ön eszközén (számítógép, tablet, mobiltelefon) tárolunk,
              amikor meglátogatja platformunkat. A cookie-k segítenek nekünk felismerni az Ön eszközét a következő
              látogatáskor, biztosítva ezzel a jobb és személyre szabottabb élményt.
            </p>
            <p>
              A cookie-k mellett más nyomkövető technológiákat is használhatunk, például web beaconokat, pixel tageket,
              helyi tárolást (HTML5) és hasonló technológiákat. Ezek a technológiák hasonló célokat szolgálnak, mint a
              cookie-k, például felismerik az Ön eszközét és összegyűjtik az információkat a platform használatáról.
            </p>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">2. A cookie-k típusai</h2>
            <p>Platformunkon a következő típusú cookie-kat használjuk:</p>

            <h3 className="text-xl font-semibold text-amber-700 mt-6">2.1 Szükséges cookie-k</h3>
            <p>
              Ezek a cookie-k elengedhetetlenek a platform működéséhez, és nem kapcsolhatók ki rendszereinkben.
              Általában csak az Ön által végrehajtott olyan műveletekre válaszul állítjuk be őket, amelyek szolgáltatás
              kérésnek minősülnek, mint például adatvédelmi beállítások, bejelentkezés vagy űrlapok kitöltése.
              Beállíthatja böngészőjét, hogy blokkolja vagy figyelmeztesse Önt ezekre a cookie-kra, de a platform egyes
              részei nem fognak megfelelően működni.
            </p>
            <p>Példák a szükséges cookie-kra:</p>
            <ul>
              <li>Munkamenet cookie-k a bejelentkezési állapot megőrzéséhez</li>
              <li>Biztonsági cookie-k a felhasználók védelméhez</li>
              <li>CSRF (Cross-Site Request Forgery) token cookie-k a biztonság növeléséhez</li>
            </ul>

            <h3 className="text-xl font-semibold text-amber-700 mt-6">2.2 Preferencia cookie-k</h3>
            <p>
              Ezek a cookie-k lehetővé teszik, hogy platformunk megjegyezze az Ön preferenciáit és választásait, például
              a nyelvi beállításokat, témaválasztást vagy régióját. Ezek a cookie-k javítják a felhasználói élményt
              azáltal, hogy személyre szabottabb szolgáltatást nyújtanak.
            </p>
            <p>Példák a preferencia cookie-kra:</p>
            <ul>
              <li>Nyelvi beállítások cookie-k</li>
              <li>Téma preferencia cookie-k</li>
              <li>Felhasználói felület testreszabási cookie-k</li>
            </ul>

            <h3 className="text-xl font-semibold text-amber-700 mt-6">2.3 Statisztikai cookie-k</h3>
            <p>
              Ezek a cookie-k információkat gyűjtenek arról, hogyan használja platformunkat, például mely oldalakat
              látogatta meg, és milyen hibákat tapasztalt. Ezek az adatok segítenek nekünk a platform teljesítményének
              javításában és a felhasználói élmény optimalizálásában. Az összes információt összesítjük, így azok
              anonimek.
            </p>
            <p>Példák a statisztikai cookie-kra:</p>
            <ul>
              <li>Google Analytics cookie-k</li>
              <li>Látogatói statisztikák cookie-k</li>
              <li>Teljesítménymérő cookie-k</li>
            </ul>

            <h3 className="text-xl font-semibold text-amber-700 mt-6">2.4 Marketing cookie-k</h3>
            <p>
              Ezeket a cookie-kat a hirdetők helyezhetik el platformunkon. Ezek a cookie-k információkat gyűjthetnek az
              Ön érdeklődési köréről, hogy relevánsabb hirdetéseket jeleníthessenek meg Önnek. Platformunk nem használ
              marketing cookie-kat, mivel nem jelenítünk meg hirdetéseket.
            </p>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">3. Harmadik felek cookie-jai</h2>
            <p>
              Bizonyos esetekben harmadik felek cookie-jait is használjuk platformunkon. Ezek a harmadik felek saját
              adatvédelmi szabályzattal rendelkeznek, és mi nem vállalunk felelősséget az ő cookie-jaik működéséért.
            </p>
            <p>A platformunkon használt harmadik féltől származó cookie-k a következők:</p>
            <ul>
              <li>
                <strong>Google Analytics:</strong> Weboldal forgalom elemzésére és felhasználói viselkedés megértésére
                használjuk.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">4. Cookie-k kezelése</h2>
            <p>
              A legtöbb böngésző lehetővé teszi a cookie-k kezelését a beállításokon keresztül. Az alábbiakban
              tájékoztatást nyújtunk arról, hogyan kezelheti a cookie-kat a legnépszerűbb böngészőkben:
            </p>
            <ul>
              <li>
                <strong>Google Chrome:</strong> A Chrome beállításaiban kezelheti a cookie-kat
              </li>
              <li>
                <strong>Mozilla Firefox:</strong> A Firefox beállításaiban kezelheti a cookie-kat
              </li>
              <li>
                <strong>Safari:</strong> A Safari beállításaiban kezelheti a cookie-kat
              </li>
              <li>
                <strong>Microsoft Edge:</strong> Az Edge beállításaiban kezelheti a cookie-kat
              </li>
            </ul>
            <p>
              Kérjük, vegye figyelembe, hogy a cookie-k letiltása vagy törlése befolyásolhatja a platformunk
              funkcionalitását, és előfordulhat, hogy bizonyos szolgáltatások nem lesznek elérhetők.
            </p>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">5. "Ne kövess" jelzések</h2>
            <p>
              Egyes böngészők "Ne kövess" (Do Not Track, DNT) jelzéseket küldenek a weboldalaknak, jelezve a felhasználó
              nyomkövetési preferenciáit. Jelenleg nincs egységes technológiai szabvány a DNT jelzések felismerésére és
              megvalósítására. Ezért jelenleg nem reagálunk a böngésző DNT jelzéseire.
            </p>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">6. A cookie szabályzat módosításai</h2>
            <p>
              Időről időre frissíthetjük Cookie szabályzatunkat, hogy tükrözze a platformunkon használt cookie-k
              változásait vagy a jogszabályi követelményeket. Az esetleges változásokról értesítjük Önt az új Cookie
              szabályzat közzétételével a platformon. Javasoljuk, hogy rendszeresen tekintse át ezt a szabályzatot, hogy
              tájékozódjon az esetleges változásokról.
            </p>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">7. Kapcsolat</h2>
            <p>
              Ha bármilyen kérdése vagy észrevétele van Cookie szabályzatunkkal kapcsolatban, kérjük, vegye fel velünk a
              kapcsolatot:
            </p>
            <ul>
              <li>Email: contact@glimvora.com</li>
              <li>Telefon: +36 52 551 2361</li>
              <li>Cím: Rákóczi út 15, Debrecen, 4024, Magyarország</li>
            </ul>

            <p className="text-sm text-gray-600 mt-8">Utolsó frissítés: 2025. május 22.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
