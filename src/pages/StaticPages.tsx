import { Link, useSearchParams } from 'react-router-dom'
import { ArrowUpRight, MapPin, Phone, Mail, ArrowLeft } from 'lucide-react'
import { company } from '../data/content'
import { Eyebrow, FinalCTA, Button, Reveal } from '../components/ui'
import { Photo } from '../components/Photo'
import { ProjectGallery } from '../components/ProjectGallery'
import { QuoteForm } from '../components/QuoteForm'
import { Shield } from '../components/Brand'
import { Process } from './Home'
import { usePageMeta } from '../lib/meta'

export function Portfolio() {
  usePageMeta(
    'Toteutuksia – teippaukset, kilvet ja tulosteet',
    'Aitoja Mainoskilven toteutuskuvia yrityksen omasta galleriasta. Selaa autoteippauksia, ikkunoita, kylttejä ja muita töitä. Yksityinen demo.',
  )
  return (
    <>
      <section className="page-heading wrap">
        <Eyebrow>Referenssit / Toteutusgalleria</Eyebrow>
        <h1>
          TEHTY.
          <br />
          <span className="orange">NÄHTY. MUISTETTU.</span>
        </h1>
        <div className="page-heading-bottom">
          <p className="lead">
            Auton kyljessä. Kaupungin katukuvassa.
            <br />
            Siellä, missä yritykset näkyvät.
          </p>
          <p>
            Valikoima yrityksen omassa galleriassa
            <br />
            julkaistuista toteutuskuvista.
          </p>
        </div>
      </section>
      <section className="wrap gallery-page" aria-label="Toteutusgalleria">
        <ProjectGallery />
      </section>
      <FinalCTA />
    </>
  )
}

export function About() {
  usePageMeta(
    'Joensuulainen perheyritys',
    'Mainoskilpi Muhonen Oy on joensuulainen perheyritys. Yrityksen oman sivuston mukaan toiminta alkoi vuonna 1971. Tutustu paikalliseen tekijään.',
  )
  return (
    <>
      <section className="about-page-hero">
        <div className="wrap">
          <Eyebrow light>Yritys / Mainoskilpi Muhonen Oy</Eyebrow>
          <h1>
            JOENSUULAINEN.
            <br />
            OMANLAISENSA.
            <br />
            <span className="orange">MAINOSKILPI.</span>
          </h1>
          <div className="about-hero-bottom">
            <p>
              Paikallinen perheyritys.
              <br />
              Kädenjälki, joka näkyy ympärillä.
            </p>
            <Shield />
          </div>
        </div>
      </section>
      <section className="section wrap about-story">
        <Reveal>
          <Eyebrow>Tekijät nimen takana</Eyebrow>
          <h2>
            Juuret täällä.
            <br />
            <span className="muted">Katse eteenpäin.</span>
          </h2>
        </Reveal>
        <div>
          <p className="lead">
            Mainoskilpi on joensuulainen perheyritys, jonka oma historia ulottuu vuoteen 1971.
          </p>
          <p>
            Yrityksen oman esittelyn mukaan yrittäjiä on jo kolmannessa polvessa. Toiminnan ytimessä
            on henkilökohtainen palvelu ja asiakkaan tarpeeseen sovitettu toteutus.
          </p>
          <p>
            Mainoskilpi palvelee yrityksiä ja yksityisasiakkaita pääsääntöisesti Pohjois-Karjalassa
            ja Joensuun seudulla. Palvelut kattavat teippaukset, mainoskilvet, opasteet,
            suurkuvatulosteet ja muut visuaalisen mainonnan tuotteet.
          </p>
          <a
            className="source-link"
            href="http://www.mainoskilpi.fi/"
            target="_blank"
            rel="noreferrer"
          >
            Historiatiedon lähde: yrityksen oma esittely ↗
          </a>
        </div>
      </section>
      <figure className="wrap about-workshop">
        <Photo
          name="workshop.webp"
          alt="Mainoskilven omassa galleriassa esitelty henkilöauto teippaushallissa"
        />
        <figcaption>
          Aito kuva Mainoskilven toteutusgalleriasta. Kuvan julkaisulupa tarkistettava.
        </figcaption>
      </figure>
      <Process />
      <section className="wrap local-section">
        <span className="local-type">JOENSUU.</span>
        <div>
          <Eyebrow>Parrutie 16</Eyebrow>
          <h2>
            Lähellä on
            <br />
            helppo aloittaa.
          </h2>
          <p>
            Löydät Mainoskilven Raatekankaalta. Ota yhteyttä ennen käyntiä ja sovitaan omasta
            työstäsi.
          </p>
          <a className="text-link" href={company.map} target="_blank" rel="noreferrer">
            Katso sijainti kartalla <MapPin size={18} />
          </a>
        </div>
      </section>
      <FinalCTA />
    </>
  )
}

export function Contact() {
  const [params] = useSearchParams()
  const initialService = params.get('palvelu') || ''
  usePageMeta(
    'Yhteystiedot ja tarjouspyyntö',
    'Mainoskilpi Muhonen Oy, Parrutie 16, 80100 Joensuu. Puhelin 013 801 616, mainoskilpi@mainoskilpi.fi. Demolomake ei lähetä tietoja.',
  )
  return (
    <>
      <section className="page-heading wrap contact-heading">
        <Eyebrow>Yhteystiedot</Eyebrow>
        <h1>
          ALOITETAAN
          <br />
          <span className="orange">JOSTAIN NÄKYVÄSTÄ.</span>
        </h1>
      </section>
      <section className="contact-layout wrap">
        <div className="contact-info">
          <p className="lead">
            Sinulla on idea.
            <br />
            Otetaan siitä kiinni.
          </p>
          <p>
            Kysy, kerro tai tule käymään.
            <br />
            Valmista suunnitelmaa ei tarvita.
          </p>
          <a href={company.phoneHref} className="contact-item">
            <Phone size={21} />
            <span>
              <small>Soita</small>
              {company.phone}
            </span>
            <ArrowUpRight size={19} />
          </a>
          <a href={`mailto:${company.email}`} className="contact-item">
            <Mail size={21} />
            <span>
              <small>Kirjoita</small>
              {company.email}
            </span>
            <ArrowUpRight size={19} />
          </a>
          <a href={company.map} target="_blank" rel="noreferrer" className="contact-item">
            <MapPin size={21} />
            <span>
              <small>Tule käymään · avaa kartta</small>
              {company.address}
              <br />
              {company.city}
            </span>
            <ArrowUpRight size={19} />
          </a>
          <div className="contact-brand-panel">
            <Shield />
            <span>
              NÄHDÄÄN
              <br />
              PARRUTIELLÄ.
            </span>
          </div>
          <p className="contact-business">
            {company.name}
            <br />
            Y-tunnus {company.businessId}
            <br />
            Aukioloajat ja käynnit: varmista suoraan yritykseltä.
          </p>
        </div>
        <QuoteForm key={initialService} initialService={initialService} />
      </section>
    </>
  )
}

export function DemoInfo() {
  usePageMeta(
    'Tietoa demosta ja kuvaoikeuksista',
    'Yksityisen Mainoskilpi-verkkosivukonseptin tiedot, lähteet, kuvaoikeudet ja demolomakkeen tietojen käsittely.',
  )
  return (
    <section className="wrap legal-page section">
      <Eyebrow>Yksityinen esittelyversio</Eyebrow>
      <h1>Tietoa demosta.</h1>
      <p className="lead">
        Tämä sivusto on Mainoskilpi Muhonen Oy:lle valmisteltu yksityinen verkkosivukonsepti. Yritys
        ei ole hyväksynyt tai tilannut sitä.
      </p>
      <h2>Aidot kuvat, tarkistettavat oikeudet</h2>
      <p>
        Kaikki toteutusvalokuvat ovat yrityksen omasta julkisesta galleriasta. Sivustolla käytetään
        käyttäjän toimittamaa alkuperäistä logoa. Kuvia ei ole luotu tekoälyllä, eikä mukana ole
        kuvitteellisia asiakastöitä tai muiden mainosyritysten valokuvia.
      </p>
      <p>
        Kuvat on ladattu paikallista esittelyä varten ja optimoitu kuvasuhteet säilyttäen. Julkinen
        saatavuus ei tarkoita vapaata käyttöoikeutta. Ennen julkaisua tarvitaan tarvittavat luvat
        yritykseltä, kuvaajilta ja muilta oikeudenhaltijoilta. Asiakkuuksien nykytilasta tai töiden
        tarkasta laajuudesta ei tehdä oletuksia.
      </p>
      <a
        href="http://www.mainoskilpi.fi/galleria/"
        target="_blank"
        rel="noreferrer"
        className="text-link"
      >
        Yrityksen alkuperäinen galleria <ArrowUpRight size={18} />
      </a>
      <h2>Yritystietojen lähteet</h2>
      <p>
        Yhteystiedot, palvelut ja yrityksen oma historiakuvaus tarkistettiin 10.11.2026. Yrityksen
        oma sivusto kertoo toiminnan alkaneen vuonna 1971. Asiakastiedon yrityshakemistossa
        toiminnan aloitusvuosi on 1982 ja Proffin rekisteröintipäivä on 20.1.1983. Historiassa
        käytetään yrityksen omaa kuvausta; vuosilukujen ero on hyvä vahvistaa ennen julkaisua.
      </p>
      <ul>
        <li>
          <a href="http://www.mainoskilpi.fi/" target="_blank" rel="noreferrer">
            Mainoskilpi – yrityksen esittely ja yhteystiedot
          </a>
        </li>
        <li>
          <a href="http://www.mainoskilpi.fi/palvelumme/" target="_blank" rel="noreferrer">
            Mainoskilpi – palvelut
          </a>
        </li>
        <li>
          <a href="http://www.mainoskilpi.fi/aineisto-ohjeet/" target="_blank" rel="noreferrer">
            Mainoskilpi – aineisto-ohjeet
          </a>
        </li>
        <li>
          <a
            href="https://www.asiakastieto.fi/yritykset/fi/mainoskilpi-muhonen-oy/05002697/yleiskuva"
            target="_blank"
            rel="noreferrer"
          >
            Asiakastieto – yritystiedot
          </a>
        </li>
      </ul>
      <h2>Lomakkeen tiedot pysyvät selaimessa</h2>
      <p>
        Lomake on käyttöliittymädemo. Kenttien sisältö ja valittu liite pysyvät sivun muistissa.
        Niitä ei lähetetä, tallenneta palvelimelle tai selaimen pysyvään tallennustilaan. Kokeilun
        jälkeen kentät tyhjennetään. Sivulla ei ole analytiikkaa, mainosseurantaa eikä ulkoisia
        karttaupotuksia.
      </p>
      <p>
        Puhelin-, sähköposti- ja karttalinkit avaavat käyttäjän valitessa ulkoisen sovelluksen tai
        palvelun. Niiden toimintaa koskevat kyseisen palvelun ehdot.
      </p>
      <h2>Ennen julkista käyttöönottoa</h2>
      <p>
        Yrityksen hyväksyntä, tekstien ja kuvaoikeuksien tarkistus, lopullinen logotiedosto,
        tietosuojatiedot, saavutettavuuden tarkistus ja turvallinen lomakepalvelu tarvitaan ennen
        julkaisua. Hakukoneindeksointi on estetty robots-metatiedolla ja robots.txt-tiedostolla.
        Sivustoa ei ole julkaistu.
      </p>
      <Button to="/" secondary>
        Takaisin etusivulle
      </Button>
    </section>
  )
}

export function NotFound() {
  usePageMeta(
    'Sivua ei löytynyt',
    'Etsimääsi sivua ei löytynyt. Palaa Mainoskilven etusivulle tai tutustu palveluihin.',
  )
  return (
    <section className="not-found wrap">
      <Eyebrow>Hups. Nyt mentiin ohi.</Eyebrow>
      <span className="error-number">
        404<span>↗</span>
      </span>
      <h1>Kaikki tiet eivät vie Parrutielle.</h1>
      <p>Tätä sivua ei löytynyt. Palataan paikkaan, josta on helppo jatkaa.</p>
      <Link className="button" to="/">
        <ArrowLeft size={18} /> Takaisin etusivulle
      </Link>
    </section>
  )
}
