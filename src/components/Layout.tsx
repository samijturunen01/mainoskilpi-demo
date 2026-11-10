import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, X, ArrowUp, MapPin } from 'lucide-react'
import { Brand } from './Brand'
import { Button } from './ui'
import { company, nav, services } from '../data/content'

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menu = useRef<HTMLDialogElement>(null)
  const main = useRef<HTMLElement>(null)
  const location = useLocation()
  const initial = useRef(true)
  function closeMenu() {
    menu.current?.close()
    setMenuOpen(false)
  }
  function openMenu() {
    menu.current?.showModal()
    setMenuOpen(true)
  }
  useEffect(() => {
    if (initial.current) {
      initial.current = false
      return
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
    main.current?.focus({ preventScroll: true })
  }, [location.pathname])
  useEffect(() => {
    if (!menuOpen) return
    const old = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = old
    }
  }, [menuOpen])
  return (
    <>
      <a href="#sisalto" className="skip-link">
        Siirry sisältöön
      </a>
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" aria-label="Mainoskilpi – etusivu" className="brand-link">
            <Brand />
          </Link>
          <nav aria-label="Päävalikko" className="desktop-nav">
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Button to="/yhteystiedot" className="header-quote">
            Pyydä tarjous
          </Button>
          <button
            className="menu-toggle"
            aria-label="Avaa valikko"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={openMenu}
          >
            <Menu />
          </button>
        </div>
      </header>
      <dialog
        className="mobile-menu"
        id="mobile-menu"
        ref={menu}
        onClose={() => setMenuOpen(false)}
      >
        <div className="mobile-menu-top">
          <Brand />
          <button className="icon-button" onClick={closeMenu} aria-label="Sulje valikko">
            <X />
          </button>
        </div>
        <nav aria-label="Mobiilivalikko">
          {[{ to: '/', label: 'Etusivu' }, ...nav].map((item, i) => (
            <NavLink key={item.to} to={item.to} onClick={closeMenu}>
              <span>0{i + 1}</span>
              {item.label}
              <ArrowUpRight />
            </NavLink>
          ))}
        </nav>
        <a className="mobile-phone" href={company.phoneHref}>
          {company.phone}
        </a>
        <p>Parrutie 16 · Joensuu</p>
      </dialog>
      <main id="sisalto" ref={main} tabIndex={-1} key={location.pathname} className="page-enter">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="wrap">
          <div className="footer-top">
            <div>
              <Brand />
              <p>
                Teippaukset. Kilvet. Tulosteet.
                <br />
                Tehty näkymään.
              </p>
            </div>
            <div>
              <p className="footer-title">Tule käymään</p>
              <address>
                {company.name}
                <br />
                {company.address}
                <br />
                {company.city}
              </address>
              <a className="text-link" href={company.map} target="_blank" rel="noreferrer">
                Avaa kartta <MapPin size={15} />
              </a>
            </div>
            <div>
              <p className="footer-title">Otetaan yhteyttä</p>
              <a href={company.phoneHref} className="footer-phone">
                {company.phone}
              </a>
              <a className="footer-email" href={`mailto:${company.email}`}>
                {company.email}
              </a>
              <Link className="text-link" to="/yhteystiedot">
                Pyydä tarjous <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
          <div className="footer-services">
            {services.map((s) => (
              <Link key={s.slug} to={`/palvelut/${s.slug}`}>
                {s.name}
              </Link>
            ))}
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Mainoskilpi Muhonen Oy · Y-tunnus {company.businessId}
            </span>
            <Link to="/tietoa-demosta">Tietoa demosta ja kuvaoikeuksista</Link>
            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: matchMedia('(prefers-reduced-motion: reduce)').matches
                    ? 'instant'
                    : 'smooth',
                })
              }
            >
              Takaisin ylös <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </footer>
    </>
  )
}
