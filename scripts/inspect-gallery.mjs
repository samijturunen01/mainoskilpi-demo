import { mkdir, writeFile } from 'node:fs/promises'
import sharp from 'sharp'
const origin = 'http://www.mainoskilpi.fi'
await mkdir('qa/gallery', { recursive: true })
const html = await (await fetch(`${origin}/galleria/`)).text()
const items = [
  ...html.matchAll(
    /<a class="col-4 album-(\d+)" href="([^"]+)">\s*<img src="([^"]+)"[^>]*alt="([^"]*)"/g,
  ),
].map((m, i) => ({ index: i, album: m[1], url: origin + m[2], thumb: origin + m[3], label: m[4] }))
await writeFile('qa/gallery/inventory.json', JSON.stringify(items, null, 2))
for (let start = 0; start < items.length; start += 24) {
  const batch = items.slice(start, start + 24)
  const layers = []
  for (const item of batch) {
    const data = Buffer.from(await (await fetch(item.thumb)).arrayBuffer())
    await writeFile(`qa/gallery/${item.index}.jpg`, data)
    const x = ((item.index - start) % 4) * 300
    const y = Math.floor((item.index - start) / 4) * 245
    layers.push({
      input: await sharp(data).resize(294, 210, { fit: 'inside' }).toBuffer(),
      left: x,
      top: y,
    })
    const label = `<svg width="300" height="30"><rect width="300" height="30" fill="white"/><text x="8" y="21" font-size="17" font-family="Arial">${item.index} — album ${item.album}</text></svg>`
    layers.push({ input: Buffer.from(label), left: x, top: y + 210 })
  }
  await sharp({
    create: {
      width: 1200,
      height: Math.ceil(batch.length / 4) * 245,
      channels: 3,
      background: '#eeeeee',
    },
  })
    .composite(layers)
    .jpeg()
    .toFile(`qa/gallery/sheet-${start}.jpg`)
}
console.log(
  `Inspected ${items.length} official gallery images; contact sheets saved to qa/gallery.`,
)
