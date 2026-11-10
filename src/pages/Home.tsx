import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, ArrowUpRight, MoveUpRight, RotateCcw, ZoomIn } from 'lucide-react'
import { Shield } from '../components/Brand'
import { Button, Eyebrow, FAQ, FinalCTA, Reveal } from '../components/ui'
import { ServiceSection } from '../components/ServiceSection'
import { ProjectGallery } from '../components/ProjectGallery'
import { Photo } from '../components/Photo'
import { usePageMeta } from '../lib/meta'

function DetailViewer() {
  const [zoom, setZoom] = useState(100)
  return (
    <section className="detail-section">
      <div className="wrap detail-layout">
        <Reveal>
          <Eyebrow light>03 / Lähempää katsottuna</Eyebrow>
          <h2>
            Hyvä työ
            <br />
            kestää katseen.
            <br />
            <span>Myös läheltä.</span>
          </h2>
          <p>
            Muoto. Pinta. Viimeistely.
            <br />
            Tutki kohokirjainten yksityiskohtia yrityksen omasta toteutuskuvasta.
          </p>
          <div className="zoom-control">
            <label htmlFor="detail-zoom">
              <ZoomIn size={18} /> Suurenna kuvaa <span>{zoom} %</span>
            </label>
            <input
              id="detail-zoom"
              type="range"
              min="100"
              max="180"
              step="5"
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              aria-valuetext={`${zoom} prosenttia`}
            />
            <button onClick={() => setZoom(100)}>
              <RotateCcw size={14} /> Palauta näkymä
            </button>
          </div>
        </Reveal>
        <div>
          <div className="detail-image">
            <Photo
              name="sign.webp"
              alt="Jokihydron seinäkilven kohokirjainten yksityiskohta Mainoskilven galleriasta"
              style={{ transform: `scale(${zoom / 100})` }}
            />
          </div>
          <div className="detail-caption">
            <span>KOHOKIRJAIMET / MAINOSKILVEN GALLERIA</span>
            <MoveUpRight size={18} />
          </div>
        </div>
      </div>
    </section>
  )
}

export function Process() {
  const steps = [
    [
      'Kerro ideasi.',
      'Mihin tarvitset näkyvyyttä? Kuva kohteesta ja alustavat mitat auttavat alkuun.',
    ],
    ['Löydä ilme.', 'Suunnittelun tarve, aineisto ja toteutustapa käydään läpi työn mukaan.'],
    ['Sovi toteutus.', 'Materiaalit, hinta ja aikataulu varmistetaan ennen työn aloittamista.'],
    ['Valmiina näkymään.', 'Toimitus tai mahdollinen asennus sovitaan osana kokonaisuutta.'],
  ]
  return (
    <section className="section process-section wrap">
      <div className="section-heading">
        <div>
          <Eyebrow>Ideasta näkyväksi</Eyebrow>
          <h2>
            Hyvä alku.
            <br />
            Näkyvä lopputulos.
          </h2>
        </div>
        <p>
          Näin voit valmistautua tilaamiseen.
          <br />
          Tarkka eteneminen sovitaan Mainoskilven kanssa.
        </p>
      </div>
      <div className="process-grid">
        {steps.map(([title, text], i) => (
          <Reveal key={title}>
            <span className="process-number">0{i + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function Home() {
  usePageMeta(
    'Näy. Erotu. Jää mieleen.',
    'Autoteippaukset, ikkunateippaukset, mainoskilvet ja suurkuvatulosteet Joensuusta. Tutustu Mainoskilven palveluihin ja aitoihin toteutuskuviin. Yksityinen demo.',
  )
  return (
    <>
      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="wrap hero-inner">
          <div className="hero-topline">
            <span>
              <i /> JOENSUUSTA. NÄKYVÄSTI.
            </span>
            <span>TEIPPAUKSET / KILVET / TULOSTEET</span>
          </div>
          <div className="hero-copy">
            <h1>
              <span>NÄY.</span>
              <span>EROTU.</span>
              <span className="hero-orange">JÄÄ MIELEEN.</span>
            </h1>
            <p>
              Mainoskilvet, teippaukset ja visuaaliset
              <br className="desktop-break" /> mainosratkaisut Joensuusta.
            </p>
            <div className="hero-buttons">
              <Button to="/referenssit">Tutustu toteutuksiin</Button>
              <Link to="/yhteystiedot" className="hero-secondary">
                Pyydä tarjous <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-visual-label">
              <span>TEHTY NÄKYMÄÄN.</span>
              <Shield className="hero-shield" />
            </div>
            <div className="hero-photo">
              <Photo
                name="hero-fleet.webp"
                alt="Mainoskilven toteutusgalleriasta: yhtenäiset oranssit teippaukset mustassa autokalustossa"
                eager
              />
            </div>
            <div className="hero-image-footer">
              <span>01 / AUTOTEIPPAUKSET</span>
              <Link to="/palvelut/autoteippaukset">
                Tunnistettava, missä liikutkin <ArrowUpRight size={17} />
              </Link>
            </div>
            <span className="hero-outline-type" aria-hidden="true">
              ASENNETTA.
            </span>
          </div>
          <div className="hero-bottom">
            <a href="#esittely">
              Jatka tutustumista <ArrowDown size={16} />
            </a>
            <span>AITO TOTEUTUSKUVA · MAINOSKILVEN OMA GALLERIA</span>
            <span>PARRUTIE 16 / JOENSUU</span>
          </div>
        </div>
      </section>
      <div className="brand-strip" aria-hidden="true">
        <span>NÄKYVYYTTÄ LIIKKEESSÄ</span>
        <span className="strip-star">✳</span>
        <span>ILMETTÄ PINTOIHIN</span>
        <span className="strip-star">✳</span>
        <span>JÄLKEÄ MIELEEN</span>
        <ArrowUpRight />
      </div>
      <section id="esittely" className="intro-section section wrap">
        <Reveal>
          <Eyebrow>Mainoskilpi Muhonen Oy</Eyebrow>
          <h2>
            Mainontaa,
            <br />
            jota ei voi
            <br />
            <span className="orange">ohittaa.</span>
          </h2>
        </Reveal>
        <Reveal className="intro-copy">
          <span className="intro-cross" aria-hidden="true">
            ↗
          </span>
          <p className="lead">
            Hyvä ilme näkyy.
            <br />
            Oikeassa paikassa se myös tuntuu.
          </p>
          <p>
            Auton kyljessä. Liiketilan ikkunassa. Siinä kyltissä, joka ohjaa asiakkaan perille. Me
            Mainoskilvellä teemme yrityksesi ilmeestä osan ympäristöä.
          </p>
          <p>
            Joensuulaisen perheyrityksen palveluihin kuuluvat teippaukset, kilvet, opasteet ja
            tulosteet. Palvelemme yrityksiä ja yksityisiä Joensuun seudulla ja Pohjois-Karjalassa.
          </p>
          <Link to="/yritys" className="text-link">
            Tutustu Mainoskilpeen <ArrowUpRight size={18} />
          </Link>
        </Reveal>
      </section>
      <ServiceSection />
      <section className="portfolio-section section">
        <div className="wrap">
          <Reveal className="section-heading">
            <div>
              <Eyebrow>02 / Valittuja toteutuksia</Eyebrow>
              <h2>
                Työn jälki
                <br />
                <span className="muted">puhuu puolestaan.</span>
              </h2>
            </div>
            <Button to="/referenssit" secondary>
              Kaikki toteutukset
            </Button>
          </Reveal>
          <ProjectGallery preview />
        </div>
      </section>
      <DetailViewer />
      <Process />
      <section className="about-band">
        <div className="wrap about-band-inner">
          <div className="about-year">
            <span>JUURET JOENSUUSSA</span>
            <strong>
              1971<span>—</span>
            </strong>
            <span>YRITYKSEN OMAN HISTORIAN MUKAAN</span>
          </div>
          <div>
            <Eyebrow>Paikallinen tekijä</Eyebrow>
            <h2>
              Tuttu kaupunki.
              <br />
              Näkyvä kädenjälki.
            </h2>
            <p>
              Mainoskilpi kertoo tarinansa alkaneen Joensuussa vuonna 1971. Perheyrityksessä
              tekeminen on jatkunut jo kolmanteen polveen. Tänään löydät meidät Parrutieltä.
            </p>
            <Link className="text-link" to="/yritys">
              Tarina nimen takana <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <FAQ />
      <FinalCTA />
    </>
  )
}
