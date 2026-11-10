import { readFile, writeFile, mkdir } from 'node:fs/promises'

// Static entry files keep direct URLs usable on static hosts such as GitHub Pages.
// This is an SPA shell with page-specific metadata, not server rendering.
const html = await readFile('dist/index.html', 'utf8')
const routes = {
  palvelut: [
    'Teippaukset, kilvet ja tulosteet Joensuussa',
    'Mainoskilven teippaukset, mainoskilvet ja tulosteet. Verkkosivukonsepti.',
  ],
  'palvelut/autoteippaukset': [
    'Autoteippaukset Joensuu',
    'Autoteippausten suunnittelu ja toteutus Joensuussa. Tutustu Mainoskilven palveluun ja aitoihin toteutuskuviin.',
  ],
  'palvelut/ikkunateippaukset': [
    'Ikkunateippaukset Joensuu',
    'Mainoskilven ikkunateippaukset ja kalvotukset Joensuussa. Verkkosivudemo.',
  ],
  'palvelut/mainoskilvet': [
    'Mainoskilvet ja opasteet Joensuu',
    'Mainoskilvet, opasteet ja mainostaulut sisä- ja ulkotiloihin. Mainoskilpi Muhonen Oy, Joensuu.',
  ],
  'palvelut/suurkuvatulosteet': [
    'Suurkuvatulosteet Joensuu',
    'Mainoskilven suurkuvatulosteet, banderollit ja tulostustapetit. Verkkosivudemo.',
  ],
  'palvelut/tarrat': [
    'Tarrat ja tarratekstit Joensuu',
    'Tarrat ja yksi- ja moniväriset tarratekstit Mainoskilveltä Joensuusta. Verkkosivudemo.',
  ],
  referenssit: [
    'Toteutuksia – teippaukset, kilvet ja tulosteet',
    'Aitoja toteutuskuvia Mainoskilven omasta galleriasta. Tutustu teippauksiin, kilpiin ja tulosteisiin.',
  ],
  yritys: [
    'Joensuulainen perheyritys',
    'Mainoskilpi Muhonen Oy. Yrityksen oma historia ulottuu vuoteen 1971.',
  ],
  yhteystiedot: [
    'Yhteystiedot ja tarjouspyyntö',
    'Mainoskilpi Muhonen Oy, Parrutie 16, 80100 Joensuu. Puhelin 013 801 616. Demolomake ei lähetä tietoja.',
  ],
  'tietoa-demosta': [
    'Tietoa demosta ja kuvaoikeuksista',
    'Verkkosivukonseptin lähteet, kuvaoikeudet ja tietojen käsittely.',
  ],
}
for (const [route, [title, description]] of Object.entries(routes)) {
  await mkdir(`dist/${route}`, { recursive: true })
  const output = html
    .replace(/<title>.*?<\/title>/, `<title>${title} | Mainoskilpi Muhonen Oy – demo</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${description}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${title} | Mainoskilpi`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${description}`)
  await writeFile(`dist/${route}/index.html`, output)
}
await writeFile(
  'dist/404.html',
  html.replace(/<title>.*?<\/title>/, '<title>Sivua ei löytynyt | Mainoskilpi – demo</title>'),
)
console.log(`Prepared ${Object.keys(routes).length} static route entries and branded 404 fallback.`)
