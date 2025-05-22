import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-amber-800">Adatvédelmi irányelvek</h1>

          <div className="prose prose-amber max-w-none">
            <p className="lead text-lg text-amber-900">
              A Glimvora elkötelezett az Ön személyes adatainak védelme iránt. Ez az adatvédelmi irányelv tájékoztatást
              nyújt arról, hogyan gyűjtjük, használjuk, tároljuk és védjük az Ön adatait platformunk használata során.
            </p>

            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 my-6">
              <p className="font-medium text-amber-800 mb-0">
                Platformunk használatával Ön elfogadja az ebben az adatvédelmi irányelvben leírt gyakorlatokat. Kérjük,
                figyelmesen olvassa el ezt a dokumentumot.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">1. Rólunk</h2>
            <p>
              A Glimvora (továbbiakban: "mi", "minket", "miénk", "Glimvora") egy innovatív fejlesztőcég, amely egy
              egyedülálló közösségi platformot üzemeltet a régészeti kalandok szerelmeseinek. Platformunk kizárólag
              szórakoztatási célokat szolgál, és nem biztosít lehetőséget valódi pénz nyereményre vagy veszteségre.
            </p>
            <p>
              Székhelyünk: Rákóczi út 15, Debrecen, 4024, Magyarország
              <br />
              Email: contact@glimvora.com
              <br />
              Telefon: +36 52 551 2361
              <br />
              Weboldal: glimvora.com
            </p>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">2. Az általunk gyűjtött adatok</h2>
            <p>Az alábbi típusú adatokat gyűjthetjük és dolgozhatjuk fel:</p>

            <h3 className="text-xl font-semibold text-amber-700 mt-6">2.1 Személyes adatok</h3>
            <p>Amikor regisztrál a platformunkra, a következő személyes adatokat kérhetjük:</p>
            <ul>
              <li>Név</li>
              <li>Email cím</li>
              <li>Születési dátum (a korhatár ellenőrzése céljából)</li>
              <li>Felhasználónév</li>
              <li>Jelszó (titkosított formában tároljuk)</li>
            </ul>

            <h3 className="text-xl font-semibold text-amber-700 mt-6">2.2 Használati adatok</h3>
            <p>Automatikusan gyűjtünk információkat arról, hogyan használja platformunkat, beleértve:</p>
            <ul>
              <li>IP-cím</li>
              <li>Böngésző típusa és verziója</li>
              <li>Eszköz típusa</li>
              <li>Operációs rendszer</li>
              <li>A látogatás dátuma és időpontja</li>
              <li>A platformon töltött idő</li>
              <li>A megtekintett oldalak</li>
              <li>Kattintási minták</li>
              <li>Játékhasználati statisztikák</li>
            </ul>

            <h3 className="text-xl font-semibold text-amber-700 mt-6">2.3 Cookie-k és hasonló technológiák</h3>
            <p>
              Cookie-kat és hasonló nyomkövető technológiákat használunk a felhasználói élmény javítása és a platform
              teljesítményének elemzése céljából. További információkért kérjük, olvassa el Cookie szabályzatunkat.
            </p>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">3. Adatgyűjtés célja</h2>
            <p>Az Ön adatait a következő célokra használjuk:</p>
            <ul>
              <li>A platformunk biztosítása és kezelése</li>
              <li>Felhasználói fiókjának létrehozása és kezelése</li>
              <li>Személyre szabott felhasználói élmény nyújtása</li>
              <li>A platform fejlesztése és javítása</li>
              <li>Ügyfélszolgálat biztosítása</li>
              <li>Kommunikáció Önnel a platformmal kapcsolatos frissítésekről és változásokról</li>
              <li>Biztonsági intézkedések végrehajtása</li>
              <li>Jogi kötelezettségek teljesítése</li>
              <li>Statisztikai elemzések készítése (anonim formában)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">4. Az adatok megosztása</h2>
            <p>
              Elkötelezettek vagyunk az Ön adatainak védelme mellett, és nem adjuk el, nem kereskedünk vagy adjuk bérbe
              az Ön személyes adatait harmadik feleknek. Az Ön adatait a következő esetekben oszthatjuk meg:
            </p>

            <h3 className="text-xl font-semibold text-amber-700 mt-6">4.1 Szolgáltatók</h3>
            <p>
              Együttműködünk harmadik fél szolgáltatókkal, akik segítenek nekünk a platform működtetésében és
              elemzésében. Ezek a szolgáltatók hozzáférhetnek az Ön adataihoz, de csak a mi nevünkben végzett feladatok
              elvégzése céljából, és szerződéses kötelezettségük, hogy az adatokat bizalmasan kezeljék.
            </p>

            <h3 className="text-xl font-semibold text-amber-700 mt-6">4.2 Jogi követelmények</h3>
            <p>Megoszthatjuk az Ön adatait, ha jóhiszeműen úgy véljük, hogy ez szükséges:</p>
            <ul>
              <li>Jogi kötelezettségek teljesítéséhez</li>
              <li>A Glimvora jogainak vagy tulajdonának védelméhez</li>
              <li>A platformmal kapcsolatos potenciális visszaélések megelőzéséhez vagy kivizsgálásához</li>
              <li>A felhasználók vagy a nyilvánosság biztonságának védelméhez</li>
              <li>Jogi felelősség elleni védekezéshez</li>
            </ul>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">5. Adatbiztonság</h2>
            <p>
              Megfelelő technikai és szervezeti intézkedéseket alkalmazunk az Ön személyes adatainak védelme érdekében a
              véletlen vagy jogellenes megsemmisítés, elvesztés, megváltoztatás, jogosulatlan nyilvánosságra hozatal
              vagy hozzáférés ellen.
            </p>
            <p>
              Bár mindent megteszünk az Ön adatainak védelme érdekében, az interneten keresztül történő adattovábbítás
              vagy elektronikus tárolás nem 100%-ban biztonságos. Nem tudjuk garantálni az Ön adatainak abszolút
              biztonságát.
            </p>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">6. Adatmegőrzés</h2>
            <p>
              Az Ön személyes adatait csak addig őrizzük meg, amíg az szükséges azon célok teljesítéséhez, amelyekre
              gyűjtöttük, beleértve a jogi, számviteli vagy jelentéstételi követelmények teljesítését.
            </p>
            <p>
              Inaktív felhasználói fiókok esetén az adatokat legfeljebb 24 hónapig őrizzük meg, mielőtt anonimizálnánk
              vagy törölnénk azokat.
            </p>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">7. Az Ön jogai</h2>
            <p>Az alkalmazandó adatvédelmi jogszabályok értelmében Önnek jogában áll:</p>
            <ul>
              <li>Hozzáférni az Önről tárolt személyes adatokhoz</li>
              <li>Kérni a pontatlan személyes adatok helyesbítését</li>
              <li>Kérni a személyes adatok törlését bizonyos körülmények között</li>
              <li>Korlátozni vagy tiltakozni a személyes adatok feldolgozása ellen bizonyos körülmények között</li>
              <li>Kérni az adatok hordozhatóságát</li>
              <li>Visszavonni a hozzájárulását, ha az adatfeldolgozás hozzájáruláson alapul</li>
              <li>Panaszt tenni az illetékes adatvédelmi hatóságnál</li>
            </ul>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">8. Gyermekek adatvédelme</h2>
            <p>
              Platformunk kizárólag 18 éven felüli személyek számára készült. Nem gyűjtünk tudatosan személyes adatokat
              18 év alatti személyektől. Ha tudomásunkra jut, hogy 18 év alatti személy adatait gyűjtöttük, megtesszük a
              szükséges lépéseket ezen adatok törléséhez.
            </p>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">9. Harmadik felek linkjei</h2>
            <p>
              Platformunk tartalmazhat harmadik felek weboldalaira mutató linkeket. Nem vállalunk felelősséget ezen
              harmadik felek adatvédelmi gyakorlataiért vagy weboldalaik tartalmáért. Javasoljuk, hogy olvassa el ezen
              weboldalak adatvédelmi irányelveit.
            </p>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">10. Az adatvédelmi irányelvek módosításai</h2>
            <p>
              Időről időre frissíthetjük adatvédelmi irányelveinket. Az esetleges változásokról értesítjük Önt az új
              adatvédelmi irányelvek közzétételével a platformon. Javasoljuk, hogy rendszeresen tekintse át ezt az
              adatvédelmi irányelvet, hogy tájékozódjon az esetleges változásokról.
            </p>

            <h2 className="text-2xl font-semibold text-amber-800 mt-8">11. Kapcsolat</h2>
            <p>
              Ha bármilyen kérdése vagy aggálya van adatvédelmi irányelveinkkel kapcsolatban, vagy gyakorolni szeretné
              adatvédelmi jogait, kérjük, vegye fel velünk a kapcsolatot:
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
