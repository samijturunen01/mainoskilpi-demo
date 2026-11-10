import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '@fontsource/barlow-condensed/latin-600.css'
import '@fontsource/barlow-condensed/latin-700.css'
import '@fontsource-variable/manrope'
import './styles/main.css'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { ServicePage, Services } from './pages/Services'
import { About, Contact, DemoInfo, NotFound, Portfolio } from './pages/StaticPages'

const organization = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Mainoskilpi Muhonen Oy',
  telephone: '+35813801616',
  email: 'mainoskilpi@mainoskilpi.fi',
  identifier: '0500269-7',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Parrutie 16',
    postalCode: '80100',
    addressLocality: 'Joensuu',
    addressCountry: 'FI',
  },
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <script type="application/ld+json">{JSON.stringify(organization)}</script>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="palvelut" element={<Services />} />
          <Route path="palvelut/:slug" element={<ServicePage />} />
          <Route path="referenssit" element={<Portfolio />} />
          <Route path="yritys" element={<About />} />
          <Route path="yhteystiedot" element={<Contact />} />
          <Route path="tietoa-demosta" element={<DemoInfo />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
