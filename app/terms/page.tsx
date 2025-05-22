import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-amber-800">Felhasználási feltételek</h1>

          <div className="prose prose-amber max-w-none">
            <p className="lead text-lg text-amber-900">
              Üdvözöljük a Glimvora platformján! Kérjük, figyelmesen olvassa el az alábbi felhasználási feltételeket,
              amelyek szabályozzák a Glimvora platformjának használatát és az általunk nyújtott szolgáltatásokat.
            </p>

            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 my-6">
              <p className="font-medium text-amber-800 mb-0">
                A platform használatával Ön elfogadja ezeket a feltételeket. Ha nem ért egyet a feltételekkel, kérjük,
                ne használja platformunkat.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">1. Általános rendelkezések</h2>
            <p>
              A Glimvora (továbbiakban: "mi", "minket", "miénk", "Glimvora") által üzemeltetett platform (glimvora.com)
              egy közösségi platform, amely régészeti tematikájú virtuális élményeket kínál felhasználóinak. Platformunk
              kizárólag szórakoztatási célokat szolgál, és nem biztosít lehetőséget valódi pénz nyereményre vagy
              veszteségre.
            </p>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">2. Jogosultság</h2>
            <p>
              Platformunk használata kizárólag 18 éven felüli személyek számára engedélyezett. A platform használatával
              Ön megerősíti, hogy elmúlt 18 éves, és teljes mértékben jogképes a jelen feltételek elfogadására és
              betartására. Fenntartjuk a jogot, hogy bármikor ellenőrizzük a felhasználók életkorát, és megtagadjuk a
              hozzáférést azoktól, akik nem felelnek meg a korhatárnak.
            </p>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">3. Felhasználói fiók</h2>
            <p>
              A platform egyes funkcióinak használatához regisztráció szükséges. A regisztráció során megadott
              információknak pontosnak, teljesnek és naprakésznek kell lenniük. Ön felelős a fiókjához tartozó jelszó
              biztonságáért és minden olyan tevékenységért, amely a fiókján keresztül történik. Haladéktalanul
              értesítenie kell minket, ha fiókjával kapcsolatos biztonsági problémát észlel.
            </p>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">4. Szellemi tulajdon</h2>
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

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">5. Felhasználói magatartás</h2>
            <p>A platform használata során Ön vállalja, hogy:</p>
            <ul>
              <li>Betartja az összes vonatkozó jogszabályt és előírást</li>
              <li>Nem használja a platformot illegális vagy jogosulatlan célokra</li>
              <li>Nem kísérel meg hozzáférni a platform olyan részeihez, amelyekhez nincs megfelelő jogosultsága</li>
              <li>Nem zavarja vagy szakítja meg a platform működését vagy a hozzá kapcsolódó szervereket</li>
              <li>Nem gyűjt vagy tárol személyes adatokat más felhasználókról a platform használata során</li>
              <li>
                Nem tesz közzé, nem tölt fel, nem oszt meg vagy terjeszt sértő, káros, rágalmazó, obszcén vagy más módon
                kifogásolható tartalmat
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">6. Virtuális javak és pontok</h2>
            <p>
              A platformon szerezhető virtuális javak, pontok és egyéb virtuális elemek kizárólag a platform
              használatára szolgálnak, és semmilyen valós értékkel nem rendelkeznek. Ezek a virtuális elemek a Glimvora
              tulajdonát képezik, és a Glimvora fenntartja a jogot, hogy bármikor, előzetes értesítés nélkül módosítsa,
              törölje vagy más módon kezelje ezeket az elemeket.
            </p>
            <p>
              A virtuális elemek nem válthatók át valódi pénzre, és nem ruházhatók át más felhasználókra vagy harmadik
              felekre. A virtuális elemek kizárólag személyes, nem kereskedelmi használatra szolgálnak.
            </p>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">
              7. A szolgáltatás módosítása és megszüntetése
            </h2>
            <p>
              Fenntartjuk a jogot, hogy bármikor, előzetes értesítés nélkül módosítsuk, felfüggesszük vagy megszüntessük
              a platformot vagy annak bármely részét. Nem vállalunk felelősséget a platform módosításáért,
              felfüggesztéséért vagy megszüntetéséért.
            </p>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">8. Felelősség korlátozása</h2>
            <p>
              A platformot "ahogy van" és "ahogy elérhető" alapon biztosítjuk, mindenféle kifejezett vagy hallgatólagos
              garancia nélkül. Nem garantáljuk, hogy a platform mindig biztonságos, hibamentes vagy megszakítás nélkül
              elérhető lesz.
            </p>
            <p>
              A vonatkozó jogszabályok által megengedett maximális mértékben a Glimvora nem vállal felelősséget
              semmilyen közvetlen, közvetett, véletlen, következményes vagy büntető jellegű kárért, amely a platform
              használatából vagy használatának lehetetlenségéből ered.
            </p>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">9. Kártalanítás</h2>
            <p>
              Ön vállalja, hogy megvédi, kártalanítja és mentesíti a Glimvora-t, annak tisztviselőit, igazgatóit,
              alkalmazottait és ügynökeit minden olyan követeléssel, kárral, kötelezettséggel, költséggel vagy kiadással
              szemben, amely a platform használatából, a felhasználási feltételek megsértéséből vagy harmadik felek
              jogainak megsértéséből ered.
            </p>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">10. Irányadó jog</h2>
            <p>
              Jelen felhasználási feltételekre Magyarország jogszabályai az irányadók, és azokat azoknak megfelelően
              kell értelmezni, tekintet nélkül a jogszabályi kollíziós elvekre.
            </p>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">11. Módosítások</h2>
            <p>
              Fenntartjuk a jogot, hogy bármikor módosítsuk ezeket a felhasználási feltételeket. A módosításokat a
              platformon tesszük közzé, és a közzététel időpontjától hatályosak. A platform további használatával Ön
              elfogadja a módosított feltételeket.
            </p>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">12. Kapcsolat</h2>
            <p>
              Ha bármilyen kérdése vagy észrevétele van a felhasználási feltételekkel kapcsolatban, kérjük, vegye fel
              velünk a kapcsolatot az alábbi elérhetőségeken:
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
