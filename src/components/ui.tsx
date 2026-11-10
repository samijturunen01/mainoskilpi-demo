import { useEffect, useRef, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Plus } from 'lucide-react'
import { faqs } from '../data/content'

export function Button({
  to,
  children,
  secondary = false,
  className = '',
}: {
  to: string
  children: ReactNode
  secondary?: boolean
  className?: string
}) {
  return (
    <Link to={to} className={`button ${secondary ? 'button-secondary' : ''} ${className}`}>
      {children}
      <ArrowUpRight size={19} aria-hidden="true" />
    </Link>
  )
}
export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`eyebrow ${light ? 'eyebrow-light' : ''}`}>
      <span aria-hidden="true" />
      {children}
    </p>
  )
}
export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (
      !el ||
      matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    )
      return
    el.classList.add('reveal-ready')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          observer.disconnect()
        }
      },
      { threshold: 0.08 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
export function FAQ({ short = false }: { short?: boolean }) {
  return (
    <section className="section faq-section wrap">
      <Reveal>
        <Eyebrow>Hyvä tietää</Eyebrow>
        <h2>
          Kysymyksiä?
          <br />
          <span className="muted">Aloitetaan näistä.</span>
        </h2>
        <p>
          Jokainen työ on omanlaisensa.
          <br />
          Tarkemmat yksityiskohdat sovitaan yhdessä.
        </p>
      </Reveal>
      <div className="faq-list">
        {faqs.slice(0, short ? 4 : undefined).map((item) => (
          <details key={item.q}>
            <summary>
              {item.q}
              <Plus size={19} aria-hidden="true" />
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
export function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="wrap">
        <Eyebrow>Sinun vuorosi näkyä</Eyebrow>
        <Link className="big-cta" to="/yhteystiedot">
          <h2>
            Tehdään yrityksestäsi
            <br />
            <span>näkyvä.</span>
          </h2>
          <span className="cta-circle">
            <ArrowUpRight aria-label="Pyydä tarjous" />
          </span>
        </Link>
        <div className="cta-bottom">
          <p>Hyvä toteutus alkaa yhdestä yhteydenotosta.</p>
          <Button to="/yhteystiedot" secondary>
            Pyydä tarjous
          </Button>
        </div>
      </div>
    </section>
  )
}
