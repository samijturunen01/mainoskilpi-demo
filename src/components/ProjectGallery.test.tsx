import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { expect, it } from 'vitest'
import { ProjectGallery } from './ProjectGallery'

it('filters real projects, searches, opens the detail dialog, and restores the full gallery', async () => {
  const user = userEvent.setup()
  render(
    <MemoryRouter>
      <ProjectGallery />
    </MemoryRouter>,
  )
  expect(screen.getAllByRole('button', { name: /Avaa toteutus/ })).toHaveLength(8)
  await user.click(screen.getByRole('button', { name: 'Ajoneuvot' }))
  expect(screen.getAllByRole('button', { name: /Avaa toteutus/ })).toHaveLength(2)
  await user.click(screen.getByRole('button', { name: /Avaa toteutus: Yksi ilme/ }))
  expect(screen.getByRole('dialog')).toBeVisible()
  expect(screen.getByRole('link', { name: /Alkuperäinen kuva/ })).toHaveAttribute(
    'href',
    'http://www.mainoskilpi.fi/perch/resources/20160425_152210.jpg',
  )
  await user.click(screen.getByRole('button', { name: 'Seuraava' }))
  expect(
    screen.getByRole('heading', { level: 2, name: 'Näkyvyyttä tien päälle.' }),
  ).toBeInTheDocument()
  await user.click(screen.getByRole('button', { name: 'Sulje toteutus' }))
  await user.type(screen.getByRole('searchbox'), 'ei löydy')
  expect(screen.getByText('Tällä haulla ei löytynyt toteutuksia.')).toBeInTheDocument()
  await user.click(screen.getByRole('button', { name: /Näytä kaikki/ }))
  expect(screen.getAllByRole('button', { name: /Avaa toteutus/ })).toHaveLength(8)
})
