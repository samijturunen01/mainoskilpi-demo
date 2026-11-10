export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`
export const company = {
  name: 'Mainoskilpi Muhonen Oy',
  phone: '013 801 616',
  phoneHref: 'tel:+35813801616',
  email: 'mainoskilpi@mainoskilpi.fi',
  address: 'Parrutie 16',
  city: '80100 Joensuu',
  businessId: '0500269-7',
  map: 'https://www.google.com/maps/search/?api=1&query=Parrutie+16+80100+Joensuu',
}

export type Service = {
  slug: string
  name: string
  short: string
  title: string
  intro: string
  image: string
  alt: string
  kicker: string
  details: { title: string; text: string }[]
}
export const services: Service[] = [
  {
    slug: 'autoteippaukset',
    name: 'Autoteippaukset',
    short: 'Yrityksesi ilme. Aina liikkeellä.',
    title: 'Jokainen kilometri on mahdollisuus näkyä.',
    kicker: 'Näkyvyyttä liikkeessä',
    intro:
      'Työauto voi olla paljon muutakin kuin kulkuväline. Tunnistettava teippaus kuljettaa yrityksesi ilmettä sinne, missä asiakkaasikin ovat. Mainoskilpi suunnittelee ja toteuttaa teippaukset henkilöautoista pakettiautoihin, raskaisiin ajoneuvoihin ja työkoneisiin.',
    image: 'hero-fleet.webp',
    alt: 'Mainoskilven galleriasta: mustat henkilöautot yhtenäisillä oransseilla teippauksilla',
    details: [
      {
        title: 'Pienestä merkistä kokonaiseen ilmeeseen',
        text: 'Yrityksen nimi, yhteystiedot tai laajempi graafinen kokonaisuus. Teippauksen laajuus lähtee ajoneuvosta ja siitä, mitä haluat kertoa.',
      },
      {
        title: 'Yksi auto tai yhtenäinen kalusto',
        text: 'Sama tunnistettava ilme voidaan sovittaa erikokoisiin ajoneuvoihin. Kerro tarjouspyynnössä ajoneuvojen mallit ja lukumäärä.',
      },
      {
        title: 'Suunnittelusta toteutukseen',
        text: 'Valmis aineisto ei ole edellytys yhteydenotolle. Mainoskilven palveluihin kuuluu myös autoteippausten suunnittelu.',
      },
    ],
  },
  {
    slug: 'ikkunateippaukset',
    name: 'Ikkunateippaukset',
    short: 'Ensivaikutelma alkaa jo kadulta.',
    title: 'Ikkuna, joka tekee vaikutuksen.',
    kicker: 'Tilaa näkyvyydelle',
    intro:
      'Näyteikkuna on osa yrityksesi ensivaikutelmaa. Teippauksella tuot ilmeen lähelle ohikulkijaa, kerrot palveluistasi ja jäsennät lasipintoja. Mainoskilpi toteuttaa ikkunateippauksia sekä turva- ja aurinkosuojakalvotuksia.',
    image: 'window.webp',
    alt: 'Mainoskilven galleriasta: kauppakeskuksen ikkunoiden teksti- ja kuvioteippaukset',
    details: [
      {
        title: 'Liiketilan oma ilme',
        text: 'Nimi, aukiolotiedot ja graafiset elementit muodostavat selkeän kokonaisuuden. Hyvä lähtökohta on valokuva ikkunasta ja alustavat mitat.',
      },
      {
        title: 'Näkyvyyttä ja näkösuojaa',
        text: 'Lasipinnan käyttötarkoitus ohjaa materiaalin valintaa. Kuvaile, haluatko korostaa näkyvyyttä vai rajata näkymää tilaan.',
      },
      {
        title: 'Kalvotukset tarpeen mukaan',
        text: 'Kysy turva- ja aurinkosuojakalvoista suoraan yritykseltä. Sopivuus arvioidaan lasipinnan ja kohteen mukaan.',
      },
    ],
  },
  {
    slug: 'mainoskilvet',
    name: 'Mainoskilvet ja opasteet',
    short: 'Oikea viesti. Oikeassa paikassa.',
    title: 'Löydy. Opasta. Jää mieleen.',
    kicker: 'Selkeä suunta',
    intro:
      'Hyvä kyltti auttaa asiakasta löytämään perille ja tunnistamaan yrityksesi. Mainoskilven valikoimaan kuuluvat mainostaulut, liikekilvet, nimikilvet ja opasteet sisä- ja ulkotiloihin.',
    image: 'sign.webp',
    alt: 'Mainoskilven galleriasta: Jokihydron sinipunaiset kohokirjaimet seinällä',
    details: [
      {
        title: 'Julkisivuun ja sisäänkäyntiin',
        text: 'Liikekilpi tekee sijainnista tunnistettavan. Kerro asennuspaikasta, katseluetäisyydestä ja toivotusta koosta.',
      },
      {
        title: 'Opastus osaksi tilaa',
        text: 'Ovi- ja opastekilvet auttavat hahmottamaan rakennusta. Selkeä teksti ja johdonmukainen ilme palvelevat kävijää.',
      },
      {
        title: 'Taulut moniin kohteisiin',
        text: 'Mainostaulut, työmaataulut ja valomainokset kuuluvat yrityksen julkiseen palveluvalikoimaan. Materiaali ja toteutus sovitaan kohteen mukaan.',
      },
    ],
  },
  {
    slug: 'suurkuvatulosteet',
    name: 'Suurkuvatulosteet',
    short: 'Suuret ideat ansaitsevat suuren pinnan.',
    title: 'Ajattele isosti. Näy isommin.',
    kicker: 'Tilaa suurelle idealle',
    intro:
      'Banderolli, juliste, kangas tai kokonainen seinäpinta. Suurkuvatuloste antaa viestillesi tilaa messuilla, liiketilassa ja tapahtumassa. Mainoskilpi toteuttaa tulosteita eri käyttötarkoituksiin sekä tulostustapetteja.',
    image: 'print.webp',
    alt: 'Mainoskilven galleriasta: suuri suomalaisen järvimaiseman kuva sisäseinällä',
    details: [
      {
        title: 'Tapahtumiin ja messuille',
        text: 'Banderollit ja kankaat tuovat viestin näkyviin laajalla pinnalla. Mainostelineet ja roll-upit täydentävät kokonaisuutta.',
      },
      {
        title: 'Tilaan oma tunnelma',
        text: 'Tulostustapetilla kuva tai grafiikka muuttuu osaksi sisustusta. Yrityksen valikoimassa on liisteröitäviä ja tarrapohjaisia vaihtoehtoja.',
      },
      {
        title: 'Aineisto oikeaan mittakaavaan',
        text: 'Kerro tulosteen tavoitekoko ja käyttökohde. Tarkat aineisto-ohjeet kannattaa varmistaa ennen lopullisen painotiedoston valmistelua.',
      },
    ],
  },
  {
    slug: 'tarrat',
    name: 'Tarrat ja tarratekstit',
    short: 'Pienet yksityiskohdat. Vahva tunnistettavuus.',
    title: 'Viimeinen silaus. Vahva viesti.',
    kicker: 'Tarkasti omannäköinen',
    intro:
      'Tarrat kertovat, merkitsevät ja viimeistelevät. Mainoskilpi valmistaa tarroja eri pinnoille ja käyttötarkoituksiin sekä yksi- ja monivärisiä tarratekstejä ja kuvioita.',
    image: 'stickers.webp',
    alt: 'Mainoskilven galleriasta: pyöreitä mustakultaisia tarroja ja joulutervehdystarroja',
    details: [
      {
        title: 'Yritysilmeen yksityiskohdat',
        text: 'Tarra tuo tunnistettavan ilmeen tuotteeseen, oveen tai pakkaukseen. Kerro käyttöpinnasta ja siitä, tuleeko tarra sisälle vai ulos.',
      },
      {
        title: 'Merkinnät ja tunnukset',
        text: 'Valikoimaan kuuluvat esimerkiksi varoitus-, kielto- ja konetarrat sekä veneiden rekisteritunnukset.',
      },
      {
        title: 'Teksti juuri oikeaan paikkaan',
        text: 'Leikatut tarratekstit ja kuviot voidaan suunnitella eri kokoihin ja väreihin. Liitä tarjouspyyntöön toivottu teksti ja alustavat mitat.',
      },
    ],
  },
]

export const categories = [
  'Kaikki',
  'Ajoneuvot',
  'Ikkunateippaukset',
  'Kyltit ja opasteet',
  'Muut toteutukset',
] as const
export type Category = (typeof categories)[number]
export type Project = {
  id: string
  title: string
  category: Category
  image: string
  alt: string
  text: string
  service: string
  source: string
}
export const projects: Project[] = [
  {
    id: 'autokalusto',
    title: 'Yksi ilme. Koko kalusto.',
    category: 'Ajoneuvot',
    image: 'hero-fleet.webp',
    alt: services[0].alt,
    text: 'Mustien henkilöautojen yhtenäiset oranssit teippaukset. Kuva on Mainoskilven omasta toteutusgalleriasta. Työn ajankohtaa tai toimeksiannon laajuutta ei ole vahvistettu erikseen.',
    service: 'autoteippaukset',
    source: '20160425_152210.jpg',
  },
  {
    id: 'ikkunatekstit',
    title: 'Ikkuna kertoo enemmän.',
    category: 'Ikkunateippaukset',
    image: 'window.webp',
    alt: services[1].alt,
    text: 'Kauppakeskuksen lasipintojen tekstit ja kuviot tuovat palvelut näkyviin. Kuva on Mainoskilven omasta ikkunateippausten galleriasta.',
    service: 'ikkunateippaukset',
    source: 'img_20171012_095025.jpg',
  },
  {
    id: 'kohokirjaimet',
    title: 'Ilme, jolla on ulottuvuutta.',
    category: 'Kyltit ja opasteet',
    image: 'sign.webp',
    alt: services[2].alt,
    text: 'Jokihydron nimi kohokirjaimina vaalealla seinäpinnalla. Kuva on Mainoskilven omasta taulujen ja kilpien galleriasta.',
    service: 'mainoskilvet',
    source: 'img_20211222_082842.jpg',
  },
  {
    id: 'pakettiauto',
    title: 'Näkyvyyttä tien päälle.',
    category: 'Ajoneuvot',
    image: 'vehicle-blue.webp',
    alt: 'Sinivalkoiseksi teipattu pakettiauto Mainoskilven galleriassa',
    text: 'Ajoneuvon muotoja seuraava sinivalkoinen teippaus. Esimerkki Mainoskilven omassa galleriassa esitellyistä autoteippauksista.',
    service: 'autoteippaukset',
    source: 'img_20190606_160508.jpg',
  },
  {
    id: 'maisematapetti',
    title: 'Maisema osaksi tilaa.',
    category: 'Muut toteutukset',
    image: 'print.webp',
    alt: services[3].alt,
    text: 'Järvimaisema täyttää suuren seinäpinnan. Kuva on Mainoskilven omasta tulostustapettien galleriasta.',
    service: 'suurkuvatulosteet',
    source: 'img_20181219_095213.jpg',
  },
  {
    id: 'tarrat',
    title: 'Pienet pinnat. Tarkka ilme.',
    category: 'Muut toteutukset',
    image: 'stickers.webp',
    alt: services[4].alt,
    text: 'Mustakultaiset tarrat eri muodoissa. Kuva on Mainoskilven omasta tarratöiden galleriasta.',
    service: 'tarrat',
    source: 'img_20171020_155054.jpg',
  },
  {
    id: 'jokipojat',
    title: 'Väriä koko julkisivuun.',
    category: 'Ikkunateippaukset',
    image: 'window-arena.webp',
    alt: 'Jokipoikien punamusta grafiikka rakennuksen ikkunoissa',
    text: 'Jokipoikien punamusta ilme jatkuu yhtenäisenä ikkunoiden yli. Kuva on Mainoskilven omasta ikkunateippausten galleriasta.',
    service: 'ikkunateippaukset',
    source: 'img_20190924_121047.jpg',
  },
  {
    id: 'messuosasto',
    title: 'Oma paikka huomion keskellä.',
    category: 'Muut toteutukset',
    image: 'exhibition.webp',
    alt: 'Luontoaiheisilla kuvapinnoilla toteutettu messuosasto',
    text: 'Messuosaston suuret kuvapinnat ja yhtenäinen visuaalinen kokonaisuus. Kuva on Mainoskilven omasta messuosastojen galleriasta.',
    service: 'suurkuvatulosteet',
    source: '111111.jpg',
  },
]

export const faqs = [
  {
    q: 'Mitä autoteippaus maksaa?',
    a: 'Hinta riippuu ajoneuvosta, teipattavasta pinta-alasta, suunnittelusta ja materiaalista. Kerro ajoneuvon malli ja toiveesi, jotta yritys voi arvioida työn. Tässä demossa ei ole hinnastoa.',
  },
  {
    q: 'Kuinka kauan toteutus kestää?',
    a: 'Aikataulu sovitaan työn laajuuden, aineiston valmiuden ja tuotannon tilanteen mukaan. Kerro yhteydenotossa toivottu valmistumisajankohta ja varmista saatavuus suoraan Mainoskilveltä.',
  },
  {
    q: 'Onnistuuko myös suunnittelu?',
    a: 'Kyllä. Mainoskilven omilla palvelusivuilla kerrotaan muun muassa autoteippausten sekä messu- ja näyttelyosastojen suunnittelusta. Kerro lähtötilanteesi, niin suunnittelun tarve voidaan arvioida.',
  },
  {
    q: 'Millaisessa muodossa aineisto toimitetaan?',
    a: 'Yrityksen aineisto-ohjeessa mainitaan esimerkiksi PDF-, AI-, EPS-, JPG- ja TIFF-tiedostot. Varmista ajantasaiset, juuri omaan työhösi sopivat mitat ja tiedostoasetukset suoraan yritykseltä ennen aineiston toimittamista.',
  },
  {
    q: 'Voiko yksityishenkilö tilata?',
    a: 'Kyllä. Yrityksen oman sivuston mukaan Mainoskilpi palvelee sekä yrityksiä että yksityisasiakkaita pääsääntöisesti Joensuun seudulla ja Pohjois-Karjalassa.',
  },
  {
    q: 'Miten pyydän tarjouksen?',
    a: 'Voit ottaa suoraan yhteyttä puhelimitse tai sähköpostilla. Tämän verkkosivukonseptin lomaketta voi kokeilla, mutta se ei lähetä tarjouspyyntöä. Kuvaus työstä, alustavat mitat ja toivottu aikataulu auttavat alkuun.',
  },
]

export const nav = [
  { to: '/palvelut', label: 'Palvelut' },
  { to: '/referenssit', label: 'Referenssit' },
  { to: '/yritys', label: 'Yritys' },
  { to: '/yhteystiedot', label: 'Yhteystiedot' },
]
