export type QuoteData = {
  name: string
  company: string
  email: string
  phone: string
  service: string
  message: string
  dimensions: string
}
export type QuoteErrors = Partial<Record<keyof QuoteData, string>>
export function validateQuote(data: QuoteData): QuoteErrors {
  const errors: QuoteErrors = {}
  if (data.name.trim().length < 2) errors.name = 'Kirjoita nimesi (vähintään 2 merkkiä).'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))
    errors.email = 'Tarkista sähköpostiosoite, esimerkiksi nimi@yritys.fi.'
  if (!data.service) errors.service = 'Valitse palvelu tai ”Muu / en vielä tiedä”.'
  if (data.message.trim().length < 10) errors.message = 'Kerro työstä vähintään 10 merkillä.'
  return errors
}

// Intentionally receives no form data: no network request, upload, persistence or analytics.
// A future production adapter belongs here and requires a server-side receiving service.
export async function submitDemoQuote(): Promise<{ message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 650))
  return { message: 'Demoversio – tarjouspyyntöä ei lähetetty.' }
}
