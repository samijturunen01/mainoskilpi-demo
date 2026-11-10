import { useRef, useState, type FormEvent } from 'react'
import { ArrowUpRight, Check, LoaderCircle, Paperclip, X } from 'lucide-react'
import { services } from '../data/content'
import { submitDemoQuote, validateQuote, type QuoteData, type QuoteErrors } from '../lib/quote'

export function QuoteForm({ initialService = '' }: { initialService?: string }) {
  const [data, setData] = useState<QuoteData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    service:
      initialService === 'muu' || services.some((s) => s.slug === initialService)
        ? initialService
        : '',
    message: '',
    dimensions: '',
  })
  const [errors, setErrors] = useState<QuoteErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle')
  const [fileName, setFileName] = useState('')
  const [fileError, setFileError] = useState('')
  const file = useRef<HTMLInputElement>(null)
  const form = useRef<HTMLFormElement>(null)
  const success = useRef<HTMLDivElement>(null)
  function change(key: keyof QuoteData, value: string) {
    setData((d) => ({ ...d, [key]: value }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }
  async function submit(e: FormEvent) {
    e.preventDefault()
    const nextErrors = validateQuote(data)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length || fileError) {
      const name = Object.keys(nextErrors)[0] || 'attachment'
      form.current?.querySelector<HTMLElement>(`[name="${name}"]`)?.focus()
      return
    }
    setStatus('loading')
    await submitDemoQuote()
    setData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      dimensions: '',
    })
    setFileName('')
    if (file.current) file.current.value = ''
    setStatus('done')
    requestAnimationFrame(() => success.current?.focus())
  }
  function field(
    key: keyof QuoteData,
    label: string,
    type = 'text',
    required = false,
    autoComplete?: string,
  ) {
    return (
      <div className="field">
        <label htmlFor={key}>
          {label}
          {required ? ' *' : <span>Valinnainen</span>}
        </label>
        <input
          id={key}
          name={key}
          type={type}
          value={data[key]}
          autoComplete={autoComplete}
          required={required}
          maxLength={key === 'message' ? 5000 : 200}
          onChange={(e) => change(key, e.target.value)}
          aria-invalid={!!errors[key]}
          aria-describedby={errors[key] ? `${key}-error` : undefined}
        />
        {errors[key] && (
          <p className="field-error" id={`${key}-error`}>
            {errors[key]}
          </p>
        )}
      </div>
    )
  }
  if (status === 'done')
    return (
      <div className="form-success" role="status" tabIndex={-1} ref={success}>
        <span className="success-icon">
          <Check />
        </span>
        <p className="eyebrow">Lomakkeen kokeilu valmis</p>
        <h2>Demoversio – tarjouspyyntöä ei lähetetty.</h2>
        <p>
          Tietojasi ei tallennettu eikä liitteitä ladattu palvelimelle. Voit tehdä oikean
          tiedustelun suoraan yrityksen puhelimeen tai sähköpostiin.
        </p>
        <button className="button" onClick={() => setStatus('idle')}>
          Kokeile uudelleen <ArrowUpRight size={18} />
        </button>
      </div>
    )
  return (
    <form ref={form} className="quote-form" onSubmit={submit} noValidate>
      <div className="form-heading">
        <h2>Kerro ideastasi.</h2>
        <span>* Pakollinen kenttä</span>
      </div>
      <p className="form-demo-note">Kokeiltava demolomake. Tietoja ei lähetetä eikä tallenneta.</p>
      <fieldset disabled={status === 'loading'}>
        <legend className="sr-only">Tarjouspyynnön tiedot</legend>
        <div className="form-grid">
          {field('name', 'Nimi', 'text', true, 'name')}
          {field('company', 'Yritys', 'text', false, 'organization')}
          {field('email', 'Sähköposti', 'email', true, 'email')}
          {field('phone', 'Puhelinnumero', 'tel', false, 'tel')}
          <div className="field full">
            <label htmlFor="service">Mistä palvelusta olet kiinnostunut? *</label>
            <select
              id="service"
              name="service"
              required
              value={data.service}
              onChange={(e) => change('service', e.target.value)}
              aria-invalid={!!errors.service}
              aria-describedby={errors.service ? 'service-error' : undefined}
            >
              <option value="">Valitse palvelu</option>
              {services.map((s) => (
                <option value={s.slug} key={s.slug}>
                  {s.name}
                </option>
              ))}
              <option value="muu">Muu / en vielä tiedä</option>
            </select>
            {errors.service && (
              <p className="field-error" id="service-error">
                {errors.service}
              </p>
            )}
          </div>
          <div className="field full">
            <label htmlFor="message">Millainen työ sinulla on mielessä? *</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              maxLength={5000}
              placeholder="Kerro kohteesta, toiveistasi ja mahdollisesta aikataulusta."
              value={data.message}
              onChange={(e) => change('message', e.target.value)}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p className="field-error" id="message-error">
                {errors.message}
              </p>
            )}
          </div>
          <div className="full">{field('dimensions', 'Alustavat mitat tai lisätiedot')}</div>
          <div className="field full attachment">
            <label htmlFor="attachment">
              <Paperclip size={18} />
              {fileName || 'Valitse aineistotiedosto'}
              <span>Valinnainen</span>
            </label>
            <input
              ref={file}
              id="attachment"
              name="attachment"
              type="file"
              accept=".pdf,.jpg,.jpeg,.png,.svg,.ai,.eps"
              aria-describedby="attachment-note attachment-error"
              onChange={(e) => {
                const chosen = e.target.files?.[0]
                if (!chosen) {
                  setFileName('')
                  setFileError('')
                  return
                }
                if (chosen.size > 15 * 1024 * 1024) {
                  setFileError('Valitse enintään 15 Mt:n tiedosto.')
                  setFileName('')
                  e.target.value = ''
                  return
                }
                if (!/\.(pdf|jpe?g|png|svg|ai|eps)$/i.test(chosen.name)) {
                  setFileError('Valitse PDF-, JPG-, PNG-, SVG-, AI- tai EPS-tiedosto.')
                  setFileName('')
                  e.target.value = ''
                  return
                }
                setFileName(chosen.name)
                setFileError('')
              }}
            />
            {fileName && (
              <button
                type="button"
                className="remove-file"
                onClick={() => {
                  setFileName('')
                  if (file.current) file.current.value = ''
                }}
              >
                <X size={16} /> Poista liite
              </button>
            )}
            <p id="attachment-note">
              PDF, JPG, PNG, SVG, AI tai EPS · enintään 15 Mt. Tiedosto pysyy laitteellasi.
            </p>
            <p className="field-error" id="attachment-error">
              {fileError}
            </p>
          </div>
        </div>
        <p className="form-privacy">
          Tässä demossa tietoja käsitellään vain sivun muistissa ja kentät tyhjennetään kokeilun
          jälkeen. Älä lisää luottamuksellisia tietoja.
        </p>
        <button className="button submit-button" type="submit">
          {status === 'loading' ? (
            <>
              <LoaderCircle className="spin" size={18} /> Kokeillaan lomaketta…
            </>
          ) : (
            <>
              Kokeile tarjouspyyntöä <ArrowUpRight size={19} />
            </>
          )}
        </button>
      </fieldset>
    </form>
  )
}
