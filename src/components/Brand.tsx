import { useId } from 'react'
import { asset } from '../data/content'

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand ${compact ? 'brand-compact' : ''}`}>
      <img src={asset('brand/mainoskilpi-logo.jpg')} alt="Mainoskilpi" width="76" height="76" />
      {!compact && (
        <span className="brand-label">
          MAINOSKILPI<span>MUHONEN OY · JOENSUU</span>
        </span>
      )}
    </span>
  )
}

// The supplied raster is embedded unchanged, clipped around its existing shield.
// The animated outline follows the reference silhouette; the actual monogram is never redrawn.
export function Shield({ className = '' }: { className?: string }) {
  const id = useId().replace(/:/g, '')
  const shape = 'M35 40H58L75 50L92 40H114V97Q114 119 75 135Q35 119 35 97Z'
  return (
    <svg className={`shield ${className}`} viewBox="29 34 91 107" aria-hidden="true">
      <defs>
        <clipPath id={id}>
          <path d={shape} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id})`}>
        <image
          className="shield-image"
          href={asset('brand/mainoskilpi-logo.jpg')}
          width="150"
          height="150"
        />
      </g>
      <path
        className="shield-outline"
        d={shape}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        pathLength="1"
      />
    </svg>
  )
}
