import { Link, useParams } from 'react-router-dom'
import { ArrowUpRight, ArrowLeft } from 'lucide-react'
import { services } from '../data/content'
import { Button, Eyebrow, FAQ, FinalCTA, Reveal } from '../components/ui'
import { Photo } from '../components/Photo'
import { usePageMeta } from '../lib/meta'
import { NotFound } from './StaticPages'

export function Services() {
  usePageMeta(
    'Teippaukset, kilvet ja tulosteet Joensuussa',
    'Tutustu Mainoskilven autoteippauksiin, ikkunateippauksiin, mainoskilpiin, opasteisiin, suurkuvatulosteisiin ja tarroihin. Paikallinen verkkosivudemo.',
  )
  return (
    <>
      <section className="page-heading wrap">
        <Eyebrow>Palvelut / Mainoskilpi</Eyebrow>
        <h1>
          PINNALLA
          <br />
          <span className="orange">ON VÄLIÄ.</span>
        </h1>
        <p className="lead">Viisi tapaa näkyä. Rajattomasti paikkoja jäädä mieleen.</p>
      </section>
      <div className="wrap service-index">
        {services.map((service, i) => (
          <Reveal className="service-index-item" key={service.slug}>
            <div>
              <span className="index-number">0{i + 1}</span>
              <h2>{service.name}</h2>
              <p>{service.intro}</p>
              <Button to={`/palvelut/${service.slug}`} secondary>
                Tutustu palveluun
              </Button>
            </div>
            <Link to={`/palvelut/${service.slug}`} aria-label={`Tutustu: ${service.name}`}>
              <Photo name={service.image} alt={service.alt} />
              <span className="image-link-label">
                {service.short}
                <ArrowUpRight size={22} />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
      <section className="additional-services wrap section">
        <Eyebrow>Myös nämä kuuluvat valikoimaan</Eyebrow>
        <h2>
          Ilme jatkuu
          <br />
          pinnasta toiseen.
        </h2>
        <div className="service-tags">
          {[
            'Mainostaulut',
            'Urheilutilamainokset',
            'Mainostelineet ja roll-upit',
            'Tulostustapetit',
            'Messu- ja näyttelyosastot',
            'Tekstiilipainatukset',
            'Lasertulostus',
          ].map((s) => (
            <Link to="/yhteystiedot?palvelu=muu" key={s}>
              {s}
              <ArrowUpRight size={18} />
            </Link>
          ))}
        </div>
        <p>
          Palvelut perustuvat Mainoskilven omaan palvelusivuun. Saatavuus ja toteutuksen
          yksityiskohdat varmistetaan suoraan yritykseltä.
        </p>
      </section>
      <FinalCTA />
    </>
  )
}

export function ServicePage() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)
  usePageMeta(
    service ? `${service.name} Joensuu` : 'Sivua ei löytynyt',
    service ? service.intro : 'Etsimääsi palvelusivua ei löytynyt.',
  )
  if (!service) return <NotFound />
  const index = services.indexOf(service)
  const next = services[(index + 1) % services.length]
  return (
    <>
      <section className={`service-hero service-theme-${index}`}>
        <div className="wrap">
          <Link to="/palvelut" className="back-link">
            <ArrowLeft size={16} /> Kaikki palvelut
          </Link>
          <div className="service-hero-heading">
            <div>
              <Eyebrow light>{`0${index + 1} / ${service.name}`}</Eyebrow>
              <h1>{service.title}</h1>
            </div>
            <span className="service-big-number" aria-hidden="true">
              0{index + 1}
            </span>
          </div>
          <div className="service-hero-photo">
            <Photo name={service.image} alt={service.alt} eager />
          </div>
          <div className="service-photo-caption">
            <span>{service.kicker}</span>
            <span>AITO KUVA MAINOSKILVEN GALLERIASTA</span>
          </div>
        </div>
      </section>
      <section className="section wrap service-description">
        <Reveal>
          <Eyebrow>{service.name} Joensuu</Eyebrow>
          <h2>{service.short}</h2>
          <Button to={`/yhteystiedot?palvelu=${service.slug}`}>Pyydä tarjous</Button>
        </Reveal>
        <div>
          <p className="lead">{service.intro}</p>
          {service.details.map((detail) => (
            <Reveal key={detail.title} className="service-benefit">
              <h3>{detail.title}</h3>
              <p>{detail.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="service-checklist wrap">
        <h3>Tarjouspyyntöön riittää hyvä alku.</h3>
        <p>
          Kerro kohde, alustavat mitat ja toivottu aikataulu. Mainitse myös, onko sinulla valmis
          aineisto vai tarvitsetko suunnittelua.
        </p>
        <Link className="text-link" to={`/yhteystiedot?palvelu=${service.slug}`}>
          Kerro omasta työstäsi <ArrowUpRight size={18} />
        </Link>
      </section>
      <FAQ short />
      <div className="next-service wrap">
        <span>SEURAAVA PALVELU</span>
        <Link to={`/palvelut/${next.slug}`}>
          {next.name}
          <ArrowUpRight />
        </Link>
      </div>
      <FinalCTA />
    </>
  )
}
