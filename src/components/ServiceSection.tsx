import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { services } from '../data/content'
import { Eyebrow, Reveal } from './ui'
import { Photo } from './Photo'

export function ServiceSection() {
  const [active, setActive] = useState(0)
  return (
    <section className="section services-section wrap" id="palvelut">
      <Reveal className="section-heading">
        <div>
          <Eyebrow>01 / Palvelut</Eyebrow>
          <h2>
            Kaikki pinnat.
            <br />
            <span className="muted">Yksi vahva ilme.</span>
          </h2>
        </div>
        <p>
          Auton kyljestä liiketilan julkisivuun.
          <br />
          Ratkaisut, jotka tekevät yrityksesi näkyväksi.
        </p>
      </Reveal>
      <div className="service-showcase">
        <div className="service-list">
          {services.map((service, i) => (
            <Link
              key={service.slug}
              className={`service-row ${active === i ? 'active' : ''}`}
              to={`/palvelut/${service.slug}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <span className="service-number">0{i + 1}</span>
              <div>
                <h3>{service.name}</h3>
                <p>{service.short}</p>
              </div>
              <ArrowUpRight size={24} />
            </Link>
          ))}
        </div>
        <div className="service-visual">
          <div className="service-photo-stack">
            {services.map((s, i) => (
              <Photo
                key={s.slug}
                className={i === active ? 'active' : ''}
                name={s.image}
                alt={i === active ? s.alt : ''}
                aria-hidden={i !== active}
              />
            ))}
          </div>
          <div className="service-photo-caption">
            <span>
              0{active + 1} / {services[active].name}
            </span>
            <span>MAINOSKILVEN OMA GALLERIA</span>
          </div>
          <p className="service-visual-line">HYVÄ ILME EI JÄÄ HUOMAAMATTA.</p>
        </div>
      </div>
    </section>
  )
}
