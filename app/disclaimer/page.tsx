import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Disclaimer() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-amber-800">Felelősségkizárás</h1>

          <div className="prose prose-amber max-w-none">
            <p className="lead text-lg text-amber-900">
              Ez a felelősségkizárási nyilatkozat részletesen ismerteti a Glimvora platformjának használatával
              kapcsolatos felelősségi korlátozásokat és jogi nyilatkozatokat.
            </p>

            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 my-6">
              <p className="font-medium text-amber-800 mb-0">
                A platform használatával Ön elfogadja az ebben a felelősségkizárási nyilatkozatban foglalt feltételeket.
                Ha nem ért egyet ezekkel a feltételekkel, kérjük, ne használja platformunkat.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">1. Általános felelősségkizárás</h2>
            <p>
              A Glimvora platformját és annak tartalmát "ahogy van" és "ahogy elérhető" alapon biztosítjuk, mindenféle
              kifejezett vagy hallgatólagos garancia nélkül. A Glimvora nem garantálja, hogy a platform mindig
              biztonságos, hibamentes vagy megszakítás nélkül elérhető lesz.
            </p>
            <p>
              A vonatkozó jogszabályok által megengedett maximális mértékben a Glimvora kizár minden garanciát,
              beleértve, de nem kizárólagosan, a forgalomképességre, egy adott célra való alkalmasságra és a jogsértés
              hiányára vonatkozó hallgatólagos garanciákat.
            </p>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">2. A tartalom pontossága</h2>
            <p>
              Bár minden erőfeszítést megteszünk annak érdekében, hogy a platformunkon található információk pontosak és
              naprakészek legyenek, nem vállalunk felelősséget a tartalom pontosságáért, teljességéért vagy
              használhatóságáért. A platformon található információk általános jellegűek, és nem helyettesítik a
              szakértői tanácsadást.
            </p>
            <p>
              Fenntartjuk a jogot, hogy bármikor, előzetes értesítés nélkül módosítsuk, frissítsük vagy töröljük a
              platformon található információkat.
            </p>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">3. Virtuális javak és pontok</h2>
            <p>
              A Glimvora platformja egy közösségi platform, amely régészeti tematikájú virtuális élményeket kínál. A
              platformon szerezhető virtuális javak, pontok és egyéb virtuális elemek kizárólag szórakoztatási célokat
              szolgálnak, és semmilyen valós értékkel nem rendelkeznek.
            </p>
            <p>
              <strong>Kifejezetten kijelentjük, hogy:</strong>
            </p>
            <ul>
              <li>Platformunk teljesen ingyenes, nem igényel pénzügyi befektetést</li>
              <li>Nem biztosítunk lehetőséget valódi pénz nyereményre vagy veszteségre</li>
              <li>A virtuális javak és pontok nem válthatók át valódi pénzre vagy értékre</li>
              <li>A virtuális elemek kizárólag a platform használatára szolgálnak</li>
              <li>
                Fenntartjuk a jogot, hogy bármikor, előzetes értesítés nélkül módosítsuk, töröljük vagy más módon
                kezeljük a virtuális elemeket
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">4. Korhatár</h2>
            <p>
              A Glimvora platformja kizárólag 18 éven felüli személyek számára készült. Nem vállalunk felelősséget
              azokért a károkért, amelyek abból erednek, hogy 18 év alatti személyek használják a platformot.
            </p>
            <p>
              A platform használatával Ön megerősíti, hogy elmúlt 18 éves, és teljes mértékben jogképes a jelen
              felelősségkizárási nyilatkozat elfogadására és betartására.
            </p>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">5. Felelősség korlátozása</h2>
            <p>
              A vonatkozó jogszabályok által megengedett maximális mértékben a Glimvora, annak tulajdonosai,
              tisztviselői, igazgatói, alkalmazottai, partnerei és ügynökei nem vállalnak felelősséget semmilyen
              közvetlen, közvetett, véletlen, következményes, különleges vagy büntető jellegű kárért, amely a platform
              használatából vagy használatának lehetetlenségéből ered, beleértve, de nem kizárólagosan:
            </p>
            <ul>
              <li>Adatvesztés vagy adatsérülés</li>
              <li>Elmaradt haszon vagy üzleti lehetőség</li>
              <li>Üzleti tevékenység megszakítása</li>
              <li>Számítógépes meghibásodás vagy hibás működés</li>
              <li>Bármilyen más anyagi vagy nem anyagi kár</li>
            </ul>
            <p>
              Ez a felelősségkorlátozás érvényes akkor is, ha a Glimvora-t tájékoztatták az ilyen károk lehetőségéről,
              és akkor is, ha a jogorvoslat nem éri el alapvető célját.
            </p>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">6. Harmadik felek linkjei</h2>
            <p>
              A platformunk tartalmazhat harmadik felek weboldalaira mutató linkeket. Ezeket a linkeket kizárólag az Ön
              kényelme érdekében biztosítjuk. Nem ellenőrizzük ezeket a weboldalakat, és nem vállalunk felelősséget azok
              tartalmáért, adatvédelmi gyakorlataiért vagy elérhetőségéért.
            </p>
            <p>
              A harmadik felek weboldalaira mutató linkek nem jelentik azt, hogy jóváhagyjuk vagy támogatjuk ezeket a
              weboldalakat vagy azok tartalmát. Ezen weboldalak használata az Ön saját felelősségére történik.
            </p>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">7. Szellemi tulajdon</h2>
            <p>
              A platformon található minden tartalom, beleértve, de nem kizárólagosan a szövegeket, grafikákat, logókat,
              ikonokat, képeket, hangfájlokat, videókat, szoftvereket és egyéb anyagokat, a Glimvora vagy licencadóinak
              szellemi tulajdonát képezik, és szerzői jogi, védjegy és egyéb szellemi tulajdonjogi törvények védelme
              alatt állnak.
            </p>
            <p>
              A platform használata nem ruház át semmilyen tulajdonjogot a platformon található szellemi tulajdonra
              vonatkozóan. Tilos a platform tartalmának másolása, terjesztése, módosítása, nyilvános megjelenítése,
              előadása, újrafelhasználása, letöltése, közzététele vagy bármilyen módon történő felhasználása a Glimvora
              előzetes írásbeli engedélye nélkül.
            </p>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">8. Kártalanítás</h2>
            <p>
              Ön vállalja, hogy megvédi, kártalanítja és mentesíti a Glimvora-t, annak tisztviselőit, igazgatóit,
              alkalmazottait és ügynökeit minden olyan követeléssel, kárral, kötelezettséggel, költséggel vagy kiadással
              szemben, amely a platform használatából, a felelősségkizárási nyilatkozat megsértéséből vagy harmadik
              felek jogainak megsértéséből ered.
            </p>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">9. Irányadó jog</h2>
            <p>
              Jelen felelősségkizárási nyilatkozatra Magyarország jogszabályai az irányadók, és azokat azoknak
              megfelelően kell értelmezni, tekintet nélkül a jogszabályi kollíziós elvekre.
            </p>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">10. A felelősségkizárás módosításai</h2>
            <p>
              Fenntartjuk a jogot, hogy bármikor módosítsuk ezt a felelősségkizárási nyilatkozatot. A módosításokat a
              platformon tesszük közzé, és a közzététel időpontjától hatályosak. A platform további használatával Ön
              elfogadja a módosított felelősségkizárási nyilatkozatot.
            </p>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">11. Kapcsolat</h2>
            <p>
              Ha bármilyen kérdése vagy észrevétele van a felelősségkizárási nyilatkozattal kapcsolatban, kérjük, vegye
              fel velünk a kapcsolatot:
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
