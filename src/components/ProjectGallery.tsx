import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ChevronLeft, ChevronRight, Search, X } from 'lucide-react'
import { categories, projects, type Category, type Project } from '../data/content'
import { Reveal } from './ui'
import { Photo } from './Photo'

export function ProjectGallery({ preview = false }: { preview?: boolean }) {
  const [category, setCategory] = useState<Category>('Kaikki')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<Project | null>(null)
  const dialog = useRef<HTMLDialogElement>(null)
  const filtered = projects.filter(
    (p) =>
      (category === 'Kaikki' || p.category === category) &&
      `${p.title} ${p.category} ${p.text}`
        .toLocaleLowerCase('fi')
        .includes(query.toLocaleLowerCase('fi')),
  )
  const visible = preview ? filtered.slice(0, 4) : filtered
  useEffect(() => {
    if (!selected) return
    dialog.current?.showModal()
    const old = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = old
    }
  }, [selected])
  function close() {
    dialog.current?.close()
    setSelected(null)
  }
  function move(direction: number) {
    if (!selected) return
    const index = visible.findIndex((p) => p.id === selected.id)
    setSelected(visible[(index + direction + visible.length) % visible.length])
  }
  return (
    <>
      <div className="gallery-toolbar">
        <div className="filters" aria-label="Rajaa toteutuksia">
          {categories.map((c) => (
            <button
              aria-pressed={c === category}
              className={c === category ? 'active' : ''}
              key={c}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
        {!preview && (
          <label className="gallery-search">
            <Search size={18} aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Etsi toteutuksia"
              aria-label="Etsi toteutuksia"
            />
          </label>
        )}
      </div>
      <p className="sr-only" role="status">
        {visible.length} toteutusta
      </p>
      <div className="project-grid">
        {visible.map((project, i) => (
          <Reveal key={project.id} className={`project project-${i % 4}`}>
            <button
              onClick={() => setSelected(project)}
              aria-label={`Avaa toteutus: ${project.title}`}
            >
              <div className="project-image">
                <Photo name={project.image} alt={project.alt} />
                <span className="project-open">
                  <ArrowUpRight />
                </span>
                <span className="project-index">0{projects.indexOf(project) + 1}</span>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <span>{project.category}</span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>
      {visible.length === 0 && (
        <div className="empty-state">
          <h3>Tällä haulla ei löytynyt toteutuksia.</h3>
          <button
            className="button"
            onClick={() => {
              setQuery('')
              setCategory('Kaikki')
            }}
          >
            Näytä kaikki <ArrowUpRight size={18} />
          </button>
        </div>
      )}
      <p className="image-credit">
        Aidot kuvat Mainoskilven omasta galleriasta. Kuvien julkaisuluvat tarkistettava ennen
        julkaisua.
      </p>
      <dialog
        ref={dialog}
        className="project-dialog"
        aria-labelledby="project-title"
        onClose={() => setSelected(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) close()
        }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') move(1)
          if (e.key === 'ArrowLeft') move(-1)
        }}
      >
        {selected && (
          <div className="project-dialog-inner">
            <div className="dialog-top">
              <span>MAINOSKILPI / TOTEUTUSGALLERIA</span>
              <button className="icon-button" onClick={close} aria-label="Sulje toteutus">
                <X />
              </button>
            </div>
            <Photo
              className="dialog-photo"
              name={selected.image}
              alt={selected.alt}
              eager
              sizes="90vw"
            />
            <div className="dialog-content">
              <div>
                <p className="eyebrow">{selected.category}</p>
                <h2 id="project-title">{selected.title}</h2>
                <p>{selected.text}</p>
                <a
                  className="source-link"
                  href={`http://www.mainoskilpi.fi/perch/resources/${selected.source}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Alkuperäinen kuva Mainoskilven sivustolla ↗
                </a>
                <p className="image-credit">
                  Yksityisen demon kuva. Julkaisulupa varmistettava oikeudenhaltijalta.
                </p>
              </div>
              <Link
                className="button"
                to={`/yhteystiedot?palvelu=${selected.service}`}
                onClick={close}
              >
                Kysy vastaavasta toteutuksesta <ArrowUpRight size={18} />
              </Link>
            </div>
            <div className="dialog-pagination">
              <button onClick={() => move(-1)}>
                <ChevronLeft size={18} /> Edellinen
              </button>
              <span>
                {visible.findIndex((p) => p.id === selected.id) + 1} / {visible.length}
              </span>
              <button onClick={() => move(1)}>
                Seuraava <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  )
}
