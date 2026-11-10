import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { QuoteForm } from './QuoteForm'

describe('Quote form demo safety and usability', () => {
  it('shows useful validation and focuses the first invalid field', async () => {
    const user = userEvent.setup()
    render(<QuoteForm />)
    await user.click(screen.getByRole('button', { name: /Kokeile tarjouspyyntöä/ }))
    expect(screen.getByLabelText('Nimi *')).toHaveFocus()
    expect(screen.getByText(/Tarkista sähköpostiosoite/)).toBeInTheDocument()
    expect(screen.getByText(/Kerro työstä vähintään/)).toBeInTheDocument()
  })
  it('preselects a service, accepts a local file, and clearly finishes without network or persistent storage', async () => {
    const user = userEvent.setup()
    const fetchSpy = vi.spyOn(globalThis, 'fetch')
    const storageSpy = vi.spyOn(Storage.prototype, 'setItem')
    render(<QuoteForm initialService="autoteippaukset" />)
    expect(screen.getByRole('combobox')).toHaveValue('autoteippaukset')
    await user.type(screen.getByLabelText('Nimi *'), 'Demo Testaaja')
    await user.type(screen.getByLabelText('Sähköposti *'), 'demo@example.invalid')
    await user.type(
      screen.getByLabelText('Millainen työ sinulla on mielessä? *'),
      'Haluan kokeilla tarjouspyyntölomaketta.',
    )
    await user.upload(
      screen.getByLabelText(/Valitse aineistotiedosto/),
      new File(['demo'], 'aineisto.pdf', { type: 'application/pdf' }),
    )
    expect(screen.getByText('aineisto.pdf')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /Kokeile tarjouspyyntöä/ }))
    expect(screen.getByRole('button', { name: /Kokeillaan lomaketta/ })).toBeDisabled()
    await waitFor(() =>
      expect(
        screen.getByRole('heading', { name: 'Demoversio – tarjouspyyntöä ei lähetetty.' }),
      ).toBeInTheDocument(),
    )
    expect(fetchSpy).not.toHaveBeenCalled()
    expect(storageSpy).not.toHaveBeenCalled()
    await user.click(screen.getByRole('button', { name: /Kokeile uudelleen/ }))
    expect(screen.getByLabelText('Nimi *')).toHaveValue('')
    fetchSpy.mockRestore()
    storageSpy.mockRestore()
  })
  it('rejects oversized attachments and allows removing the selected file', async () => {
    const user = userEvent.setup()
    render(<QuoteForm />)
    const file = new File(['a'], 'large.pdf', { type: 'application/pdf' })
    Object.defineProperty(file, 'size', { value: 16 * 1024 * 1024 })
    await user.upload(screen.getByLabelText(/Valitse aineistotiedosto/), file)
    expect(screen.getByText('Valitse enintään 15 Mt:n tiedosto.')).toBeInTheDocument()
    await user.upload(
      screen.getByLabelText(/Valitse aineistotiedosto/),
      new File(['a'], 'small.pdf', { type: 'application/pdf' }),
    )
    await user.click(screen.getByRole('button', { name: 'Poista liite' }))
    expect(screen.queryByText('small.pdf')).not.toBeInTheDocument()
  })
})
