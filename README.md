# Mainoskilpi Muhonen Oy – verkkosivudemo

Suomenkielinen React-, Vite- ja TypeScript-verkkosivukonsepti. Käyttäjä pyysi 10.11.2026 julkista GitHub-julkaisua ja vahvisti oikeutensa kuvien käyttöön. Sivusto on esittelydemo; yritys ei ole hyväksynyt tai tilannut sitä. Tarjouslomake ei lähetä tietoja.

**Sivusto:** https://samijturunen01.github.io/mainoskilpi-demo/

**Lähdekoodi:** https://github.com/samijturunen01/mainoskilpi-demo

## Käynnistys

Tarvitset Node.js 22.12+ tai uudemman tuetun LTS-version sekä npm:n. Projekti on tarkistettu Node.js 24:llä.

```powershell
cd C:\VERKKOSIVUT\Mainoskilpi
npm install
npm run dev
```

Avaa **http://127.0.0.1:5173/**. Kehityspalvelin kuuntelee vain tämän koneen loopback-osoitetta. Lopeta palvelin sen terminaalissa painamalla Ctrl+C. Portti 5173 on kiinteä; sulje mahdollinen aiempi palvelin ennen uuden käynnistämistä.

Tuotantotiedostojen paikallinen esikatselu:

```powershell
npm run build
npm run preview
```

Esikatselu löytyy osoitteesta **http://127.0.0.1:4173/**. Pelkän `dist/index.html`-tiedoston avaaminen tiedostona ei riitä; käytä HTTP-palvelinta.

## Toteutus

- Etusivu, palveluhakemisto ja viisi palvelusivua, referenssit, yrityssivu, yhteystiedot, demon tietosivu ja brändin mukainen 404.
- Alkuperäinen logo, lyhyt SVG-maskiin ja ääriviivaan perustuva logon paljastus sekä hillityt sivu- ja vieritysliikkeet. Navigointi on heti käytettävissä.
- Aidot valokuvat Mainoskilven omasta toteutusgalleriasta. Ei tekoälykuvia, keksittyjä projekteja, kuvapankkikuvia tai kilpailijoiden töitä.
- Suodatettava ja haettava galleria, näppäimistöllä suljettava modaali, edellinen/seuraava-kuvanvaihto sekä lähdelinkki jokaiselle galleriakuvalle.
- Aidon kohokirjainkuvan suurennus. Ennen–jälkeen-vertailu jätettiin pois, koska vahvistettua saman kohteen kuvaparia ei löytynyt.
- Mobiilivalikko, FAQ-haitari, näkyvät kohdistustilat ja vähennetyn liikkeen tuki.
- Tarjouslomakkeen validointi, palvelun esivalinta, paikallinen liitetiedoston valinta, lataustila ja yksiselitteinen demopalaute. **Ei lähetyksiä, tiedostolatauksia tai pysyvää henkilötietojen tallennusta.**
- Paikalliset fontit ja kuvat. Ei analytiikkaa, ulkoisia karttaupotuksia, reCAPTCHAa tai lomakepalvelinta.
- Sivukohtaiset otsikot ja kuvaukset, Open Graph -metatiedot, varmennettuihin yhteystietoihin perustuva LocalBusiness-JSON-LD sekä `noindex, nofollow, noarchive` ja `robots.txt: Disallow: /`.

## Tärkeimmät tiedostot

| Sijainti                            | Sisältö                                                           |
| ----------------------------------- | ----------------------------------------------------------------- |
| `src/pages/`                        | Sivut ja etusivun osiot                                           |
| `src/components/`                   | Navigointi, logo, galleria, lomake ja yhteiset komponentit        |
| `src/data/content.ts`               | Yhteystiedot, palvelut, projektikuvaukset ja FAQ                  |
| `src/lib/quote.ts`                  | Validointi ja erillinen, tietoja vastaanottamaton demokäsittelijä |
| `src/styles/main.css`               | Visuaalinen järjestelmä ja näyttökokokohtaiset tyylit             |
| `public/brand/mainoskilpi-logo.jpg` | Käyttäjän toimittaman logon muuttamaton kopio                     |
| `public/images/`                    | Optimoidut paikalliset WebP-kuvat                                 |
| `src/assets/originals/`             | Yrityksen sivuilta ladatut alkuperäiset valokuvat                 |
| `docs/image-sources.json`           | Kuvakohtaiset lähteet, mitat ja oikeuksien tila                   |
| `docs/RESEARCH.md`                  | Yritystietojen varmennus ja avoimet asiat                         |
| `docs/QA.md`                        | Tarkistusten tulokset ja rajaukset                                |

Kuvia ei tarvitse ladata uudelleen: kaikki demon tarvitsemat tiedostot sisältyvät projektiin. `scripts/inspect-gallery.mjs` ja `scripts/prepare-assets.mjs` dokumentoivat käytetyn lähde- ja optimointityönkulun. Ne hakevat kuvia vain erikseen ajettaessa, eivät sivuston käytön aikana.

## Tarkistukset

```powershell
npm run typecheck
npm run lint
npm run test
npm run build
```

Testit varmistavat lomakkeen validoinnin, palvelun esivalinnan, liitetiedoston kokorajan, kenttien tyhjentämisen, demopalautteen ja sen, ettei lähetys käytä verkkopyyntöjä tai selaimen pysyvää tallennustilaa. Galleriatesti kattaa suodatuksen, haun, yksityiskohtanäkymän ja kuvanvaihdon.

## Kuvien ja tietojen aitous

Logo on käyttäjän toimittama 150 × 150 px:n JPEG. Se säilytettiin alkuperäisenä; animaation sisällä käytetään samaa kuvaa SVG-maskin läpi. Se ei ole uusi, tekoälyllä tuotettu tai jäljennetty logo. Julkaisua varten tarvitaan mieluiten alkuperäinen SVG-, EPS- tai suuri läpinäkyvä PNG-tiedosto.

Valokuvat ovat [yrityksen omasta galleriasta](http://www.mainoskilpi.fi/galleria/). Käyttäjä vahvisti 10.11.2026 oikeutensa kuvien käyttöön ja antoi luvan julkiseen julkaisuun. Lähdeosoitteet ja vahvistus on kirjattu tiedostoon `docs/image-sources.json`. Oikeudet säilyvät alkuperäisillä oikeudenhaltijoilla.

Historiassa käytetään [yrityksen omaa ilmoitusta vuodesta 1971](http://www.mainoskilpi.fi/). Yrityshakemiston 1982 ja rekisteröinnin 1983 poikkeavat tästä: tarkista vuosiluvun lopullinen esitystapa yritykseltä. Hintaa, toimitusaikoja, arvosteluja tai asiakkaiden lausuntoja ei ole keksitty. Työn vaiheita kuvaava osio on ohje yhteydenottoon valmistautumisesta, ei vahvistamaton lupaus yrityksen prosessista.

## GitHub Pages -julkaisu

`.github/workflows/pages.yml` asentaa riippuvuudet, ajaa lintin ja testit, rakentaa sivuston ja julkaisee `dist/`-kansion jokaisen `main`-haaran päivityksen jälkeen. Julkaisun voi käynnistää myös GitHubin Actions-välilehdeltä. Työnkulku käyttää Node.js 24:ää ja asettaa `VITE_BASE_PATH`-arvon repositorion nimen perusteella.

Paikallinen GitHub Pages -polun testaus:

```powershell
$env:VITE_BASE_PATH = '/mainoskilpi-demo/'
npm run build
npm run preview
# Esikatselu: http://127.0.0.1:4173/mainoskilpi-demo/
# Pysäytä esikatselu Ctrl+C:llä ja palauta paikallinen oletus:
Remove-Item Env:VITE_BASE_PATH
```

Vite asettaa resurssien polut ja React Router käyttää samaa juuripolkua. Rakennus luo jokaiselle tunnetulle reitille hakemiston `index.html`-tiedoston sekä `404.html`-varasivun. Nämä ovat sivukohtaisilla metatiedoilla varustettuja SPA-aloitustiedostoja, eivät HTML-sisällön täydellistä esirenderöintiä. Esittelyversion `noindex` säilyy käytössä. Mahdollinen esirenderöinti, kanoniset osoitteet ja sitemap kuuluvat yrityksen virallisen tuotantoversion valmisteluun.

## Ennen yrityksen virallista käyttöönottoa

1. Yrityksen hyväksyntä sisällölle, palveluille, yhteystiedoille ja historiatiedolle.
2. Laadukas alkuperäinen logotiedosto ja lopullinen kuva-aineisto. Käyttäjä on vahvistanut nykyisten kuvien käyttöoikeuden.
3. Todellisen lomakepalvelun suunnittelu ja tietosuojaseloste. Mahdollinen reCAPTCHA on varmennettava vastaanottavalla palvelimella.
4. Valitun hostin HTTPS, uudelleenohjaukset, suojausotsakkeet, saavutettavuus- ja tuotantotestit.
5. Yrityksen domain ja mahdolliset integraatiot vasta erillisellä luvalla. Julkinen GitHub Pages -osoite on tämän esittelydemon julkaisupaikka.

Nykyistä verkkosivustoa, DNS:ää, palvelinta tai varmenteita ei ole muutettu.
