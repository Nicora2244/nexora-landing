import { useState } from 'react'

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#explora', label: 'Qué incluye' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur">
      <div className="mx-auto flex max-w-page items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-2xl font-bold tracking-tight text-white">
          Nexora<span className="text-amber">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contacto" className="btn-primary hidden md:inline-flex">
          Hablemos
        </a>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menú"
        >
          <span className="text-xl leading-none">{open ? '×' : '☰'}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-sans text-sm font-medium text-white/80"
              >
                {link.label}
              </a>
            ))}
            <a href="#contacto" onClick={() => setOpen(false)} className="btn-primary mt-2 justify-center">
              Hablemos
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
