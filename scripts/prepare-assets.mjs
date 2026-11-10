import { readFile, mkdir, writeFile } from 'node:fs/promises'
import sharp from 'sharp'

// Run inspect-gallery.mjs first. Only official company assets are downloaded.
// These assets are for this private demo. Publication permission is not established.
const inventory = JSON.parse(await readFile('qa/gallery/inventory.json', 'utf8'))
const selection = [
  [2, 'hero-fleet', 'Autoteipatut henkilöautot yrityksen galleriassa'],
  [6, 'vehicle-blue', 'Sinivalkoiseksi teipattu pakettiauto'],
  [18, 'vehicle-black', 'Musta pakettiauto keltaisilla teksteillä ja kuvituksella'],
  [31, 'window', 'Kauppakeskuksen ikkunateippaukset'],
  [32, 'window-arena', 'Jokipoikien graafinen ikkunateippaus'],
  [68, 'sign', 'Jokihydron kohokirjaimista tehty kyltti'],
  [58, 'stickers', 'Mustakultaisia painettuja tarroja'],
  [49, 'print', 'Maisemakuva suurena seinäpintana'],
  [42, 'exhibition', 'Messuosasto yrityksen galleriassa'],
  [17, 'workshop', 'Henkilöauto teippaushallissa'],
]
await mkdir('src/assets/originals', { recursive: true })
await mkdir('public/images', { recursive: true })
const manifest = []
for (const [index, name, description] of selection) {
  const item = inventory[index]
  let source = item.url.replace('-w640h480', '')
  let response = await fetch(source)
  if (!response.ok || !response.headers.get('content-type')?.startsWith('image/')) {
    source = item.url
    response = await fetch(source)
  }
  if (!response.ok) throw new Error(`Image download failed: ${source}`)
  const data = Buffer.from(await response.arrayBuffer())
  const original = `src/assets/originals/${name}.jpg`
  await writeFile(original, data)
  const meta = await sharp(data).metadata()
  const output = `public/images/${name}.webp`
  const result = await sharp(data)
    .rotate()
    .resize({ width: 1680, withoutEnlargement: true })
    .webp({ quality: 88 })
    .toFile(output)
  await sharp(data)
    .rotate()
    .resize({ width: 800, withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(`public/images/${name}-small.webp`)
  manifest.push({
    file: output,
    original,
    sourceUrl: source,
    galleryUrl: 'http://www.mainoskilpi.fi/galleria/',
    description,
    accessed: '2026-11-10',
    permission:
      'Private speculative demo only. Permission from rights holders required before publication.',
    originalWidth: meta.width,
    originalHeight: meta.height,
    width: result.width,
    height: result.height,
    bytes: result.size,
  })
  console.log(
    `${name}: ${meta.width}x${meta.height} -> ${result.width}x${result.height}, ${Math.round(result.size / 1024)} KB`,
  )
}
await writeFile('docs/image-sources.json', JSON.stringify(manifest, null, 2))
