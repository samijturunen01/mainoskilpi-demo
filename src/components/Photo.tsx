import type { ImgHTMLAttributes } from 'react'
import { asset } from '../data/content'

const sizes: Record<string, [number, number]> = {
  'hero-fleet.webp': [1256, 479],
  'vehicle-blue.webp': [928, 522],
  'vehicle-black.webp': [598, 418],
  'window.webp': [928, 522],
  'window-arena.webp': [605, 365],
  'sign.webp': [1680, 766],
  'stickers.webp': [1392, 783],
  'print.webp': [928, 522],
  'exhibition.webp': [769, 471],
  'workshop.webp': [1680, 766],
}
export function Photo({
  name,
  alt,
  eager = false,
  ...props
}: Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  name: string
  alt: string
  eager?: boolean
}) {
  const [width, height] = sizes[name] || [928, 522]
  const smallWidth = Math.min(width, 800)
  return (
    <img
      src={asset(`images/${name}`)}
      srcSet={
        width > 800
          ? `${asset(`images/${name.replace('.webp', '-small.webp')}`)} ${smallWidth}w, ${asset(`images/${name}`)} ${width}w`
          : undefined
      }
      sizes="(max-width: 700px) 100vw, 65vw"
      alt={alt}
      width={width}
      height={height}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : 'auto'}
      decoding="async"
      {...props}
    />
  )
}
