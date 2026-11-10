# Laadunvarmistus – 10.11.2026

## Automaattiset tarkistukset

- TypeScript: `tsc -b` läpäisty osana tuotantorakennusta.
- `npm run build`: läpäisty. Vite tuottaa staattisen `dist/`-kansion, 10 sivukohtaista reittialoitusta ja `404.html`-tiedoston.
- `npm run lint`: läpäisty ilman virheitä tai varoituksia.
- `npm run test`: 2 testitiedostoa, 4 testiä läpäisty.
- Lomaketestit: puuttuvat ja virheelliset kentät, kohdistus ensimmäiseen virheeseen, palvelun esivalinta, paikallinen liite, kokoraja, liitteen poistaminen, lataustila, kenttien tyhjennys sekä oikea demopalaute.
- Demolähetys: testissä varmistettu, ettei `fetch`-kutsua tai `Storage.setItem`-tallennusta tapahdu.
- Galleria: suodatus, haku, tyhjä hakutulos, kuvan avaaminen, seuraava kuva, alkuperäisen lähteen linkki, sulkeminen ja hakuehtojen nollaus.
- Tarkistus lähdekoodista: ei API-avaimia, GitHub-tokeneita tai yksityisiä avaimia. Generoituja luonnoskuvia ei ole projektin kuva-aineistossa.

## Selaintarkistukset

Paikallinen sivusto tarkistettiin Codexin selaimessa. Tunnetut 11 sivua ja tuntemattoman reitin 404-näkymä avattiin 320, 390, 768 ja 1440 pikselin leveyksillä. Havaitut pienen puhelimen yritysotsikon, etusivun otsikon ja 404-numeron ylivuodot korjattiin. Uudelleentarkistuksessa kaikkien reittien sisältö mahtui 320 px:n näkymän käytettävissä olevaan 305 px:n leveyteen.

- Etusivun alkuperäinen logo, SVG-maskin mukainen logoanimaatio ja suomalaiset ääkköset tarkistettu. Alkuvaiheen maski- ja ääkkösrajaukset korjattu.
- Mobiilivalikko avattiin ja siitä siirryttiin referenssisivulle; valikko sulkeutui navigoinnin yhteydessä.
- Gallerian Ajoneuvot-suodatin näytti kaksi kohdetta. Kuva avattiin, seuraava kuva valittiin ja kohteen tarjouslinkistä siirryttiin esivalittuun lomakkeeseen.
- Tyhjän lomakkeen virheet näkyivät. Testitiedoilla täytetty lomake näytti viestin **”Demoversio – tarjouspyyntöä ei lähetetty.”** Testissä käytettiin osoitetta `demo@example.invalid`.
- Kuvan suurennusta käytettiin näppäimistön End-näppäimellä (180 %) ja palautettiin painikkeella (100 %).
- FAQ avattiin ja vastausteksti varmistettiin.
- Etusivun, gallerian ja mobiilivalikon ulkoasu tarkistettu kuvakaappauksista. Konsolissa ei havaittu sovellusvirheitä tai varoituksia.
- Käyttäjän pyytämä yläbanneri poistettu ja poisto varmennettu työpöytä- ja mobiilinäkymässä.
- `prefers-reduced-motion` poistaa siirtymät ja paljastusliikkeet CSS:ssä. Komponenttitestien ympäristö käyttää vähennetyn liikkeen asetusta; käyttöjärjestelmän asetuksia ei muutettu.

## Rajaukset

Tämä ei ole täydellinen saavutettavuusauditointi, eikä Lighthouse-pisteitä ole mitattu. Safari-, Firefox- ja oikean puhelinlaitteen testit ovat tuotantoon siirryttäessä suositeltavia. Lomakepalvelinta ja sähköpostitoimitusta ei ole otettu käyttöön eikä testattu.

Alkuperäisissä yrityskuvissa on eri resoluutioita; niiden sisältöä ei muutettu tai täydennetty tekoälyllä. Käyttäjä vahvisti 10.11.2026 oikeutensa kuvien käyttöön. Lähteet löytyvät `image-sources.json`-tiedostosta.

## GitHub Pages

Julkinen julkaisu käyttää `/mainoskilpi-demo/`-juuripolkua. GitHub Actions ajaa lintin, neljä vuorovaikutustestiä ja TypeScript-tarkistuksen sisältävän tuotantorakennuksen ennen jokaista julkaisua. Julkaisuhistoria ja tarkistusten tulokset näkyvät repositorion Actions-välilehdellä. Sivusto säilyy demona, ja hakukoneiden `noindex`-ohje sekä tietoja lähettämätön lomake säilyvät käytössä.
